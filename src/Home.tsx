import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Delicious Food for Every Occasion</h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From casual gatherings to formal events, indulge in our wide selection of mouthwatering dishes crafted with love.</p>
      <Link to="/body" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
      Order Now
      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </Link>

    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg?w=900&t=st=1708242757~exp=1708243357~hmac=3b90a56e8a8c5d18654339a89890fbf61cceba4d59ad89439e9a0323291833ea" alt="mockup"/>
        </div> 

  </div>
</section>
<section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="hidden lg:block lg:col-span-5 lg:flex">
      <img src="https://img.freepik.com/free-photo/delicious-food-black-board_144627-34728.jpg?w=900&t=st=1708243854~exp=1708244454~hmac=562405332ccfa7f0661082d9184963b9af80e49196c185887de6223b42cb05fd" alt="pizza" className="object-cover w-full h-full rounded-lg" />
    </div>
    <div className="lg:col-span-7">
      <div className="max-w-2xl">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Enjoy Every Bite As If Its The Last</h1>
        <p className="mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Each dish and sauce has been meticulously crafted over years of expertise and refined to mouthwatering delecacy.</p>
      </div>
    </div>
  </div>
</section>

<section className="bg-white dark:bg-gray-900">
  <div className="max-w-screen-xl px-4 py-8 mx-auto">
    <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white text-center">Our Best Sellers of the Month</h2>
    <p className="mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400  text-center">Below are our two beloved dishes that customers love to comeback again and again in the past month.</p>
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-1/2 lg:pr-4 mb-4">
        <img src="https://img.freepik.com/free-photo/traditional-mexican-tacos-with-meat-vegetables-isolated-white-background_123827-19907.jpg?w=900&t=st=1708244526~exp=1708245126~hmac=b58b80d5cc24274cbf4d537eb292a6102dab39d13af77e2bfa92a9d240227abf" alt="Hawaiian Pizza" className="object-cover w-full h-auto rounded-lg" />
        <p className="text-center text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mt-2 font-extrabold">Our American Burrito Wrap</p>
        <p className="text-center text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mt-2">Savor the irresistible fusion of flavors with our American Burrito Wrap. Stuffed with juicy grilled chicken, tangy salsa, creamy guacamole, and melted cheese, wrapped in a warm tortilla, it's a culinary delight that satisfies every craving.</p>
          
      </div>
      <div className="w-full lg:w-1/2 lg:pl-4 mb-4">
        <img src="https://c4.wallpaperflare.com/wallpaper/902/342/529/sandwich-food-meat-wallpaper-preview.jpg" alt="Signature Burger" className="object-cover w-full h-auto rounded-lg" />
        <p className="text-center text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mt-2 font-extrabold">Our Signature Burger</p>
        <p className="text-center text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mt-2">Elevate your burger experience with our Signature Burger. Crafted with a perfectly grilled beef patty, topped with crispy bacon, melted cheese, fresh lettuce, ripe tomatoes, and our secret sauce, each bite is a burst of savory goodness that keeps you coming back for more.</p>
      </div>
    </div>
  </div>
</section>




      <Footer />
    </>
  );
}

export default Home;
