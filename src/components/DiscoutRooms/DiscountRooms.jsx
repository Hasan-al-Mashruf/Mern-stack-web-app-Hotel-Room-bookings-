import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";



// import required modules
import { FreeMode, Navigation } from "swiper";
import { useQuery } from '@tanstack/react-query';
import Star from '../Star/Star';
import { Link } from 'react-router-dom';



const DiscountRooms = () => {

    const { isLoading, error, data = [] } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://hotelbookings-server.vercel.app/rooms')
                .then((res) => res.json())
    })


    return (
        <div className='max-w-[1170px] mx-auto mt-20 relative'>
            <div>
                <div className='text-center mb-10'>
                    <h2 className='text-3xl font-bold text-[#333] mb-3 '>Room Deals and Discounts</h2>
                    <a href="" className='underline text-yellow-600'>View All Discount Rooms</a>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={{
                        nextEl: '.button-next-slide',
                        prevEl: '.button-prev-slide',
                    }}
                    modules={[FreeMode, Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                    className="roomsSwiper"
                >

                    {
                        data?.map(room => <div key={room._id}>
                            <SwiperSlide><Link to={`/roomDetails/${room?._id}`}>
                                <div className="card card-compact shadow-md rounded-none">
                                    <div className='relative'>
                                        <div className='relative roomImage inline-block'>
                                            <img src={room.img} alt="Shoes" className='block h-auto w-full' />
                                            <div className='absolute bottom-0 left-0 bg-[#ffffff4d] w-full pl-3 p-3'>
                                                <Star rating={room?.rating}></Star>
                                            </div>
                                            <div className='image-overlay'>

                                            </div>
                                        </div>
                                        {room?.status ? <span className='bg-[#26bdf7] px-3 py-1 absolute top-[15px] right-[-7px] status'>{room?.status}</span> : undefined}
                                    </div>

                                    <div className="card-body">
                                        <div className='grid grid-cols-4'>
                                            <div className='col-span-3'>
                                                <h3 className="card-title">{room.name}</h3>
                                            </div>
                                            <div className='text-end'>
                                                <span className={room?.oldPrize ? 'text-gray-600 line-through' : 'text-gray-600'}>{room?.oldPrize ? <>${room.oldPrize}</> : 'From'}</span> <br />  <h3 className='text-2xl text-yellow-600'> ${room.prize}</h3>
                                            </div>
                                            <div className='col-span-3 mt-3'>
                                                <p>{room.details}</p>
                                            </div>
                                        </div>
                                        <div className='card-footer pt-3 flex text-[#666]'>
                                            <div className='mr-5'>
                                                <span className='people'>{room.people.adults} people</span>
                                            </div>
                                            <div>
                                                <span className='children'>{room.people.children} children</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                            </SwiperSlide>
                        </div>

                        )
                    }

                    <div className='flex justify-end mt-6'>
                        <button className='button-prev-slide bg-yellow-600 text-white'></button>
                        <button className='button-next-slide ml-3 bg-yellow-600 text-white'></button>
                    </div>

                </Swiper>
            </div>

        </div>
    );
};

export default DiscountRooms;