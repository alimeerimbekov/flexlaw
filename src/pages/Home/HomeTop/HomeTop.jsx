import React from 'react';
import photo from '../../../assets/images/home.jpg'

const HomeTop = () => {
    return (
        <section className='home__top' style={{display: "flex", alignItems: "center"}}>
            <div className='home__top-images'>
                <img src={photo} alt="Photo" style={{borderRadius: 20, marginRight: -30}}/>
            </div>
            <div className="home__top-text" style={{
                background: "azure",
                padding: "30px",
                borderRadius: 20,
                marginLeft: -70
            }}>
                <h3 className='home__top-title'>Ваш голос создает перемены</h3>
                <div className='home__top-info'>
                    <div className='home__top-litl'>
                        <h4 className='home__top-litleTitle'>Платформа для петиций и политического диалога</h4>
                        <p className='home__top-desc'>Вы видите проблему и хотите что-то с ней сделать? Вы не одиноки! 13 миллионы человек участвуют на нашей платформе для активного решения социальных проблем.</p>
                    </div>
                    <div className='home__top-litl'>
                        <h4 className='home__top-litleTitle'>Каждый день люди успешно подают онлайн-петиции.</h4>
                        <p className='home__top-desc'>поддерживаем вашу кампанию от создания до реализации.

                            openPetition является политически нейтральной, некоммерческой и независимой организацией.</p>
                    </div>
                    <div className='home__top-litl'>
                        <h4 className='home__top-litleTitle'>Мы даем право голоса каждому.</h4>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HomeTop;