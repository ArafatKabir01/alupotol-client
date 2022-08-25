import React from 'react';

const Navbar = () => {
    return (
        <div className='relative'>
            <div className="navbar fixed top-0 left-0 right-0 container m-auto ">
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
                    <a className="  text-2xl font-bold text-emerald-700	">SUNMOON</a>
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

                </div>
            </div>

        </div>
    );
};

export default Navbar;