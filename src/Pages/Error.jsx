import React from 'react';
import Lottie from "lottie-react";
import Bg from '../assets/comingSoon.json'
import Header from '../components/Header/Header';

const Error = () => {
    return (
        <div className=''>
            <Header />
            <div className='md:w-1/2 mx-auto md:h-screen flex items-center justify-center w-full h-[50vh]'>
                <Lottie animationData={Bg} loop={true} />;
            </div>
        </div>
    );
};

export default Error;