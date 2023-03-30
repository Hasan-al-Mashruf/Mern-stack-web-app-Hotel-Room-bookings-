import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer className="p-4 bg-gray-700">
            <div className='max-w-[1170px] mx-auto'>
                <div className='flex justify-between items-center flex-col md:flex-row'>
                    <div className="">
                        <p className='text-white'>Copyright © 2023 - All right reserved to <strong className='font-bold'>Moeenuddin ahmad hasan</strong></p>
                    </div>
                    <div className='flex items-center cursor-pointer mt-5 md:mt-0'>
                        <div className='w-8 h-8 rounded-full border flex items-center border-[#8686866b] justify-center hover:bg-[#8686866b]'> 
                            <FaFacebookF className='text-white' />
                        </div>
                        <div className='w-8 h-8 rounded-full border flex items-center border-[#8686866b] justify-center mx-5 hover:bg-[#8686866b]'> 
                            <AiOutlineTwitter className='text-white' />
                        </div>
                        <div className='w-8 h-8 rounded-full border flex items-center border-[#8686866b] justify-center hover:bg-[#8686866b]'> 
                            <AiOutlineInstagram className='text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;