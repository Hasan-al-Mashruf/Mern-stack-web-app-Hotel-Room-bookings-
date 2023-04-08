import React from "react";
import Image1 from '../../assets/images/slider-1.jpg';
import Image2 from '../../assets/images/slider-2.jpg';
import Image3 from '../../assets/images/slider-3.jpg';
import Image4 from '../../assets/images/slider-4.jpg';


import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper";

const sliderContent = [
    { id: 0, img: Image1, description: "10 reasons you'll love Australias' Bayron bay" },
    { id: 1, img: Image2, description: "Ditch Las Vegas and see a difference side of nevada" },
    { id: 2, img: Image3, description: "10 reasons you'll love Australias' Bayron bay" },
    { id: 3, img: Image4, description: "10 reasons you'll love Australias' Bayron bay" }
]

const Hero = () => {
    return (

        <Swiper
            spaceBetween={30}
            effect={"fade"}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Autoplay, Pagination]}
            className="mySwiper"
        >

            {
                sliderContent.map(content => <div className="relative">
                    <SwiperSlide style={{ backgroundImage: `url(${content.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }} key={content.id}>
                        <div className="max-w-[1170px] mx-auto flex flex-col">
                            <div className="grid grid-cols-7 place-items-center h-screen">
                                <div className="md:col-span-4 col-span-7">
                                    <h4 className="text-xl uppercase text-white">Featured trip</h4>
                                    <h2 className="text-5xl my-8 text-white ">{content?.description}</h2>
                                    <button className="btn btn-outline text-white">Book room</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bg-[#3b3b3b75] h-screen w-screen top-0 -z-10">
                            
                        </div>
                    </SwiperSlide>
                </div>
                )
            }

        </Swiper>


    );
};

export default Hero;