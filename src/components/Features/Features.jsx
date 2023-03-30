import React from 'react';
import Image1 from '../../assets/images/icon-1.png'
import Image2 from '../../assets/images/icon-2.png'
import Image3 from '../../assets/images/icon-3.png'
import Image4 from '../../assets/images/icon-4.png'
const Features = () => {
    return (
        <div className='bg-[#F2F2F2] py-16'>
            <div className='max-w-[1170px] mx-auto'>
                <div className="text-center mb-10">
                    <h2 className='text-3xl text-[#333]'>Let’s start width some benefits <strong>Hotel</strong></h2>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-x-2 gap-y-10">
                    <div>
                        <div className="card card-compact">
                            <figure><img src={Image1} alt="Shoes" /></figure>
                            <div className="card-body items-center">
                                <h2 className="card-title mb-5">Passionate Room</h2>
                                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card card-compact">
                            <figure><img src={Image2} alt="Shoes" /></figure>
                            <div className="card-body items-center">
                                <h2 className="card-title mb-5">Diverse Destinations</h2>
                                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card card-compact">
                            <figure><img src={Image3} alt="Shoes" /></figure>
                            <div className="card-body items-center">
                                <h2 className="card-title mb-5">Value for Money</h2>
                                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card card-compact">
                            <figure><img src={Image4} alt="Shoes" /></figure>
                            <div className="card-body items-center">
                                <h2 className="card-title mb-5">Beautiful Places</h2>
                                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;