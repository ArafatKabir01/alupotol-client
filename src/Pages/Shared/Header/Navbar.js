import React from 'react';

const Navbar = () => {
    return (
        <div className='relative'>
            <div className="navbar z-10 fixed top-0 left-0 right-0 container m-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-slate-500 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Product</a></li>
                            <li><a>Login</a></li>
                            <li><a>SignUp</a></li>
                        </ul>
                    </div>
                    <a className="  text-2xl font-bold text-emerald-700	">AluPotol</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-slate-500 menu-horizontal font-bold p-0">
                        <li><a>Home</a></li>

                        <li><a>Product</a></li>
                        <li><a>Login</a></li>
                        <li><a>SignUp</a></li>

                    </ul>
                </div>
                <div className="navbar-end">
                <button class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span class="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Navbar;