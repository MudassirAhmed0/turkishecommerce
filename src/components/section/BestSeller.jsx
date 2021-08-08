import React from "react";
import Card from "../card/Card";
import Slider from "../slider/Slider";
import Section from "./Section";

const BestSeller = () => {
  return (
    <Section>
      <h2>Çok Satanlar</h2>
      <Slider>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Slider>
    </Section>
  );
};

export default BestSeller;
