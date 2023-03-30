import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from '../../assets/images/person-woman-hotel-laptop.jpg';
import Image2 from '../../assets/images/slider-4.jpg';
import Image3 from '../../assets/images/person-testimonial-2.jpg';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const sliderInfo = [
    { id: 1, img: Image1 },
    { id: 2, img: Image2 },
    { id: 3, img: Image3 }
]

const Testimonial = () => {
    return (
        <div className='mt-14 mb-20'>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={false}
                loop={true}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}

                modules={[Pagination]}
                className="testimonial"
            >
                {
                    sliderInfo.map(info => <div key={info.id}>
                        <SwiperSlide style={{ backgroundImage: `url(${info.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <div className='my-24 max-w-xl ml-auto bg-white text-dark p-12 mr-8 rounded-sm text-center content-inner'>
                                <p className='text-justify text-[17px]'>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore veritatis.</p>
                                <div className='mt-4 '>
                                    <h4>John Doe</h4>
                                    <p>Developer Company</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;