import React from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import AboutImage from "../src/assets/pexels-thirdman-7652382.jpg";

function Aboutpage() {
  return (
    <div>
      <Navbar />

      <div className="relative">
        <img
          src={AboutImage}
          alt="About Us"
          className="w-full h-auto object-cover "
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-20 xl:px-32">
          <h6 className="text-base md:text-5xl uppercase font-semibold mb-2 text-[#39FF14]">
            Who we are
          </h6>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            About us
          </h1>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#39FF14]">
          About Company
        </h1>
        <p className="mb-6 text-base md:text-lg lg:text-xl xl:text-2xl">
          Whether you are a development agency looking to outsource design work,
          a company in search of a Product Designer or Product Team, a marketing
          agency that needs a landing page, a startup that wants to launch an
          app, or an enterprise that plans to rebrand or redesign its website,
          we welcome any challenge with our arms wide open.
        </p>
      </div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#39FF14] px-4 md:px-8 lg:px-16 xl:px-32">
        Our Vision
      </h2>
      <div className="flex flex-col md:flex-row text-justify gap-6 md:gap-12 xl:gap-16 px-4 md:px-8 lg:px-16 xl:px-32">
        <p className="mb-4 md:mb-0 md:w-1/2 xl:w-1/3">
          Our expertise, and adept customer service allow us to guide our
          clients through a smooth design and execution process. We collaborate
          with our partners on each detail of the design including Our journey
          is defined by a rich tapestry of achievements and values that set us
          apart.
        </p>
        <p className="md:w-1/2 xl:w-1/3">
          Increase Brand Awareness With our targeted campaigns, we ensure your
          brand reaches the right audience at the right time. By leveraging
          social media Adam Beckley Founder & CEO Digital marketing isn’t just
          about having a presence online; it’s about creating a dynamic,
          engaging, and value-driven experience for your customers.
        </p>
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-8 flex flex-col items-start">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#39FF14]">
          Explore how We Work
        </h1>
        <p className="mb-6 text-base md:text-lg lg:text-xl xl:text-2xl">
          We have the experience and the know-how to make sure that the custom
          cabinetry goals you have in mind become a reality. Through
          professional guidance, inspiration, and superior craftsmanship, we'll
          turn your visions into a reality.
        </p>
        <button className="bg-black mt-5 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#39FF14] hover:text-black">
          View Process
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutpage;
