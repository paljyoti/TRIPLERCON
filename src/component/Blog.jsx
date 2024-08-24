import React from "react";

function AboutUs() {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#39FF14]">Our Blog</h1>
        <p className="text-black mt-4 max-w-2xl mx-auto text-lg">
          Stay updated with the latest trends and insights in digital
          marketing.Explore the latest trends in SEO and how to stay ahead of
          the competition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-black p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-[#39FF14] mb-2">
            Social Media Strategies for Small Businesses
          </h3>
          <p className="text-white">
            Learn effective social media strategies to grow your small business
            online.
          </p>
        </div>
        
        <div className="bg-black p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-[#39FF14] mb-2">
            Content Marketing Essentials
          </h3>
          <p className="text-white">
            Understand the key elements of a successful content marketing
            strategy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
