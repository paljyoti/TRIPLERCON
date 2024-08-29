import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pl-20">
        
        <div className="footer">
        <h1 className="text-lg font-semibold mb-2 text-left ">Triple R Consulting</h1>
          <p className="text-md text-left mt-5 ">
            We Provide Total Digital Marketing
            Solution for Small & Mid Scale Business.
          </p>
        </div>

        <div className="add">
          <h1 className="text-lg font-semibold mb-2 text-left ">Address</h1>
          <p className="text-md text-left mt-5 ">
            499, Saraswati Vihar Chakarpura,  Gurugram,Haryana,Indian
          </p>
          <h2 className="text-md mt-2 text-left">+91 9911082917</h2>
          <h2 className="text-md text-left">rishabhbahree@gamil.com</h2>
        </div>

        <div className="menu ">
          <h1 className="text-lg font-semibold mb-2 text-left ">Our Menu</h1>
          <ul className="space-y-1 mt-5 text-left">
            <li onClick={()=>navigate('/#/')}  className="text-md  hover:text-[#39FF14]">Home</li>
            <li className="text-md hover:text-[#39FF14]">About Us</li>
            <li className="text-md hover:text-[#39FF14]">Contact Us</li>
            <li className="text-md hover:text-[#39ff14]">Blog</li>
          </ul>
        </div>

        <div className="top">
          <h1 className="text-lg font-semibold mb-2 text-left ">Top Links</h1>
          <ul className="space-y-1 mt-5 text-left">
            <li className="text-md hover:text-[#39FF14]">GDPR Policy</li>
            <li className="text-md hover:text-[#39FF14]">Terms of Business</li>
            <li className="text-md hover:text-[#39FF14]">Refund Policy</li>
            <li className="text-md hover:text-[#39FF14]">Privacy Policy</li>
          </ul>
        </div>

      </div>
      <div className="text-center mt-12">
        <p className="text-lg text-left pl-20 ">
        Copyright: &copy; 2024 Triple R Consulting All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
