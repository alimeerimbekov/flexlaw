import React, {useEffect, useState} from 'react';
import CommitCard from "../../components/CommitCard/CommitCard";
import axios from "../../utils/axios";
import {useParams} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {userSelector} from "../../redux/reselect";

const Commit = () => {

    const {user} = useSelector(userSelector)

    const [laws, setLaws] = useState({})

    const [active, setActive] = useState(false)

    const {id} = useParams()

    useEffect(() => {
        axios(`/get/laws/${id}`)
            .then(({data}) => setLaws(data))
            .catch((err) => alert(err.message))
    }, [laws])

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({mode: 'onTouched'})

    const addComment = data => {

        let comm = {
            comment: {
                ...data, userId: user._id
            },
            lawsId: laws._id
        }

        axios.post('/comment/add', comm)
            .then((res) => {
                console.log(res)
                reset()
                setActive(false)
            })
            .catch(err => alert(err.message))
    }

    // const [co, setCo] = useState({})
    // useEffect(() => {
    //     axios(`comment/${id}`)
    //         .then(({data}) => setCo(data))
    //         .catch((err) => alert(err.message))
    // }, [co])
    //
    // console.log(co)

    return (
        <section className='commit'>
            <div className="container">
                <h2 className='commit__name'>{laws.userName}</h2>
                <div className='commit__info'>
                    <h3 className='commit__title'>{laws.title}</h3>
                    <p className='commit__desc'>
                        {laws.desc} <br/>
                        {laws.text}
                    </p>
                </div>
                <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
                    <p className='commit__text'>Комментарии</p>
                    <Button onClick={() => setActive(true)}>Оставить коментарий</Button>
                </div>

                <Form style={{display: active ? "block" : 'none'}} onSubmit={handleSubmit(addComment)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Поделитесь мнением</Form.Label>
                        <Form.Control as="textarea" rows={3}
                                      {...register("text", {
                                          required: true
                                      })}
                        />
                    </Form.Group>

                    <Button type={"submit"}>Отправить</Button>
                </Form>

                <div className='commit__block'>
                    <CommitCard/>
                </div>

            </div>

        </section>
    );
};

export default Commit;