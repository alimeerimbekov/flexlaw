import React from 'react';
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import axios from "../../utils/axios";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Button, ButtonGroup, NavLink} from "react-bootstrap";
import {BiErrorCircle} from "react-icons/bi"
import {fillUser} from "../../redux/reducers/user";
import InputGroup from 'react-bootstrap/InputGroup';

const Register = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({mode: 'onTouched'})

    const registerUser = data => {
        axios.post('auth/register', data)
            .then(({data}) => {
                dispatch(fillUser(data))
                navigate('/')
            })
            .catch(err => alert(err.message))
    }

    return (
        <div className='register' style={{background: "blueviolet"}}>
            <Container style={{display: "flex", alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                <Form style={{width: 600, background: 'aliceblue', padding: 40, borderRadius: 20}}
                      onSubmit={handleSubmit(registerUser)}
                >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>ФИО</Form.Label>
                        <Form.Control type="text" placeholder="Асанов Усон"
                                      {...register('name', {
                                          required: {
                                              message: 'Enter a first name',
                                              value: true,
                                          },
                                          maxLength: {
                                              message: 'Maximum length 20 characters',
                                          },
                                          minLength: {
                                              message: 'Minimum length 3 characters',
                                              value: 3,
                                          },
                                      })}/>
                        <span className='register__error'>
									{errors.name && <BiErrorCircle fill='#f5222d'/>}
                            <span className='register__error-text'>
										{errors.name && errors.name.message}
									</span>
								</span>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Паспорт ИНН</Form.Label>
                        <Form.Control type="num" placeholder="21101202023412"
                                      {...register('inn', {
                                          required: {
                                              message: 'Введите ИНН паспорта',
                                              value: true,
                                          },
                                          maxLength: {
                                              message: 'Maximum length 14 characters',
                                              value: 14,
                                          },
                                          minLength: {
                                              message: 'Minimum length 14 characters',
                                              value: 14,
                                          },
                                      })}/>
                        <span className='register__error'>
									{errors.inn && <BiErrorCircle fill='#f5222d'/>}
                            <span className='register__error-text'>
										{errors.inn && errors.surname.message}
									</span>
								</span>
                    </Form.Group>
                    <Form.Label>Телефон номер</Form.Label>
                    <InputGroup className="mb-3" controlId="exampleForm.ControlInput1">
                        <InputGroup.Text id="tel">+996</InputGroup.Text>
                        <Form.Control type="tel" aria-describedby={'tel'} placeholder="502999888"
                                      {...register('phone', {
                                          required: {
                                              value: true,
                                              message: 'Это поле обязательное',
                                          },
                                          pattern: {
                                              value: /^\d{3}\d{2}\d{2}\d{2}$/,
                                              message: 'Заполните номер телефона',
                                          },
                                      })}/>
                    </InputGroup>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Пароль
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Введите пароль"
                                          {...register('password', {
                                              required: {
                                                  message: 'Enter a password',
                                                  value: true,
                                              },
                                              maxLength: {
                                                  message: 'Maximum length 20 characters',
                                                  value: 20,
                                              },
                                              minLength: {
                                                  message: 'Minimum length 8 characters',
                                                  value: 8,
                                              },
                                              pattern: {
                                                  message: 'Enter your password correctly',
                                                  value: /(?=.*[0-9])(?=.*[a-z]){6,}/g,
                                              },
                                          })}/>
                            <span className='register__error'>
									{errors.password && <BiErrorCircle fill='#f5222d'/>}
                                <span className='register__error-text'>
										{errors.password && errors.password.message}
									</span>
								</span>
                        </Col>
                    </Form.Group>
                    <div style={{display: "flex", flexDirection: 'row', justifyContent: "space-between"}}>
                        <span> У меня есть аккаунт
                            <NavLink href={('/login')}
                                     style={{textDecoration: "underline", color: 'blue'}}>Войти</NavLink></span>
                        <Button
                            style={{width: "max-content"}}
                            type={'submit'}>Регистрация</Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Register;