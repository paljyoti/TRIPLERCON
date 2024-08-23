// import React from "react";

// const BlogCard = ({ title, description, date }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
//       <h3 className="text-2xl font-bold text-[#39FF14] mb-2">{title}</h3>
//       <p className="text-black mb-4">{description}</p>
//       <span className="text-[#39FF14]">{date}</span>
//     </div>
//   );
// };

// const Blogs = () => {
//   const blogPosts = [
//     {
//       title: "The Future of SEO in 2024",
//       description: "Explore the latest trends in SEO and how to stay ahead of the competition.",
//       date: "August 22, 2024",
//     },
//     {
//       title: "Social Media Strategies for Small Businesses",
//       description: "Learn effective social media strategies to grow your small business online.",
//       date: "August 18, 2024",
//     },
//     {
//       title: "Content Marketing Essentials",
//       description: "Understand the key elements of a successful content marketing strategy. ",
//       date: "August 15, 2024",
//     },
   
//   ];

//   return (
//     <div className="p-8">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl  font-bold text-[#39FF14]">Our Blog</h1>
//         <p className="text-black text-lg mt-4 max-w-2xl mx-auto">
//           Stay updated with the latest trends and insights in digital marketing.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-68 ml-32 w-3/4 text-center gap-8">
//         {blogPosts.map((post, index) => (
//           <BlogCard
//             key={index}
//             title={post.title}
//             description={post.description}
//             date={post.date}
            
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blogs;







import React from "react";

const BlogPost = ({ title, description, date }) => {
  return (
    <div className="mb-16">
      <h2 className="text-5xl font-bold text-[#39FF14] mb-6">{title}</h2>
      <p className="text-black text-lg mb-6">{description}</p>
      <span className="text-gray-600">{date}</span>
    </div>
  );
};

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of SEO in 2024",
      description:
        "Explore the latest trends in SEO and how to stay ahead of the competition. In this article, we delve into the key strategies that will shape the SEO landscape in the coming years.",
      date: "August 22, 2024",
    },
    {
      title: "Social Media Strategies for Small Businesses",
      description:
        "Learn effective social media strategies to grow your small business online. From platform selection to content creation, this guide covers all the essentials.",
      date: "August 18, 2024",
    },
    {
      title: "Content Marketing Essentials",
      description:
        "Understand the key elements of a successful content marketing strategy. Discover how to create compelling content that resonates with your audience and drives conversions.",
      date: "August 15, 2024",
    },
  ];

  return (
    <div className="bg-white p-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#39FF14]">Our Blog</h1>
        <p className="text-black text-xl mt-4 max-w-3xl mx-auto">
          Stay updated with the latest trends and insights in digital marketing. Read our in-depth articles below.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
