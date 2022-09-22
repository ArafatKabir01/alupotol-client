import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'
import auth from '../../../firebase.init';
import Login from '../../Login/Login';

const Navbar = () => {
    const logOut = () => {
        signOut(auth)
    }
    const [user, loading, error] = useAuthState(auth);
    return (
        <div  className=''>
            <div data-theme="autumn" className="navbar text-2xl z-10 bg-violet-200 bg-opacity-80	 rounded-sm absolute md:fixed lg:fixed top-0 left-0 right-0  px-6 m-auto  ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-lime-800 rounded-box w-52">
                            <li>
                                < Link to="/">Home</ Link>
                                
                                 <Link to='/blog'>Blog</Link>
                                
                                {user ? < Link to="inventory">Add Product</ Link> : <></>}
                                {user ? < Link to="allProduct">All Product</ Link> : <></>}
                                
                                {user ? <></> : <Link to='/login'>Login</Link>}
                                {user ? <button onClick={logOut} className="btn btn-sm">Log Out</button> : <Link to='/signup'>SignUp</Link>}

                            </li>
                        </ul>
                    </div>
                    <a className="  text-3xl font-bold text-rose-800 		">AluPotol</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-lime-800 menu-horizontal font-bold p-0">
                        <li>
                            < Link to="/">Home</ Link>
                            <Link to='/blog'>Blog</Link>
                            
                            {user ? < Link to="inventory">Add Product</ Link> : <></>}
                            {user ? < Link to="allProduct">All Product</ Link> : <></>}
                            {user ? <></> : <Link to='/login'>Login</Link>}
                            {user ? <button onClick={logOut} className="btn btn-outline btn-primary mt-1">Log Out</button> : <Link to='/signup'>SignUp</Link>}

                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                {user ? <span className='text-sm'>{user.displayName}</span> : <></>}
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Navbar;