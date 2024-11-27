import React from 'react'
import heroImg from '../assets/vinylverse-hero-img.png'

const Home = () => {
  return (
    <section class="relative h-screen">
      <img src={heroImg} alt="" class="absolute inset-0 object-cover w-full h-full"/>
      <div className="relative z-10 max-w-2xl text-left px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-14">
        <div>
          <p class="text-white tracking-widest font-light text-[#D0D0D0]">VINYLVERSE</p>
          <h1 class="font-bungee text-100 text-white leading-tight">SPIN, <br></br> DISCOVER, <br></br>REPEAT.</h1>
          <button class="bg-teal text-white py-4 px-6 rounded-lg mt-6 font-bold shadow-lg">SHOP NOW</button>
        </div>
        
      </div>
      
    </section>
  )
}

export default Home