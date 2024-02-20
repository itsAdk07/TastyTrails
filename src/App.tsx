import React from "react";
import './App.css';
import Body from "./body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from './cart';
import Home from './Home';
import Contact from "./contact";

const App = () => {
  return (
    <>
  <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/body" element={<Body/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
