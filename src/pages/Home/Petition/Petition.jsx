import React, {useEffect} from 'react';
import PetitionCard from "../../../components/PetitionCard/PetitionCard";
import {useDispatch, useSelector} from "react-redux";
import {lawsSelector} from "../../../redux/reselect";
import {getLaws} from "../../../redux/reducers/laws";

const Petition = () => {

    const {data} = useSelector(lawsSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLaws())
    }, [data])


    return (
        <section className='petition'>
            <h3 className='petition__title'>Эти петиции в настоящее время могут быть подписаны</h3>
            <div className='petition__block'>
                {
                    data.map(item => (
                        <PetitionCard item={item}/>
                    ))
                }
            </div>
        </section>
    );
};

export default Petition;