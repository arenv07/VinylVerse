import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brown text-white py-8 font-poppins">
      <div className="container mx-auto flex flex-wrap justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        {/* Contact Info */}
        <div className="mb-6 max-w-xs">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="list-none space-y-2">
            <li>Phone: (555) 123-4567</li>
            <li>Email: contact@vinylshop.com</li>
            <li>Address: 123 Music Lane, Melody City, NY 10001</li>
          </ul>
        </div>

        <div className="flex  max-w-xs gap-10">
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="list-none space-y-2">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <p>Mon-Fri: 10 AM - 8 PM</p>
            <p>Sat-Sun: 11 AM - 6 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Vinyl Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
