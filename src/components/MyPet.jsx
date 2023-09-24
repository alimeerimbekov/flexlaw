import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {myLawsSelector, userSelector} from "../redux/reselect";
import {getMyLaws} from "../redux/reducers/myLaws";

const MyPet = ({active, setActive}) => {

    const {data} = useSelector(myLawsSelector)
    const dispatch = useDispatch()
    const {user} = useSelector(userSelector)


    useEffect(() => {
        dispatch(getMyLaws(user._id))
    },[data])


    return (
        <div style={{display: !active ? 'flex' : 'none'}}>
            {
               data.map((item) => (
                   <div>
                       <div className='petitionCard__box'>
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
                   </div>
               ))
            }
        </div>
    );
};

export default MyPet;