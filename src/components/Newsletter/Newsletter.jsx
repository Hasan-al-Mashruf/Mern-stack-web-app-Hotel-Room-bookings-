import React from 'react';

const Newsletter = () => {
    return (
        <div className='h-[300px] relative'>
       
            <div className='overlay w-full'></div>
            <div className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h4 className='text-2xl text-white'>To receive our best monthly deals</h4>
                <h3 className='text-3xl text-white my-5'>JOIN THE NEWSLETTER</h3>
                <span className='w-14 h-1 bg-white relative inline-block my-6 line' ></span>
                <div className='mt-5 flex content'>
                    <input type="text" placeholder="Check in" className="input input-bordered w-full p-0 rounded-none" />
                    <input type="submit" value="Subscribe" className='btn btn-primary rounded-none' />
                </div>
            </div>

        </div>
    );
};

export default Newsletter;