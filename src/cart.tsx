import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cart = () => {
  return (
    <>
              <Navbar/>
    <div>
      <FontAwesomeIcon icon={faCartShopping}/>
      Cart Page
    </div>
    <Footer/>
  </>
  )
}

export default cart
