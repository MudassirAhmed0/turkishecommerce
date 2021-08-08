import React from "react";
import Section from "./Section";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";
import img10 from "../../assets/10.png";

const Companies = () => {
  return (
    <Section>
      <div className="companies">
        <div>
          <img src={img1} alt="" />
          <span>Kaçırma</span>
        </div>
        <div>
          <img src={img2} alt="" />
          <span>Hemen Al</span>
        </div>
        <div>
          <img src={img3} alt="" />
          <span>Yaza Hazırlan</span>
        </div>
        <div>
          <img src={img4} alt="" />
          <span>Yeni Gelenler</span>
        </div>
        <div>
          <img src={img5} alt="" />
          <span>Okumadan</span>
        </div>
        <div>
          <img src={img6} alt="" />
          <span>Karaca Home</span>
        </div>
        <div>
          <img src={img7} alt="" />
          <span>Paşabahçe</span>
        </div>
        <div>
          <img src={img8} alt="" />
          <span>Vestel</span>
        </div>
        <div>
          <img src={img9} alt="" />
          <span>Arçelik</span>
        </div>
        <div>
          <img src={img10} alt="" />
          <span>Beko</span>
        </div>
      </div>
    </Section>
  );
};

export default Companies;
