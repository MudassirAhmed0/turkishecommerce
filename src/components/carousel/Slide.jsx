import React from "react";
import { useRef } from "react";
import slide1 from "../../assets/slider-01.jpg";
import slide2 from "../../assets/slider-02.jpg";
import slide3 from "../../assets/slider-03.jpg";

const Slide = () => {
  let slides = useRef([]);
  const addActive = (number) => {
    slides.current.forEach((item) => {
      console.log(item.classList.contains("active"));
      item.classList.contains("active") && item.classList.remove("active");
    });

    switch (number) {
      case "first":
        slides.current[0].classList.add("active");
        break;
      case "second":
        slides.current[1].classList.add("active");
        break;
      case "third":
        slides.current[2].classList.add("active");
        break;
    }
  };
  return (
    <>
      <div
        ref={(element) => (slides.current[0] = element)}
        className="carouselSlide carouselSlideOne active"
      >
        <img src={slide1} alt="" />
        <div className="content">
          <h2>Çeyiz ve Düğün Setlerini Kaçırma</h2>
          <p>
            Yeni ev kurmak hiç bu kadar kolay olmamıştı. En kaliteli Türk
            markalarının çeyiz setleri Turkish E-Market’la tek tıkla kapınızda
          </p>
          <button>Keşfet</button>
          <div className="slidersDot">
            <span onClick={() => addActive("first")}></span>
            <span onClick={() => addActive("second")}></span>
            <span onClick={() => addActive("third")}></span>
          </div>
        </div>
      </div>
      <div
        ref={(element) => (slides.current[1] = element)}
        className="carouselSlide carouselSlideTwo"
      >
        <img src={slide2} alt="" />
        <div className="content">
          <h2>Çeyiz ve Düğün Setlerini Kaçırma</h2>
          <p>
            Yeni ev kurmak hiç bu kadar kolay olmamıştı. En kaliteli Türk
            markalarının çeyiz setleri Turkish E-Market’la tek tıkla kapınızda
          </p>
          <button>Keşfet</button>
          <div className="slidersDot">
            <span onClick={() => addActive("first")}></span>
            <span onClick={() => addActive("second")}></span>
            <span onClick={() => addActive("third")}></span>
          </div>
        </div>
      </div>
      <div
        ref={(element) => (slides.current[2] = element)}
        className="carouselSlide carouselSlideThree"
      >
        <img src={slide3} alt="" />
        <div className="content">
          <h2>Çeyiz ve Düğün Setlerini Kaçırma</h2>
          <p>
            Yeni ev kurmak hiç bu kadar kolay olmamıştı. En kaliteli Türk
            markalarının çeyiz setleri Turkish E-Market’la tek tıkla kapınızda
          </p>
          <button>Keşfet</button>
          <div className="slidersDot">
            <span onClick={() => addActive("first")}></span>
            <span onClick={() => addActive("second")}></span>
            <span onClick={() => addActive("third")}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
