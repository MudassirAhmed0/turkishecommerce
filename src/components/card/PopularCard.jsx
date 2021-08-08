import React from "react";
import watch from "../../assets/cat-watch.jpg";

const PopularCard = () => {
  return (
    <div className="popularCard">
      <div className="popularCardMainImg">
        <span>SÜPERMARKET</span>
        <img src={watch} alt="watch" />
      </div>
      <div className="popularCardSubImg">
        <div className="subImgContainer">
          <img src={watch} alt="watch" />
          <span>Watch</span>
        </div>
        <div className="subImgContainer">
          <img src={watch} alt="watch" />
          <span>Watch</span>
        </div>
        <div className="subImgContainer">
          <img src={watch} alt="watch" />
          <span>Watch</span>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
