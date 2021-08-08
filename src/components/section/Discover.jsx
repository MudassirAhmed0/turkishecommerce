import React from "react";
import DiscoverCard from "../card/DiscoverCard";
import Section from "./Section";
import img1 from "../../assets/box4.png";
import img2 from "../../assets/box1.png";
import img3 from "../../assets/box2.png";
import img4 from "../../assets/box3.png";
import Offer from "../Offer";

const Discover = () => {
  return (
    <Section>
      <h2>Keşfet</h2>
      <div className="discoverCards">
        <DiscoverCard img={img1} title="SOFRALARINIZI GÜZELLEŞTİRİN" />
        <DiscoverCard img={img2} title="ÇEYİZ LİSTESİ" />
        <DiscoverCard img={img3} title="PLAJDA OKUNACAKLAR" />
        <DiscoverCard img={img4} title="KLİMA VEVANTİLATÖRLER" />
      </div>
      <Offer />
    </Section>
  );
};

export default Discover;
