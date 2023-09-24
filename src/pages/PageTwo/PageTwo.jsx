import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {useSelector} from "react-redux";
import {userSelector} from "../../redux/reselect";
import {useNavigate} from "react-router-dom";
import {Button, ButtonGroup} from "react-bootstrap";
import MyPet from "../../components/MyPet";

const PageTwo = () => {


    const {user} = useSelector(userSelector)
    const navigate = useNavigate()

    const [active, setActive] = useState(false)

    const {
        reset,
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({mode: 'onTouched'})

    const sendLaw = (data) => {


        const law = {
            senderId: user._id,
            ...data
        }

        axios.post("/law/send", law)
            .then((res) => {
                console.log(res)
                navigate('/')
                reset()
            })
            .catch((err) => console.log(err))
    }

    return (
        <section className='pageTwo'>
         <div className="container">
             <ButtonGroup style={{marginBottom: '20px'}}>
                 <Button onClick={() => setActive(false)}>Мои петиции</Button>
                 <Button onClick={() => setActive(true)}>Добавить петицию</Button>
             </ButtonGroup>

             <MyPet active={active} setActive={setActive} />
             <form
                 className='pageTwo__form'
                 onSubmit={handleSubmit(sendLaw)} style={{background: "aliceblue", borderRadius: 20, padding: "10px 30px", display: active ? 'flex' : 'none'}}>
                 <label className='pageTwo__form-label'>
                     <h2 className='pageTwo__form-title'>Дайте название вашей петиции</h2>
                     <input
                         className='pageTwo__form-field'
                         type="text" placeholder='Что вы хотите изменить? Пример: Спасите нашу игровую площадку!'
                         {...register('title')}
                     />
                 </label>
                 <label>
                     <h2 className='pageTwo__form-title'>Опишите ваш запрос</h2>
                     <textarea
                         className='pageTwo__form-field'
                         {...register('desc')}
                         placeholder='Чего вы хотите добиться и как это реализовать?'/>
                 </label>

                 <label>
                     <h2 className='pageTwo__form-title'>Объясните, почему ваша петиция важна</h2>
                     <input
                         className='pageTwo__form-field'
                         type="text"
                         {...register('text')}
                         placeholder='Почему утверждение важно для вас и других? Почему нужно действовать сейчас?'/>
                 </label><label>
                     <h2 className='pageTwo__form-title'>Полное имя</h2>
                     <input
                         className='pageTwo__form-field'
                         type="text"
                         {...register('userName')}
                         placeholder='Имя'/>
                 </label>

                <div className='pageTwo__form-btn'>
                    <button className='pageTwo__btn' type={"submit"}>Опубликовать петицию</button>
                </div>
             </form>
         </div>
            
        </section>
    );
};

export default PageTwo;