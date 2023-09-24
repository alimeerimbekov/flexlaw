import React from 'react';
import {CgProfile} from "react-icons/cg";

const CommitCard = () => {



    return (
        <div className='commitCard'>
            <div className='commitCard__prof'>
                <div className='commitCard__prof-icon'>
                    <CgProfile/>
                </div>
                <div className='commitCard__admin'>
                    <p className='commitCard__admin-suname'>Никиреева Виктория Павловна</p>
                </div>
            </div>
            <div className='commitCard__info'>
                <p className='commitCard__info-desc'></p>

            </div>
        </div>
    );
};

export default CommitCard;