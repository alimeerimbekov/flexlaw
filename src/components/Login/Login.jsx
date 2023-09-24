import React from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {Button, NavLink} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {fillUser} from "../../redux/reducers/user";
import {BiErrorCircle} from "react-icons/bi";
import {useToast} from '@chakra-ui/react'


const Login = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const toast = useToast()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({mode: 'onTouched'})

    const loginUser = data => {
        axios
            .post('/auth/login', data)
            .then(({data}) => {
                dispatch(fillUser(data))
                navigate('/')
            })
            .catch(err => toast({
                title: 'Такого аккаунта не существует',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'center-top'
            }))
    }

    return (
        <div className='register' style={{background: "blueviolet"}}>
            <Container style={{display: "flex", alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                <Form style={{width: 600, background: 'aliceblue', padding: 40, borderRadius: 20}}
                      onSubmit={handleSubmit(loginUser)}
                >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>ИНН</Form.Label>
                        <Form.Control type="num" placeholder="Введите ИНН паспорта"
                                      {...register('inn', {
                                          required: {
                                              message: 'Убедитесь в правильности написания',
                                              value: true,
                                          },
                                          minLength: {
                                              message: 'должно быть 14 символов',
                                              value: 14,
                                          },
                                      })}/>
                        <span className='register__error'>
								{errors.inn && <BiErrorCircle fill='#f5222d'/>}
                            <span className='register__error-text'>
									{errors.inn && errors.inn.message}
								</span>
							</span>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль"
                                      {...register('password', {
                                          required: {
                                              message: 'Введите пароль',
                                              value: true,
                                          },
                                          maxLength: {
                                              message: 'Максимально 20 символов',
                                              value: 20,
                                          },
                                          minLength: {
                                              message: 'Минимально 8 символов',
                                              value: 8,
                                          },
                                          pattern: {
                                              message: 'Убедитесь в правильности написания пароля',
                                              value: /(?=.*[0-9])(?=.*[a-z]){6,}/g,
                                          },
                                      })}/>
                    </Form.Group>
                    <div style={{display: "flex", flexDirection: 'row', justifyContent: "space-between"}}>
                        <div>У меня нет аккаунта
                            <NavLink
                                href={'/register'}
                                     style={{textDecoration: "underline", color: 'blue'}}>Зарегистрироваться</NavLink></div>
                        <Button style={{textAlign: "end"}} type={'submit'}>Войти</Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Login;