import React from "react";
// import image from "../../src/assets/digital-marketing-with-icons-business-people.jpg";
import image from "../../src/assets/marketing-computer-sign-symbol-concept.jpg";
import { motion } from "framer-motion";

function Aboutus() {
  return (
    <div className="relative w-full min-h-screen p-4 bg-white">
      <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="w-full lg:w-96 mb-4 lg:mb-0 perspective-1000">
          <div className="relative group">
            <img
              src={image}
              alt="Room"
              className="w-full h-96   mt-32 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3d"
            />
          </div>
        </div>
        <div className="text-white w-full lg:w-1/2 flex flex-col space-y-7">
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 6 }}
            
            className="text-xl lg:text-5xl font-bold text-[#39FF14] mt-8"
          >
            ABOUT US
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 6 }}
            className="text-2xl lg:text-3xl font-semibold text-black "
          >
            ELEVATING Your Online Presence with Style and Function
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 6 }}
            className="text-sm lg:text-base text-black text-justify"
          >
            To be the leading digital marketing agency that empowers businesses
            We offer a comprehensive suite of digital marketing services
            designed to meet the diverse needs of our clients. From search
            engine optimization (SEO) and content marketing to social media
            management and pay-per-click (PPC) advertising, our solutions are
            crafted to align with your business goals. Our approach is
            collaborative, transparent, and results-focused, ensuring that your
            investment in digital marketing translates into tangible business
            growth.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 6 }}
            className="text-sm lg:text-base text-black text-justify"
          >
            Whether you’re looking to increase brand awareness, drive more
            traffic to your website, or convert leads into customers, [Your
            Company Name] is here to guide you every step of the way. Let’s work
            together to achieve your digital marketing goals and take your
            business to new heights. Let’s work together to achieve your digital
            marketing goals and take your business to new heights.
          </motion.p>
          {/* <button class="bg-black mt-10 mr-96 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#39FF14] hover:text-black">
            Learn Aboutus
          </button> */}
        </div>
        
      </div>
    </div>
  );
}

export default Aboutus;
