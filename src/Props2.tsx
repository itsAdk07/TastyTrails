import React from "react";
import './App.css';

interface Props2{
    imgsrc: string;
    title: string;
    price: number;
}

const BeverageCard: React.FC<Props2> = ({imgsrc, title, price,}) => {
    return(
    <div className="mx-4 my-8">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imgsrc} alt="Product" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h5 className="text-gray-900 font-semibold text-lg mb-2">{title}</h5>
        <p className="text-gray-700 text-base mb-4">Rs.{price}</p>
        <div className="flex justify-between">
          <button
            className=" px-4 py-2 bg-white text-black font-semibold rounded"
            onClick={() => {
              
            }}
          >
            Add
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded"
            onClick={() => {
              
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
    );
};

export default BeverageCard;

