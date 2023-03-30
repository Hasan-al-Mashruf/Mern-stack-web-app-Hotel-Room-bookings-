import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { AuthContext } from '../../context/AuthProvider';
import TopHeader from '../TopHeader/TopHeader';
import { BsMinecartLoaded } from 'react-icons/bs';

const Header = () => {
    const { user, logOutuser } = useContext(AuthContext)

    const navigations = <React.Fragment>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><a href='#room'>Rooms</a></li>
        <li><NavLink to='/shop'>Shop</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        {
            user?.displayName ? <>
                <li><NavLink to='/checkout'>Checkout</NavLink></li>
                <li><NavLink to='/signin' onClick={logOutuser}>Signout</NavLink></li>
            </> : <li><NavLink to='/signin'>Signin</NavLink></li>
        }
    </React.Fragment>

    return (
        <div className='header'>
            <TopHeader />
            <div className="navbar max-w-[1170px] mx-auto px-0 min-h-200px py-4 border-t border-[#8b8b8b6e]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden" htmlFor="my-drawer-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-[#999]">
                            {navigations}
                        </ul>
                    </div>
                    <Link to={'/'} className="normal-case text-xl"><img src={Logo} alt="" className='w-14' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navigations}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.displayName ? <BsMinecartLoaded /> : <a className="shopping-cart relative text-white"></a>
                    }

                    {
                        user?.displayName ? <div className="avatar w-10 ml-3">
                            <div className="w-24 mask mask-hexagon">
                                <img src={user?.photoURL} />
                            </div>
                        </div> : <a className="user relative ml-3 text-white"></a>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;