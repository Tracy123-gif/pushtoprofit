import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/pushLogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent text-white'); // Default background color

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Update the background color based on scroll position
      if (scrollPosition > 50) {
        setBgColor('bg-white shadow-md text-black'); // Scrolled background
      } else {
        setBgColor('bg-transparent text-white'); // Initial background
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${bgColor}`}>
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img className="w-10 h-10" src={image} alt="Logo" />
          <span className="text-xl font-bold">Push to Profit</span>
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden ">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none relative z-50"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-x text-white' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Links (Desktop View) */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </div>
      </div>

      {/* Links (Mobile View) */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center">
          <Link
            onClick={toggleMenu}
            to="/"
            className="mb-6 text-lg font-medium hover:underline"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            to="/about"
            className="mb-6 text-lg font-medium hover:underline"
          >
            About
          </Link>
          <Link
            onClick={toggleMenu}
            to="/contact"
            className="text-lg font-medium hover:underline"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
