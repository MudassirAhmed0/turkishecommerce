import React from "react";
const DiscoverCard = ({ img, title }) => {
  return (
    <div className="discoverCard">
      <img src={img} alt="" />
      <span>{title}</span>
    </div>
  );
};

export default DiscoverCard;
