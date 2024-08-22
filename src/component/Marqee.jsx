import React from "react";

function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap  border-black">
      <div className="animate-marquee flex space-x-10 pt-6">
        <span className="text-black text-5xl font-bold">WEB-DESIGN AND DEVELOPMENT</span>
        <span className="text-black text-5xl font-bold">SOCIAL-MEDIA-MARKETING</span>
        <span className="text-black text-5xl font-bold">CONTENT-MARKETING</span>
        <span className="text-black text-5xl font-bold">EMAIL-MARKETING</span>
        <span className="text-black text-5xl font-bold">INFLUENCER-MARKETING</span>
        <span className="text-black text-5xl font-bold">PAY-PER-CLICK-ADVERTISING</span>
        <span className="text-black text-5xl font-bold">SEARCH-ENGINE-OPTIMIZATION</span>
      </div>
    </div>
  );
}

export default Marquee;
