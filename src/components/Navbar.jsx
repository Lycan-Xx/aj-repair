import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';


function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);


    return (
        <nav className={'flex justify-between items-center fixed top-0 left-0 w-full z-10 transition-all duration-300 ${nav ? "shadow-lg bg-black" : "bg-transparent "}'} >
            <Link to='#' className='logo'>
                <img src={logo} alt="Logo" className='w-24' />
            </Link>

            <input className='hidden' type="checkbox" id='menu-btn' />
            <label className='menu-icon block cursor-pointer'>
                <span className='nav-icon bg-white block h-1 w-6 mb-1'></span>
                <span className='nav-icon bg-white block h-1 w-6'></span>
            </label>

            <ul className='hidden md:flex space-x-4'>

                <li><Link to='#'> Header </Link></li>
                <li><Link to='#'> Header </Link></li>
                <li><Link to='#'> Header </Link></li>
                <li><Link to='#'> Header </Link></li>
                <li><Link to='#'> Header </Link></li>

            </ul>

        </ nav>
    )
}

export default Navbar;