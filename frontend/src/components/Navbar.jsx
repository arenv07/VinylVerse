import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { vinyls } from '../assets/vinylData'; // Import vinyl data

const Navbar = () => {
    // State to store the search query
    const [searchQuery, setSearchQuery] = useState('');

    // Handle the change in the search input
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter vinyls based on the search query
    const filteredVinyls = vinyls.filter(vinyl =>
        vinyl.album.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vinyl.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vinyl.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <header className="sticky top-0 z-50 bg-tan">
            <div className="announcement-bar text-xs mt-2 pb-2 flex justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-brown font-dmsans lg:flex hidden">
                <div className="left-col">
                    <ul className="announcement-bar-list flex gap-1 lg:gap-4">
                        <li className="flex items-center gap-1">
                            <img src={assets.phone} alt="" className="w-6 h-6" />
                            <a href="tel: 333 444 5555">333 444 5555</a>
                        </li>
                        <li className="flex items-center gap-1">
                            <img src={assets.mail} alt="" className="w-6 h-6" />
                            <a href="mailto:vinylverse@gmail.com">vinylverse@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="right-col">
                    <ul className="announcement-bar-list flex gap-1 lg:gap-4">
                        <li className="flex items-center gap-1">
                            <img src={assets.shipping} alt="" className="w-6 h-6" />
                            <p>FREE US SHIPPING</p>
                        </li>
                        <li className="flex items-center gap-1">
                            <img src={assets.moneyBack} alt="" className="w-6 h-6" />
                            <p>30 DAYS MONEYBACK GUARANTEE</p>
                        </li>
                        <li className="flex items-center gap-1">
                            <img src={assets.customerSupport} alt="" className="w-6 h-6" />
                            <p>24/7 CUSTOMER SUPPORT</p>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="announcement-bar-line" />
            <div>
                <div className="header-bar grid grid-cols-2 flex items-center mt-2 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                    <Link to="/">
                        <img src={assets.logo} alt="" className="h-10 cursor-pointer" />
                    </Link>

                    <div className="flex gap-2 justify-end items-center">
                        {/* Search bar */}
                        <div className="relative sm:mr-4">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="px-4 py-2 w-100 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown"
                                placeholder="Search vinyls..."
                            />
                            {/* Display search results */}
                            {searchQuery && filteredVinyls.length > 0 && (
                                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto mt-2">
                                    {filteredVinyls.map((vinyl, index) => (
                                        <div key={index} className="flex items-center p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                                            <img src={vinyl.image} alt={vinyl.album} className="w-10 h-10 mr-2" />
                                            <div>
                                                <p className="font-semibold">{vinyl.album}</p>
                                                <p className="text-sm text-gray-600">{vinyl.artist}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <a href="">
                            <img src={assets.cart} alt="" className="h-6 hidden sm:block" />
                        </a>
                        <a href="">
                            <p className="hidden sm:block">5 items</p>
                        </a>
                    </div>
                </div>
                <nav className="mt-2 h-14 bg-brown text-white text-sm lg:text-md xl:text-lg font-poppins font-semibold">
                    <ul className="flex justify-center items-center h-full w-full gap-4 lg:gap-6">
                        <NavLink to="/" className="flex flex-col items-center gap-0.3">
                            <li>HOME</li>
                            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden rounded-full" />
                        </NavLink>
                        <NavLink to="/collection" className="flex flex-col items-center gap-0.3">
                            <li>COLLECTION</li>
                            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden rounded-full" />
                        </NavLink>
                        <NavLink to="/about" className="flex flex-col items-center gap-0.3">
                            <li>ABOUT</li>
                            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden rounded-full" />
                        </NavLink>
                        <NavLink to="/contact" className="flex flex-col items-center gap-0.3">
                            <li>CONTACT</li>
                            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden rounded-full" />
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
