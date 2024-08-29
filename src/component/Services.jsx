
import React, { useState } from 'react';

const DigitalMarketingService = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="min-h-screen bg-white text-white flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8 text-[#39FF14]">Digital Marketing Services</h1>
      <button 
        onClick={handleClick} 
        className="bg-black text-white py-2 px-4 rounded hover:text-black hover:bg-[#39FF14] transition duration-300"
      >
        {showText ? 'Hide Details' : 'Show Details'}
      </button>
      {showText && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-black">Our Services</h2>
          <p className="mb-4 text-black">
            We offer a wide range of digital marketing services including SEO, SEM, Content Marketing, Social Media Management, and more.
          </p>
          <p className='text-black'>
            Our expert team is here to help you grow your online presence and achieve your marketing goals.
          </p>
        </div>
      )}
    </div>
  );
};

export default DigitalMarketingService;
