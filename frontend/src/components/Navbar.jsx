import React from 'react'
import phone from '../assets/phone-icon.png'
import mail from '../assets/mail-icon.png'
import shipping from '../assets/shipping-icon.png'
import moneyBack from '../assets/money-back-icon.png'
import customerSupport from '../assets/customer-support-icon.png'


const Navbar = () => {
    return (
        <header>
            <div className="announcement-bar">
                <div className="left-col">
                    <ul class="announcement-bar-list">
                        <li>
                            <img src={phone} alt="" />
                            <a href="tel: 333 444 5555">333 444 5555</a>
                        </li>
                        <li>
                            <img src={mail} alt="" />
                            <a href="mailto:vinylverse@gmail.com">vinylverse@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="right-col">
                    <ul class="announcement-bar-list">
                        <li>
                            <img src={shipping} alt="" />
                            <p>FREE US SHIPPING</p>
                        </li>
                        <li>
                            <img src={moneyBack} alt="" />
                            <p>30 DAYS MONEYBACK GUARANTEE</p>
                        </li>
                        <li>
                            <img src={customerSupport} alt="" />
                            <p>24/7 CUSTOMER SUPPORT</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header-bar">

            </div>
            <nav>

            </nav>
        </header>
    )
}

export default Navbar