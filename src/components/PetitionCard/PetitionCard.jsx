import React from 'react';
import {useNavigate} from "react-router-dom";

const PetitionCard = ({item}) => {

    const navigate = useNavigate()

    return (
        <div className='petitionCard__box' onClick={() => navigate(`/comment/${item._id}`)}>
            <h2 className='petitionCard__box-user'>{item.userName}</h2>
            <div className='petitionCard__box-info'>
                <h3 className='petitionCard__box-title'>{item.title}</h3>
                <p className='petitionCard__box-desc'>{item.desc}</p>
            </div>
            <div className='petitionCard__box-bottom'>
                <div className='petitionCard__box-subscription'>
                    <span className='petitionCard__box-count'>34</span>
                    <p className='petitionCard__box-text'>Подписи</p>
                </div>
                <div className='petitionCard__box-commit'>
                    Комментарии
                </div>
            </div>

            
        </div>
    );
};

export default PetitionCard;