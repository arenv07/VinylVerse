import React from 'react';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className="grid gap-6 p-6 sm:grid-cols-1 lg:grid-cols-2 px-4 pt-12 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div>
          <h1 className="visit-us font-bungee text-5xl text-brown">Visit Us</h1>
          <div className="location-container flex justify-start mt-4 gap-2">
            <img src={assets.locationIcon} alt="" className="w-6"/>
            <p className="font-poppins font-bold">123 Music Lane, Melody City, NY 10001</p>
          </div>
          <div className="mt-6">
            <p>At VinylVerse, we are passionate about the magic of vinyl records and the soulful experiences they bring. Nestled in the heart of Bloomington, Indiana, our store is a haven for music enthusiasts and collectors alike. As a relatively new addition to the vibrant cultural landscape of Bloomington, we've embarked on a journey to curate a collection that resonates with the diverse tastes of our community.</p>
            <p className="mt-4">VinylVerse was born out of a shared love for the warm, rich sound of vinyl and the nostalgia it invokes. Our journey began with a simple idea: to create a space where music lovers could explore, discover, and connect with their favorite tunes in a tangible and authentic way.</p>
          </div>
        </div>
        <img src={assets.store} alt="" className="store-img"/>
      </div>
      <Footer />
    </div>
  )
}

export default About