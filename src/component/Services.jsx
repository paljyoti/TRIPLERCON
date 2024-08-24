// import React from 'react';

// const ServiceCard = ({ title, description }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
//       <h3 className="text-2xl font-bold text-[#39FF14] mb-2">{title}</h3>
//       <p className="text-black">{description}</p>
//     </div>
//   );
// };

// const DigitalMarketingServices = () => {
//   const services = [
//     {
//       title: 'SEO Optimization',
//       description: 'Improve your website visibility on search engines with our expert SEO services.',
//     },
//     {
//       title: 'Social Media Marketing',
//       description: 'Engage your audience on social media platforms and grow your brand presence.',
//     },
//     {
//       title: 'Content Marketing',
//       description: 'Create compelling content that resonates with your target audience and drives engagement.',
//     },
//     {
//       title: 'PPC Advertising',
//       description: 'Boost your traffic and sales with targeted Pay-Per-Click advertising campaigns.',
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
//       {services.map((service, index) => (
//         <ServiceCard
//           key={index}
//           title={service.title}
//           description={service.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default DigitalMarketingServices;

import React from "react";

function View() {
  return (
    <div className="bg-white p-4 sm:p-8 lg:p-12">
      <div className="text-center sm:text-left text-white mb-8 px-4 sm:px-20">
        <h6 className="text-xl sm:text-5xl text-[#39FF14] font-bold mb-2">
          How We Work
        </h6>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
          Custom Design Solutions
        </h1>
      </div>
      <div className="text-center pl-20 sm:text-left text-white flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-8">
        <p className="text-base text-black sm:text-lg leading-relaxed w-full sm:w-1/2 px-4 sm:px-0">
          We approach every design as tailor-made and unique to our customer's
          taste and lifestyle. Collaborating this understanding with our
          expertise in custom quality craftsmanship forms the foundation for
          success.
        </p>
        <button class="bg-black mt-10 mr-96 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#39FF14] hover:text-black">
          View Process
        </button>
      </div>
    </div>
  );
}

export default View;
