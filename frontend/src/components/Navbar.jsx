import React from 'react'
import { NavLink } from 'react-router-dom';
import {assets} from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-tan">
            <div className="announcement-bar text-xs mt-2 pb-2 flex justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-brown font-dmsans lg:flex hidden">
                <div className="left-col">
                    <ul className="announcement-bar-list flex gap-1 lg:gap-4">
                        <li className="flex items-center gap-1">
                            <img src={assets.phone} alt="" className="w-6 h-6"/>
                            <a href="tel: 333 444 5555">333 444 5555</a>
                        </li>
                        <li className="flex items-center gap-1">
                            <img src={assets.mail} alt="" className="w-6 h-6"/>
                            <a href="mailto:vinylverse@gmail.com">vinylverse@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="right-col">
                    <ul className="announcement-bar-list flex gap-1 lg:gap-4">
                        <li className="flex items-center gap-1">
                            <img src={assets.shipping} alt="" className="w-6 h-6"/>
                            <p>FREE US SHIPPING</p>
                        </li>
                        <li className="flex items-center gap-1">
                            <img src={assets.moneyBack} alt="" className="w-6 h-6"/>
                            <p>30 DAYS MONEYBACK GUARANTEE</p>
                        </li>
                        <li className="flex items-center gap-1">
                            <img src={assets.customerSupport} alt="" className="w-6 h-6"/>
                            <p>24/7 CUSTOMER SUPPORT</p>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="announcement-bar-line"/>
            <div>
                <div className="header-bar grid grid-cols-3 flex items-center mt-2 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                
                <Link to="/">
                    <img src={assets.logo} alt="" className="h-10 cursor-pointer"/>
                </Link>
                
                {/* <input type="text" />
                <div class="bg-gray-200 p-4">Column 1</div> */}
                <input type="text" class="px-4 py-2 w-100 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown" placeholder="Search vinyls..."/>
                <div className="flex gap-2 justify-end">
                    <a href=""><img src={assets.cart} alt="" className="h-6"/></a>
                    <a href=""><p>5 items</p></a>
                </div>
            </div>
            <nav className="mt-2 h-14 bg-brown text-white text-sm lg:text-md xl:text-lg font-poppins font-semibold">
                <ul className="flex justify-center items-center h-full w-full gap-4 lg:gap-6">
                    <NavLink to='/' className="flex flex-col items-center gap-0.3">
                        <li>HOME</li>
                        <hr className="w-2/4 border-none h-[1.5px] bg-white hidden rounded-full"/>
                    </NavLink>
                    <NavLink to='/collection' className="flex flex-col items-center gap-0.3">
                        <li>COLLECTION</li>
                        <hr className="w-2/4 border-none h-[1.5px] bg-white hidden rounded-full"/>
                    </NavLink>
                    <NavLink to='/about' className="flex flex-col items-center gap-0.3">
                        <li>ABOUT</li>
                        <hr className="w-2/4 border-none h-[1.5px] bg-white hidden rounded-full"/>
                    </NavLink>
                    <NavLink to='/contact' className="flex flex-col items-center gap-0.3">
                        <li>CONTACT</li>
                        <hr className="w-2/4 border-none h-[1.5px] bg-white hidden rounded-full"/>
                    </NavLink>
                </ul>
            </nav>
            </div>
            
        </header>
    )
}

export default Navbar