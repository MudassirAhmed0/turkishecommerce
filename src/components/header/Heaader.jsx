import React from "react";
import logo from "../../assets/logo.png";
import "./header.css";

const Heaader = () => {
  return (
    <div className="header">
      <div className="brandLogo">
        <img src={logo} alt="" />
      </div>
      <div className="headerInputWrapper">
        <input type="text" placeholder="Tost makinesi" />
        <i className="fa fa-search"></i>
      </div>
      <ul>
        <li>
          <span>TR</span> DiL
        </li>
        <li>
          <i className="fa fa-heart"></i> Favorilerim
        </li>
        <li>
          <i className="fa fa-user"></i> Hesabım
        </li>
        <li>
          <i className="fa fa-shopping-cart"></i>
          Sepetim
        </li>
      </ul>
    </div>
  );
};

export default Heaader;
