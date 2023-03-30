import React from 'react';
import video from '../../assets/video.mp4'
import Countdown from 'react-countdown';

const CountDown = () => {
    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown

            return <div className='grid md:grid-cols-4 grid-cols-2 lg:w-[600px] md:w-3/5 w-[fit-content] mx-auto gap-y-12 gap-2'>
                <div>
                    <span className='w-24 bg-[#ffb300] text-[#333] text-3xl p-7 rounded-md mx-3 font-semibold'>0{days}</span>
                    <h6 className='text-white'>Days</h6>
                </div>
                <div>
                    <span className='w-24 bg-[#ffb300] text-[#333] text-3xl p-7 rounded-md mx-3 font-semibold'>0{hours}</span>
                    <h6 className='text-white'>Months</h6>
                </div>
                <div>
                    <span className='w-24 bg-[#ffb300] text-[#333] text-3xl p-7 rounded-md mx-3 font-semibold'>{minutes}</span>
                    <h6 className='text-white'>Minutes</h6>
                </div>
                <div>
                    <span className='w-24 bg-[#ffb300] text-[#333] text-3xl p-7 rounded-md mx-3 font-semibold'>{seconds}</span>
                    <h6 className='text-white'>Seconds</h6>
                </div>



            </div>
        }
    };

    return (
        <div className='mt-20 relative h-[100vh]' >
            <video src={video} autoPlay muted loop style={{ height: '100%', width: '100%', objectFit: 'cover', }}></video>
            <div className='overlay w-full'></div>
            <div className='absolute top-1/2 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 '>
                <div className='lg:w-[700px] mx-auto py-10 w-full'>
                    <div className='content text-center mt-20'>
                        <h1 className='md:text-4xl text-3xl text-white md:leading-[3.5rem] font-semibold'>Special Rooms in April, Discover London for 100 customers with <span className='bg-[#ffb300] p-1 text-[#333]'>discount 50%</span></h1>
                        <span className='w-14 h-1 bg-white relative inline-block my-6 line' ></span>
                        <h6 className='text-xl text-white'>It’s limited seating! Hurry up</h6>
                    </div>
                    <div className='text-center mt-16 mb-10'>
                        <Countdown date={Date.now() + 445140000} renderer={renderer} />,
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary'>Get rooms</button>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default CountDown;