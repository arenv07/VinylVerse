import React from 'react'
import phone from '../assets/phone-icon.png'
import mail from '../assets/mail-icon.png'
import shipping from '../assets/shipping-icon.png'
import moneyBack from '../assets/money-back-icon.png'
import customerSupport from '../assets/customer-support-icon.png'
import logo from '../assets/vinylverse-logo.png'
import cart from '../assets/cart.png'


const Navbar = () => {
    return (
        <header>
            <div className="announcement-bar text-xs mt-2 pb-2 flex justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-brown font-dmsans">
                <div className="left-col">
                    <ul class="announcement-bar-list flex gap-1 lg:gap-4">
                        <li class="flex items-center gap-1">
                            <img src={phone} alt="" class="w-6 h-6"/>
                            <a href="tel: 333 444 5555">333 444 5555</a>
                        </li>
                        <li class="flex items-center gap-1">
                            <img src={mail} alt="" class="w-6 h-6"/>
                            <a href="mailto:vinylverse@gmail.com">vinylverse@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="right-col">
                    <ul class="announcement-bar-list flex gap-1 lg:gap-4">
                        <li class="flex items-center gap-1">
                            <img src={shipping} alt="" class="w-6 h-6"/>
                            <p>FREE US SHIPPING</p>
                        </li>
                        <li class="flex items-center gap-1">
                            <img src={moneyBack} alt="" class="w-6 h-6"/>
                            <p>30 DAYS MONEYBACK GUARANTEE</p>
                        </li>
                        <li class="flex items-center gap-1">
                            <img src={customerSupport} alt="" class="w-6 h-6"/>
                            <p>24/7 CUSTOMER SUPPORT</p>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="announcement-bar-line"/>
            <div className="header-bar grid grid-cols-3 flex items-center mt-2 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                {/* <a href=""><img src={logo} alt="" class="h-10"/></a> */}
                <img src={logo} alt="" class="h-10"/>
                {/* <input type="text" />
                <div class="bg-gray-200 p-4">Column 1</div> */}
                <input type="text" class="px-4 py-2 w-100 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown" placeholder="Search vinyls..."/>
                <div class="flex gap-2 justify-end">
                    <a href=""><img src={cart} alt="" class="h-6"/></a>
                    <a href=""><p>5 items</p></a>
                </div>
            </div>
            <nav class="mt-2 h-14 bg-brown text-white text-sm lg:text-md xl:text-lg font-poppins font-semibold">
                <ul class="flex justify-center items-center h-full w-full gap-4 lg:gap-6">
                    <li>HOME</li>
                    <li>COLLECTION</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar