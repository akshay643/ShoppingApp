import React from "react";

// import CardMedia from '@mui/material/CardMedia';

import vid from "./videos/video.mp4";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import "./header.css";

export default function Media() {
  return (
    <div class="header">
      {/* <CardMedia src= {vid} /> */}
      <div className="background-video">
        <video width="100%" height="360px" controls>
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="play">
        <PlayCircleIcon className="play-icon" />
      </button>
      <div>
        <h2 className="header-bottom-tage">Shop my Closet </h2>
      </div>
      .
    </div>
  );
}
