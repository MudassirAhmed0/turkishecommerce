import React from "react";
import "./slider.css";

const Slider = ({ children }) => {
  const handleLeftScroll = () => {
    let cards = document.querySelector(".cards");
    cards.scrollLeft -= 350;
  };
  const handleRightScroll = () => {
    let cards = document.querySelector(".cards");
    console.log(cards.clientWidth);
    cards.scrollLeft += 350;
  };
  return (
    <div className="slider">
      <i className="fa fa-chevron-left" onClick={handleLeftScroll}></i>
      {children}
      <i className="fa fa-chevron-right" onClick={handleRightScroll}></i>
    </div>
  );
};

export default Slider;
