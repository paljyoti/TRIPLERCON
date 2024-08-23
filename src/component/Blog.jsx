import React from "react";

function Blog() {
  return (
    <div>
      <div class="flex  items-center justify-center bg-white text-black p-8">
        <div class="heading flex  items-center justify-center text-center mb-4 space-x-4">
          <h1 class="text-5xl font-bold pl-5" style={{ color: "#39FF14" }}>
            Blog
          </h1>
          <h2 class="text-3xl  mt-32  font-semibold">Digital Marketing?</h2>
        </div>

        <div class="heads flex  max-w-2xl ">
          <p class="flex flex-col text-justify mt-20 pl-48">
            Digital marketing isn’t just about having a presence online; it’s
            about creating a dynamic, engaging, and value-driven experience for
            your customers. We are a pioneering digital work system designed to
            revolutionize how businesses operate in the digital age. Our mission
            is to provide cutting-edge solutions that streamline workflows,
            enhance productivity, and drive growth.
          </p>
        </div>

        <div className="heads"></div>
      </div>
      <button class="bg-black ml-52 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#39FF14] hover:text-black">
        View More
      </button>
    </div>
  );
}

export default Blog;
