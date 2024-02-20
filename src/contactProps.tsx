import React from "react";
import './App.css';

interface ContactProps {
    title: string;
    text: string;
}

const ContactCard: React.FC<ContactProps> = ({ title, text }) => {
    return (
        <div className="flex justify-center space-x-8">
            <div className="relative bg-white p-8 rounded-lg shadow-lg">
                <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-1 rounded-tl-lg rounded-br-lg">
                    {title}
                </div>
                <p className="text-lg mb-4 my-7 text-center">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default ContactCard;
