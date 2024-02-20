import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faCartShopping, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-owhite text-black py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-black text-xl font-bold mr-4">TastyTrails</h1>
        <ul className="flex items-center text-black">
          <li className="ml-6">
            <Link to="/" className="hover:text-gray-500">
              <FontAwesomeIcon icon={faHome} className="mr-2"/> Home
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/body" className="hover:text-gray-500">
              <FontAwesomeIcon icon={faBowlFood} className="mr-2"/> Order
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/contact" className="hover:text-gray-500">
              <FontAwesomeIcon icon={faPhone} className="mr-2"/> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <input type="text" className="rounded-full px-4 py-2 mr-4 w-48 focus:outline-none" placeholder="Search for cuisine..." />
        <div className="cursor-pointer hover:text-gray-500">
          <FontAwesomeIcon icon={faCartShopping} className="mr-2"/> Counter
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
