import React from "react";
import {  Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-wrap justify-between gap-6">
          {/* About Us */}
          <div className="w-full sm:w-1/3">
            <h4 className="text-lg font-semibold mb-3">About Us</h4>
            <p className="text-sm">
              We provide expert advice to help your business succeed.
            </p>
          </div>
          {/* Quick Links */}
          <div className="w-full sm:w-1/3">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link className="hoverText" to={'/'}>Home Page</Link>
              </li>
              <li>
               <Link className="hoverText" to={'/about'}>About Us</Link>
              </li>
              <li>
                <Link className="hoverText" to={'/Contact'}>Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* Follow Us */}
          <div className="w-full sm:w-1/3">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://chat.whatsapp.com/IeaUOsy6j9EFXStRqQfOZX"
                  className="hoverText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com https://www.facebook.com/profile.php?id=61566952406223&mibextid=ZbWKwL "
                  className="hoverText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/push2profit?igsh=bDh5dDF2a2JvcWE="
                  className="hoverText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                
              </li> 
             
            </ul>
            <li className="list-none mt-5">
                <a
                  href="mailto:th1044225@gmail.com?subject=Subject&body=Message%20is%20a%20test%20email."
                  className="hoverText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Contact the Developer
                </a>
                
              </li>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; 2024 Push to Profit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
