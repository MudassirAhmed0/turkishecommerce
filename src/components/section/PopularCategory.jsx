import React from "react";
import PopularCard from "../card/PopularCard";
import Section from "./Section";

const PopularCategory = () => {
  return (
    <Section>
      <h2>Popüler Kategoriler</h2>
      <div className="popularCards">
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
    </Section>
  );
};

export default PopularCategory;
