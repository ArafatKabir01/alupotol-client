import React from 'react';

const Navbar = () => {
    return (
        <div style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/shopping-basket-full-food-groceries-table-supermarket_8087-1865.jpg?w=2000")'}} className='h-80'>
            <div className="navbar bg-base-100 container m-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Product</a></li>
                            <li><a>Login</a></li>
                            <li><a>SignUp</a></li>
                        </ul>
                    </div>
                    <a className="  text-xl font-bold text-emerald-700	">SUNMOON</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
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