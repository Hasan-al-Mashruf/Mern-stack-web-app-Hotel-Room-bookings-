import React from 'react';
import MyDatepicker from '../Datepicker/MyDatepicker';

const Form = () => {
    return (
        <div className='max-w-[1170px] mx-auto bg-white p-2'>
            <form action="" className='md:flex items-center form'>
                <div className='md:w-[40%] md:px-10 px-5 input-divider relative'>
                    <h2 className='mb-2'>When</h2>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <div className='flex items-center'>
                                <MyDatepicker info={'check in'} />
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <MyDatepicker info={'check out'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-[40%] md:px-10 px-5  mt-4 md:mt-0 input-divider relative'>
                    <h2>people</h2>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <div className='flex items-center'>
                                <input type="number" placeholder="children" className="input input-ghost w-full p-0" />
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <input type="number" placeholder="adult" className="input input-ghost w-full p-0" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-[20%] md:px-10 px-5  mt-5 md:mt-0 text-start'>
                    <input type="submit" value="Check here" className='btn btn-primary text-white' />
                </div>
            </form>
        </div>
    );
};

export default Form;