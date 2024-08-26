import React from 'react'
import image from "../../src/assets/digital-marketing-with-icons-business-people.jpg";

function Vision() {
  return (
    <div className="relative w-full min-h-screen p-4 bg-white">
    <div className="flex flex-col lg:flex-row justify-evenly">
      <div className="w-full lg:w-96 mb-4 lg:mb-0 perspective-1000">
        <div className="relative group">
          <img
            src={image}
            alt="Room"
            className="w-full h-96  mt-32 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3d"
          />
        </div>
      </div>
      <div className="text-white w-full lg:w-1/2 flex flex-col space-y-7">
        <h1 className="text-xl lg:text-5xl font-bold text-[#39FF14] mt-8">
          Vision & Mission
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-black ">
          ELEVATING Your Online Presence with Style and Function
        </h2>
        <p className="text-sm lg:text-base text-black text-justify">
          To be the leading digital marketing agency that empowers businesses
          of all sizes to reach their full potential in the digital landscape.
          We envision a world where every brand can connect with its audience
          in a meaningful way, leveraging the power of innovative technology,
          data-driven strategies, and creative storytelling to drive
          sustainable growth and lasting impact.
        </p>
        <p className="text-sm lg:text-base text-black text-justify">
          "Our mission is to deliver tailored digital marketing solutions that
          drive measurable results for our clients. We strive to: Innovate by
          staying ahead of industry trends and adopting the latest
          technologies.Empower businesses by providing them with the tools and
          strategies they need to thrive online. Build strong, long-lasting
          relationships with our clients by understanding their unique needs
          and delivering exceptional service.Foster a collaborative and
          inclusive environment where creativity and data come together to
          create powerful marketing campaigns.
        </p>
        {/* <button class="bg-black mt-10 mr-96 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#39FF14] hover:text-black">
          Learn Aboutus
        </button> */}
      </div>
    </div>
  </div>
  )
}

export default Vision