"use client";

import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  let videosrc =
    "https://www.youtube.com/embed/NMThdHhrLoM?si=1jPxCAceJwnfWbTt";

  return (
    <div className="flex justify-center">
      <ReactPlayer
        width={"100%"}
        height={570}
        url={videosrc}
        // controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={false}
      />
      {/* <source src={videosrc} type="video/mp4" /> */}
    </div>
  );
};

export default VideoPlayer;
