import React, { useEffect } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const TopHeader = () => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 400) {
                document.getElementById('topHeader').style.display = 'none'
            } else if(window.scrollY < 400) {
                document.getElementById('topHeader').style.display = 'block'
            }
        })
    }, [])

    return (
        <div className='max-w-[1170px] mx-auto py-2 ' id='topHeader'>
            <div className='flex items-center justify-end '>
                <div className='flex items-center mr-4'>
                    <AiOutlinePhone />
                    <span className='ml-2 text-sm'> 01784423398</span>
                </div>
                <div className='flex items-center'>
                    <BsFillEnvelopeFill />
                    <span className='ml-2 text-sm'> mashruf125@gmail.com</span>
                </div>
            </div>
        </div>

    );
};

export default TopHeader;