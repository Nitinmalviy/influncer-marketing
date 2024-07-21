import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import logo from './../../utils/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" bg-transparent absolute z-50 w-screen">
            <div className=" bg-transparent max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="influncer Logo" />
                </NavLink>
                <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button class="hidden  lg:block bg-pink-500 text-sm hover:bg-pink-700 text-white font-bold py-2 px-2 rounded-full">
                        Benchmark Report 2024
                    </button>
                    <button class="hidden md:block  bg-pink-500 hover:bg-pink-700 text-white font-bold  py-2 px-2 text-2xl rounded-full">
                        <IoSearchSharp />
                    </button>
                    <button
                        onClick={toggleMenu}
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white  md:hidden"
                        aria-controls="navbar-cta"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block backdrop-blur-lg rounded-xl' : 'hidden'}`} id="navbar-cta">
                    <ul className="flex text-white flex-col font-normal sm:gap-0 gap-3  p-3 md:p-0 mt-4   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <NavLink to="/" className={`flex justify-center items-start`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className={`flex justify-center items-start`} >Articles <span className='pt-3 -ml-2'> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">

                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className={`flex justify-center items-start`}>Platforms <span className='pt-3 -ml-2'> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">

                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></span></NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className={`flex justify-center items-start `}>Agencies <span className='pt-3 -ml-2'> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">

                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></span></NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className={`flex justify-center items-start`}>Resources <span className='pt-3 -ml-2'> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">

                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></span></NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className={`flex justify-center items-start`}>About Us <span className='pt-3 -ml-2'> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">

                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
