import React from "react";

function AboutUs() {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#39FF14]">What We Do</h1>
        <p className="text-black mt-4 max-w-2xl mx-auto text-lg">
          As a website designer, we provide affordable website design services to
          our clients all over the world with the best services. Our services
          include small business website design services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-black p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-[#39FF14] mb-2">Custom Web Design</h3>
          <p className="text-white">
            We create custom websites tailored to your business needs, ensuring a unique online presence.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-black p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-[#39FF14] mb-2">E-commerce Solutions</h3>
          <p className="text-white">
            Our e-commerce solutions are designed to help you sell products online efficiently and effectively.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
