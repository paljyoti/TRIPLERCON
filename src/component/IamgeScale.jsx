import React from "react";
import backgroundVideo from "../../src/assets/3130284-uhd_3840_2160_30fps.mp4";

function IamgeScale() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h5 className="text-xl md:text-2xl lg:text-7xl mb-4">
            Ready to take your Business to
          </h5>
          {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">TRIPLE <span className='  text-9xl'style={{color:"#39FF14"}} >R</span>  CONSULTING</h1> */}
          <h5 className="text-lg md:text-xl lg:text-7xl">The next level?</h5>
        </div>
      </div>
    </div>
  );
}

export default IamgeScale;
