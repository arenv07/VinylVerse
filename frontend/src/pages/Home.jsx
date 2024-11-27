import React from 'react'
import heroImg from '../assets/vinylverse-hero-img.png'
import { motion } from "motion/react"

const Home = () => {
  return (
    <section className="relative h-screen">
      <img src={heroImg} alt="" className="absolute inset-0 object-cover w-full h-full" />
      <div className="relative z-10 max-w-2xl text-left px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-14">
        <div>
          <p className="text-white tracking-large font-extralight text-[#D0D0D0]">VINYLVERSE</p>
          <h1 className="font-bungee text-100 text-white leading-tight">SPIN, <br /> DISCOVER, <br /> REPEAT.</h1>
          
          {/* Hero button with hover effect */}
          <motion.button
            className="bg-teal text-white py-4 px-6 rounded-lg mt-6 font-bold shadow-lg"
            whileHover={{
              scale: 1.05,        // Size
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Shadow
              transition: { 
                duration: 0.3,    
                ease: "easeInOut" 
              }
            }}
          >
            SHOP NOW
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Home;

