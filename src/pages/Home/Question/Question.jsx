import React from 'react';
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const Question = () => {
    return (
        <section className='question'>
            <div className="container">
                <div className='question__block' style={{borderRadius: 20}}>
                    <h2 className='question__title'>Бугун эмнени озгортууну каалайсыз?</h2>
                    <Form.Group style={{width: 800, display: "flex", flexDirection: "row", columnGap: 20, alignItems: "baseline"}} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={2}/>
                        <Button className='question__btn' variant={'light'}>Петиция киргизуу</Button>
                    </Form.Group>
                </div>
            </div>

        </section>
    );
};

export default Question;