import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Form from '../components/Form/Form';
import Features from '../components/Features/Features';
import DiscountRooms from '../components/DiscoutRooms/DiscountRooms';
import Testimonial from '../components/Testimonial/Testimonial';
import Rooms from '../components/Rooms/Rooms';
import CountDown from '../components/CountDown/CountDown';
import { FallingLines } from 'react-loader-spinner'

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoaded ? (
                <div>
                    <Hero />
                    <Form />
                    <Features />
                    <DiscountRooms />
                    <Testimonial />
                    <Rooms />
                    <CountDown />
                </div>
            ) : (
                <div className='flex items-center justify-center h-screen'>
                    <FallingLines
                        color="#E4A205"
                        width="150"
                        visible={true}
                        ariaLabel='falling-lines-loading'
                    />
                </div>
            )}

        </div>
    );
};

export default Home;