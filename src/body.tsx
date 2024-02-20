import React, { useState } from "react";
import data from "./data";
import data2 from './data2';
import Props from "./Props";
import Navbar from "./Navbar";
import Footer from "./footer";
import './App.css'
import Props2 from "./Props2";

const Body = () => {
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const addTotalItem = (increment: number) => {
    if(totalItem>=0){
    setTotalItem(totalItem + increment);
  
  }
};

  const removeTotalItem = (decrement: number) =>{
    if(totalItem>=0){
      setTotalItem(totalItem - decrement);
    }
  }
  
  const updatePrice = (price: number) => {
    if (totalPrice + price >= 0) {
      setTotalPrice(totalPrice + price);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center bg-gray-200 p-4 mb-4 mx-4 rounded-lg">
        <div className="text-gray-700 text-lg">
          <p className="font-bold">Total Items:</p>
          <p>{totalItem}</p>
        </div>
        <div className="text-gray-700 text-lg">
          <p className="font-bold">Grand Total:</p>
          <p>Rs. {totalPrice}</p>
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl font-bold font">Food Items</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 justify-center mx-10">
        {data.map((values) => (
          <Props
            imgsrc={values.imgsrc}
            title={values.title}
            price={values.price}
            addTotalItem={addTotalItem}
            removeTotalItem={removeTotalItem}
            updatePrice={updatePrice}
          />
        ))}
      </div>
      <div>
        <h1 className="text-center text-2xl font-bold font">Beverages</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 justify-center mx-10">
        {data2.map((values) => (
          <Props2
            imgsrc={values.imgsrc}
            title={values.title}
            price={values.price}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
