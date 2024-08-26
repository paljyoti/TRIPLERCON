import React, { useEffect, useState } from "react";

function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`bg-black bg-opacity-20  backdrop-filter backdrop-blur-lg fixed top-0 left-0 w-[99%] z-10 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex justify-around items-center px-4 py-6">
        <div className="flex items-center space-x-4">
          <div className="logo">{/* <img src="" alt="Logo" /> */}</div>
          <div className="navbar flex  space-x-10 text-lg">
            <a
              href="#"
              className="text-white hover:text-[#39FF14] transition ml-20 duration-300"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-white hover:text-[#39FF14] transition duration-300"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="text-white hover:text-[#39FF14] transition duration-300"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="text-white hover:text-[#39FF14] transition duration-300"
            >
              BLOG
            </a>
            <a
              href="#"
              className="text-white hover:text-[#39FF14] transition duration-300"
            >
              CONTACT US 
            </a>

          </div>
        </div> 
      
      </div>
    </div>
  );
}

export default Navbar;
