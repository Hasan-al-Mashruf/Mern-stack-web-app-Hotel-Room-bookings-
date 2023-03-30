import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Image1 from '../assets/images/slider-2.jpg'
import { AuthContext } from '../context/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const { refetch, isLoading, error, data = [] } = useQuery({
        queryKey: [user?.email],
        queryFn: () =>
            fetch(`https://hotelbookings-server.vercel.app/bookings?email=${user?.email}`)
                .then((res) => res.json())
    })
    console.log(data)
    return (
        <div>
            <div style={{ backgroundImage: `url(${Image1})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className='max-w-[1170px] mx-auto'>
                    <div className='pt-48 pb-12 text-white '>
                        <a className='pr-8 home relative'>Home</a>
                        <a className='pr-8'>checkout</a>
                        <div className='mt-6 '>
                            <h4 className='hotelName relative text-3xl text-white'>Checkout</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1170px] mx-auto min-h-[60vh] py-5'>
                <div className='mb-8 mt-2'>
                    <h2 className='text-3xl mb-1'>Hlw, <span className='font-semibold text-red-500'>{user?.displayName}</span></h2>
                    <h4 className='text-md'>You have {data.length} bookings</h4>
                </div>
                <div className='md:overflow-x-hidden overflow-x-scroll'>
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">

                        <tbody>
                            {data?.map((room, index) =>
                                <tr class="bg-white border-b my-3">
                                    <th scope="row" class="px-4 py-4 font-medium whitespace-nowrap text-gray-500">{index + 1}</th>
                                    <td scope="row" class="px-4 py-4 font-medium whitespace-nowrap text-gray-500 relative">
                                        <img src={room.roomImage} alt="" className='md:w-40 rounded w-30' />
                                        <h5 className='mt-1 md:mt-0 text-xl top-[50px] left-[120px] md:absolute bg-red-500 text-white px-3'>{room?.roomName}</h5>
                                    </td>
                                    <td scope="row" class="px-4 py-4 font-medium whitespace-nowrap text-gray-500">{room.checkin}(checkin)</td>
                                    <td scope="row" class="px-4 py-4 font-medium whitespace-nowrap text-gray-500">{room.checkout}(checkout)</td>
                                    <td scope="row" class="px-4 py-4 font-medium whitespace-nowrap text-gray-500">{room.prize}(prize)</td>
                                    <td scope="row" class="px-4 py-4 font-medium whitespace-nowrap text-gray-500">pending</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Checkout;