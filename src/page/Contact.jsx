import React from "react";
import Footer from "../component/Footer";
import backgroundimage from "../../src/assets/pexels-joenibraw-1416530.jpg";
import Navbar from "../component/Navbar";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative img">
        <img
          src={backgroundimage}
          alt="Background"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left p-28 bg-black bg-opacity-50">
          <p className="text-[#39FF14] font-bold text-lg md:text-3xl uppercase tracking-wide mb-2">
            Contact Us
          </p>
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Start Planning Your Next Project
          </h1>
        </div>
      </div>

      <div className="min-h-screen bg-white text-black p-6 flex flex-col lg:flex-row">
        {/* Address Section */}
        <div className="lg:w-1/2 p-6 flex flex-col justify-center">
          <p className="text-xl font-semibold mb-4">
            If you would like to work with us or just want to get in touch, we’d
            love to hear from you!
          </p>
          <div className="text-lg font-medium mb-2">
            Address: Saraswati Vihar
          </div>
          <div className="text-lg font-medium">
            Email:{" "}
            <a
              href="mailto:jyoti@gmail.com"
              className="text-green-500 hover:text-green-300"
            >
              jyoti@gmail.com
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2 flex items-center justify-center p-6">
          <div className="max-w-sm w-full p-8 border border-black rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-green-500">
              Contact Us
            </h1>

            <form className="space-y-3">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-black rounded bg-white text-black focus:outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-black rounded bg-white text-black focus:outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-black rounded bg-white text-black focus:outline-none focus:border-green-500"
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-green-500  hover:text-green-300 rounded font-bold transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
