import React from "react";
import "./ScrollingAnnouncementBanner.css"; // import CSS animation

const ScrollingAnnouncementBanner = ({ text }) => {
  return (
    <div className="w-full overflow-hidden bg-blue-600 py-2 shadow-md">
      <div className="scrolling-text text-white font-semibold text-sm sm:text-base tracking-wide">
        {text}
      </div>
    </div>
  );
};

export default ScrollingAnnouncementBanner;
