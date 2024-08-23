import React from 'react';

function Footer() {
  return (
    <div className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pl-20">
        
        <div className="footer">
        <h1 className="text-lg font-semibold mb-2 text-left ">Triple R Consulting</h1>
          <p className="text-lg text-left mt-5 ">
            We Provide Total Digital Marketing
            Solution for Small & Mid Scale Business.
          </p>
        </div>

        <div className="add">
          <h1 className="text-lg font-semibold mb-2 text-left ">Address</h1>
          <p className="text-lg text-left mt-5 ">
            499, Saraswati Vihar Chakarpura,  Gurugram,Haryana,Indian
          </p>
          <h2 className="text-lg mt-2 text-left">+91 7827293362</h2>
          <h2 className="text-lg text-left">jyot2999@gmail.com</h2>
        </div>

        <div className="menu ">
          <h1 className="text-lg font-semibold mb-2 text-left ">Our Menu</h1>
          <ul className="space-y-1 mt-5 text-left">
            <li className="text-lg">Home</li>
            <li className="text-lg">About Us</li>
            <li className="text-lg">Contact Us</li>
            <li className="text-lg">Blog</li>
          </ul>
        </div>

        <div className="top">
          <h1 className="text-lg font-semibold mb-2 text-left ">Top Links</h1>
          <ul className="space-y-1 mt-5 text-left">
            <li className="text-lg">GDPR Policy</li>
            <li className="text-lg">Terms of Business</li>
            <li className="text-lg">Refund Policy</li>
            <li className="text-lg">Privacy Policy</li>
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
