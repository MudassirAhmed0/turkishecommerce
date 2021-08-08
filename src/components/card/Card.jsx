import React from "react";
import { useRef } from "react";
import watch from "../../assets/cat-watch.jpg";
import "./card.css";

const Card = () => {
  const activeHeart = (e) => {
    e.target.classList.toggle("active");
  };

  const starContainer = useRef(null);

  const activeStar = (e) => {
    const stars = starContainer.current.querySelectorAll(".fa-star");
    const starsToActive = e.target.id;
    stars.forEach((star) => star.classList.remove("active"));
    for (let i = 0; i < starsToActive; i++) {
      stars[i].classList.add("active");
    }
  };
  return (
    <div className="Card">
      <div className="cardImg">
        <i className="fa fa-heart" onClick={activeHeart}></i>
        <img src={watch} alt="Watch" />
      </div>
      <div className="cardContent">
        <span className="cardTitle">Vestel Venus V7 Gece Mavis</span>
        <span>
          <strong>1.678 TL</strong>
        </span>
        <div className="rating" ref={starContainer}>
          <i className="fa fa-star" id="1" onClick={activeStar}></i>
          <i className="fa fa-star" id="2" onClick={activeStar}></i>
          <i className="fa fa-star" id="3" onClick={activeStar}></i>
          <i className="fa fa-star" id="4" onClick={activeStar}></i>
          <i className="fa fa-star" id="5" onClick={activeStar}></i>
        </div>
        <button className="cardBtn redBg">Sepete Ekle</button>
      </div>
    </div>
  );
};

export default Card;
