import React from "react";
import './App.css';

interface Props {
  imgsrc: string;
  title: string;
  price: number;
  addTotalItem: (increment: number) => void;
  updatePrice: (price: number) => void;
  removeTotalItem: (decrement: number) => void;
}

const ProductCard: React.FC<Props> = ({
  imgsrc,
  title,
  price,
  addTotalItem,
  updatePrice,
  removeTotalItem,
}) => {
  return (
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
                addTotalItem(1);
                updatePrice(+price);
              }}
            >
              Add
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded"
              onClick={() => {
                removeTotalItem(1);
                updatePrice(-price);
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

export default ProductCard;
