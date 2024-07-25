import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img
            src="https://placehold.co/400"
            alt="logo"
            className="h-12 w-12 mr-2"
          />
          <span className="md:text-xl font-bold text-gray-700">
            Springdale Public School
          </span>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li className="px-4 py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4 py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
            <Link to="/academics">Academics</Link>
          </li>
          <li className="px-4 py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
            <Link to="/admissions">Admissions</Link>
          </li>
          <li className="px-4 py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
            <Link to="/faculty">Faculty</Link>
          </li>
          <li className="px-4 py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
            <Link to="/students">Students</Link>
          </li>
          <li className="px-4 py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="px-4 py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" /> // Use FiX icon for close button
            ) : (
              <FiMenu className="h-6 w-6" /> // Use FiMenu icon for menu button
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed z-50 bg-white w-full md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="w-80 text-center py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="w-80 text-center py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
              <Link to="/about" onClick={toggleMenu}>
                About us
              </Link>
            </li>
            <li className="w-80 text-center py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
              <Link to="/academics" onClick={toggleMenu}>
                Academics
              </Link>
            </li>
            <li className="w-80 text-center py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
              <Link to="/admissions" onClick={toggleMenu}>
                Admissions
              </Link>
            </li>
            <li className="w-80 text-center py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
              <Link to="/faculty" onClick={toggleMenu}>
                Faculty
              </Link>
            </li>
            <li className="w-80 text-center py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
              <Link to="/students" onClick={toggleMenu}>
                Students
              </Link>
            </li>
            <li className="w-80 text-center py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
              <Link to="/gallery" onClick={toggleMenu}>
                Gallery
              </Link>
            </li>
            <li className="w-80 text-center py-2 text-gray-700 rounded hover:bg-blue-900 hover:text-white transition duration-300">
              <Link to="/contact" onClick={toggleMenu}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
