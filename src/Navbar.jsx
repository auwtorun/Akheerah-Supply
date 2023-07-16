import React from 'react';
import { FaMosque } from "react-icons/fa";

const Navbar = () => {
    return (
      <nav className="bg-lime-500">
      <div className="max-w-screen-xl mx-2 px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
            <a href="" className="flex-shrink-0 flex items-center hidden sm:flex mx-4">
            <FaMosque className="text-3xl text-white"/>
            <p className="text-l text-white p-2">Akhirah Supply</p>
            </a>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {/* Heroicon name: menu */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              {/* Icon when menu is open */}
              {/* Heroicon name: x */}
            </button>
          </div>
          {/* Your navbar content goes here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
