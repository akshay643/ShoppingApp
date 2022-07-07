import React from "react";

import ImgMediaCard from "./bottomCards";

import "./cardLayout.css";

export default function CardLayout() {
  return (
    <div className="LayoutPage">
      <h2 className="heading"> Tagged Product (2)</h2>
      <div class="cardLayout">
        <ImgMediaCard />
        <ImgMediaCard />
      </div>
    </div>
  );
}
