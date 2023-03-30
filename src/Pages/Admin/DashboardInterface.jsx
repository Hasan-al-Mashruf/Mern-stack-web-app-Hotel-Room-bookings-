import React from 'react';
import { Link } from 'react-router-dom';

const DashboardInterface = () => {
    
    return (
        <div>
            <h2 className='text-white text-2xl mb-5'>This is dashboard interface</h2>
            <div className="md:grid grid-cols-3 gap-0">
                <div className="shadow-md h-[30vh] p-10 flex items-center justify-center flex-col">
                    <h4 className='text-white'>Total number of rooms : 6</h4>
                    <Link className='text-yellow-400'>View in details</Link>
                </div>
                <div className="shadow-md h-[30vh] p-10 flex items-center justify-center flex-col bg-[#4442422e]">
                    <h4 className='text-white'>Total number of guest : 4</h4>
                    <Link className='text-yellow-400'>View guest list</Link>
                </div>
                <div className="shadow-md h-[30vh] p-10 flex items-center justify-center flex-col">
                    <h4 className='text-white'>Total number of bookings : 18</h4>
                    <Link className='text-yellow-400'>View all bookings</Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardInterface;