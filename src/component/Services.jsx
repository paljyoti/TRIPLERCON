import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-[#39FF14] mb-2">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};

const DigitalMarketingServices = () => {
  const services = [
    {
      title: 'SEO Optimization',
      description: 'Improve your website visibility on search engines with our expert SEO services.',
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience on social media platforms and grow your brand presence.',
    },
    {
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your target audience and drives engagement.',
    },
    {
      title: 'PPC Advertising',
      description: 'Boost your traffic and sales with targeted Pay-Per-Click advertising campaigns.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default DigitalMarketingServices;
