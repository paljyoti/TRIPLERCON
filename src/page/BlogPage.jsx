import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import backgroundimage from "../../src/assets/pexels-padrinan-1591056.jpg"

const BlogPage = () => {
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
          <p className="text-[#39FF14] font-bold text-lg md:text-5xl uppercase tracking-wide mb-2">
            blog
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Start Planning Your Next Blog  
          </h1>
        </div>
      </div>
      <div className="bg-white min-h-screen p-28">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-[#39FF14] text-center">
            Welcome to the Blog
          </h1>
        </header>

        <div className="flex flex-wrap justify-center gap-8">
          <article className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">
              The Future of Technology
            </h2>
            <p className="text-base text-black">
              Technology is rapidly evolving, bringing new innovations and
              possibilities every day. In this article, we'll explore the latest
              trends and what they mean for the future...
            </p>
          </article>

          <article className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">
              How to Start a Blog
            </h2>
            <p className="text-base text-black">
              Blogging is a great way to share your thoughts and ideas with the
              world. In this guide, we'll show you how to start your own blog,
              from choosing a platform to writing your first post...
            </p>
          </article>
          <article className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Mastering ReactJS
            </h2>
            <p className="text-base text-black">
              ReactJS is a powerful JavaScript library for building user
              interfaces. Whether you're a beginner or an experienced developer,
              this article will help you master ReactJS...
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
