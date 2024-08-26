import React from "react";
// import backgroundVideo from "../../src/assets/6558232-uhd_3840_2160_25fps.mp4"
import backgroundVideo from "../../src/assets/3141207-uhd_3840_2160_25fps.mp4";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-auto h-auto"
        autoPlay
        muted
        loop
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h5
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-xl md:text-2xl lg:text-3xl mb-4"
        >
          Welcome To
        </motion.h5>
        <motion.h1
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          TRIPLE{" "}
          <span className="text-9xl" style={{ color: "#39FF14" }}>
            R
          </span>{" "}
          CONSULTING
        </motion.h1>
        <motion.h5
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-lg md:text-xl lg:text-2xl"
        >
          We Create, Manage & Grow Your Online Presence
        </motion.h5>
        <button className="bg-black mt-5 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#39FF14] hover:text-black">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Header;
