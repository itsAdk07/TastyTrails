import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import contactData from './contactData';
import ContactCard from './contactProps';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-semibold text-center font">We'd love to hear from you</h1>
          <p className="text-lg text-center font text-gray-800">
            Whether you’re curious about the dishes, a membership, or even the sauces—we’re ready to answer any and all questions.
          </p>
        </div>
        <div className="flex justify-center space-x-8 mx-10">
          {contactData.map((values) => (
            <ContactCard
              key={values.title}
              title={values.title}
              text={values.text}
            />
          ))}
        </div>
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-semibold text-center mb-4 font">Contact Us</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;
