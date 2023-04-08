import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Image1 from '../assets/images/slider-2.jpg'
import MyDatepicker from '../components/Datepicker/MyDatepicker';
import { AuthContext } from '../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import Star from '../components/Star/Star'
import Reviews from '../components/Reviews/Reviews';

const RoomDetails = () => {
    const detailsRoom = useLoaderData();
    const [showTab, setShowTab] = useState(0)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const bookRoom = (e) => {
        e.preventDefault()
        const form = e.target
        const checkin = form.checkin.value
        const checkout = form.checkout.value
        const quantity = parseInt(form.number.value)
        const name = user.displayName
        const roomName = detailsRoom?.name
        const roomImage = detailsRoom?.img
        const email = user.email
        const prize = detailsRoom.prize * quantity
        const img = user.photoURL
        const bookings = {
            roomImage, roomName, name, email, checkin, checkout, quantity, prize, img
        }

        saveBookings(bookings)
    }

    const saveBookings = (bookings) => {
        fetch("https://hotelbookings-server.vercel.app/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookings),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                navigate('/checkout')
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }


    return (
        <div>

            <div style={{ backgroundImage: `url(${Image1})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className='max-w-[1170px] mx-auto'>
                    <div className='pt-48 pb-12 text-white'>
                        <a className='pr-8 home relative'>Home</a>
                        <a className='pr-8 name relative'>Hotels</a>
                        <a>{detailsRoom?.name}</a>
                        <div className='mt-6 '>
                            <h4 className='hotelName relative text-3xl text-white'>Hotels</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10 md:grid grid-cols-6 gap-14 max-w-[1170px] mx-auto'>
                <div className='col-span-4'>
                    <h2 className='mb-8 text-5xl text-[#333]'>{detailsRoom?.name}</h2>
                    <hr />
                    <div className='flex my-6 justify-between'>
                        <div className='flex'>
                            <div className='mr-5'>
                                <span className='people '>{detailsRoom?.people?.adults} adults</span>
                            </div>
                            <div>
                                <span className='children'>{detailsRoom.people.children} children</span>
                            </div>
                        </div>
                        <div>
                            <span className='category'>{detailsRoom.category}</span>
                        </div>
                    </div>
                    <div className='mt-3 relative overflow-hidden detailsRoomImg'>
                        <img src={detailsRoom?.img} alt="roomImage" className='w-full h-80 object-cover' />
                        <div className="absolute top-0 detailsRating bg-[#1d1d1d8c] w-full h-full flex justify-center items-end">
                            <div className='bg-[#c9c7c750] w-1/3 p-0 flex justify-center mx-10 h-0 rating'>
                                <Star rating={detailsRoom?.rating} />
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div>
                            <button className={showTab == 0 ? `btn bg-yellow-400 border-none text-white rounded-none` : `btn bg-[#f2f2f2] border-none text-[#333] rounded-none`} onClick={() => setShowTab(0)}>Description</button>

                            <button className={showTab !== 0 ? `btn bg-yellow-400 border-none text-white rounded-none ml-5` : `btn bg-[#f2f2f2] border-none text-[#333] rounded-none ml-5`} onClick={() => setShowTab(1)}>Reviews</button>
                        </div>
                        <div className='border-2 border-yellow-400 p-5 min-h-[40vh] mb-5'>
                            {showTab == 0 ? <p>
                                {
                                    detailsRoom?.description ? detailsRoom?.description : 'Donec sed odio dui. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
                                }
                            </p> :
                                <Reviews productName={detailsRoom?.name} />
                            }

                        </div>
                    </div>
                </div>
                {/* right column */}
                <div className='col-span-2 border md:p-6 relative h-[max-content] -top-10 my-5 md:my-0'>
                    <h2 className='bg-yellow-400 py-3 md:absolute -top-14 w-full left-0 pl-5 text-2xl text-white font-bold'>${detailsRoom.prize}<span className='text-[#353535]'>/Night</span></h2>
                    <h4 className='text-center text-2xl checkout-header relative mb-8 text-[#424141] mt-5 md:mt-0'>Book Room</h4>
                    <form action="" className='checkout h-[max-content]' onSubmit={bookRoom}>
                        <div className='my-4'>
                            <span className='text-sm text-[#5c5c5c]'>Check in</span>
                            <MyDatepicker info={'DD/MM/YEAR'} name={'checkin'} />
                        </div>
                        <div className='my-4'>
                            <span className='text-sm text-[#5c5c5c]'>Check out</span>
                            <MyDatepicker info={'DD/MM/YEAR'} name={'checkout'} />
                        </div>
                        <div className='flex justify-between my-8'>
                            <h4 className='text-sm text-[#4d4c4c]'>Max adults : 0{detailsRoom.people.adults}</h4>
                            <h4 className='text-sm text-[#4d4c4c]'>Children : 0{detailsRoom.people.children} </h4>
                        </div>
                        <div className='mt-5'>
                            <span className='text-sm text-[#4d4c4c]'> Rooms </span>
                            <input type="number" className="input h-3 py-4 px-2 ml-3 input-bordered w-auto" defaultValue={1} min={1} max={12} name='number' />
                            <small className='block mt-4'>You can book maximum of 12 rooms</small>
                        </div>
                        <div className='text-center mt-8'>
                            <input type="submit" value="Book Now" className='btn btn-primary rounded-none w-full text-white' />

                        </div>
                    </form>

                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default RoomDetails;