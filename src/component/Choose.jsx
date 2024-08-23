import React from "react";
import image1 from "../../src/assets/pexels-flodahm-699459.jpg";
import image2 from "../../src/assets/pexels-fauxels-3184291.jpg";

function Choose() {
  return (
    <div>
      <div className="img-and-heading flex bg-white p-6 items-center">
        <div className="img w-1/2">
          <img
            src={image1}
            alt=""
            className=" ml-8 w-5/6 h-96 hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
        <div className="heading w-1/2 text-black pl-6">
          <h1
            className="text-5xl font-bold mb-4 text-left "
            style={{ color: "#39FF14" }}
          >
            Why Choose Us
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-left">
            The Ultimate Platform for DIGITAL SUCCESS.
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-left text-justify w-5/6">
            <li>
              Expert Team: Our seasoned professionals bring years of experience
              and industry insights and simplify the entire process.
            </li>
            <li>
              Customized Strategies: We tailor our services to adapt the
              development as per the needs of your business.
            </li>
            <li>
              Proven Results: We deliver measurable outcomes that help you
              achieve your goals.
            </li>
          </ul>
        </div>
      </div>

      <div className="img-and-heading flex bg-white p-6 items-center">
        <div className="heading w-1/2 text-black pl-20">
          <h1
            className="text-5xl font-bold mb-4 text-left "
            style={{ color: "#39FF14" }}
          >
            Who are we
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-left">
            A New Digital Work System for You.
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-left text-justify">
            <li>
              Triple R Consulting: Your One-Stop Shop for Digital Marketing
              Success.
            </li>
            <li>
              We are a pioneering digital work system designed to revolutionize
              how businesses operate in the digital age.
            </li>
            <li>
              Our mission is to provide cutting-edge solutions that streamline
              workflows, enhance productivity, and drive growth.
            </li>
          </ul>
          <button class="bg-black mt-10 mr-96 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#39FF14] hover:text-black">
            View More
          </button>
        </div>

        <div className="img w-1/2">
          <img
            src={image2}
            alt=""
            className=" ml-16 w-5/6 h-96 hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Choose;
