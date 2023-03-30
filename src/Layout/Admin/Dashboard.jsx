import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { TbBrandBooking } from 'react-icons/tb';
import { TbMessageDots } from 'react-icons/tb';
const Dashboard = () => {
    return (
        <div>
            <div>
                <div className='lg:grid grid-cols-6 gap-0 block'>
                    <div className='col-span-1 '>
                        <div className="drawer drawer-mobile absolute lg:relative h-[40vh]">
                            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden fixed right-0">Open drawer</label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                                <ul className="drawer-menu p-4 w-80 bg-base-100 text-base-content">
                                    <li className='flex items-center my-3'><MdDashboard className='mr-3' />
                                        <Link to='/dashboard '> Dashboard</Link>
                                    </li>
                                    <li className='flex items-center my-3'><HiOutlineClipboardList className='mr-3' />
                                        <Link to='/dashboard/roomList'> Room details</Link></li>
                                    <li className='flex items-center my-3'><TbBrandBooking className='mr-3' />
                                        <Link to='/dashboard/bookings'> Bookings</Link>
                                    </li>
                                    <li className='flex items-center my-3'><TbMessageDots className='mr-3' />
                                        <Link to='/dashboard/reviewsPage'> Reviews</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-5 md:px-10 bg-gray-900 min-h-screen py-12 md:py-5 '>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;