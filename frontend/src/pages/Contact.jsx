import React from 'react';
import Footer from '../components/Footer';

const ContactSection = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-2 mb-6">
        <form
          action="https://formsubmit.co/arenvillano@gmail.com"
          method="POST"
          className="bg-none flex flex-col max-w-lg w-11/12 p-8"
        >
          <h3 className="text-black font-bold text-center text-xl mb-5 font-poppins">
            Leave Us A Message!
          </h3>
          <input
            className="border-none text-base my-2 p-5 bg-gray-100 rounded-lg outline-none focus:ring focus:ring-brown"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="border-none text-base my-2 p-5 bg-gray-100 rounded-lg outline-none focus:ring focus:ring-brown"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="border-none text-base my-2 p-5 bg-gray-100 rounded-lg outline-none focus:ring focus:ring-brown"
            type="phone"
            name="phone"
            placeholder="Phone number"
            required
          />
          <textarea
            className="border-none text-base my-2 p-5 bg-gray-100 rounded-lg outline-none focus:ring focus:ring-brown"
            name="message"
            rows="4"
            placeholder="Your message"
          ></textarea>
          <button
            type="submit"
            className="w-36 mx-auto mt-5 py-3 bg-orange-600 text-white text-lg font-medium rounded-full transition duration-300 hover:bg-orange-700 hover:font-semibold"
          >
            Send
          </button>
        </form>
      </div>

      <Footer />
    </div>

  );
};

export default ContactSection;
