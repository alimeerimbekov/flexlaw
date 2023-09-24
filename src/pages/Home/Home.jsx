import React from 'react';
import HomeTop from "./HomeTop/HomeTop";
import Question from "./Question/Question";
import Petition from "./Petition/Petition";
import Header from "../../Layout/Header/Header";

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <HomeTop/>
                <Question/>
                <Petition/>
            </div>
        </div>

    );
};

export default Home;