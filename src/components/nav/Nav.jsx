import React from "react";
import Dropdown from "../dropdown/Dropdown";
import "./nav.css";

const Nav = () => {
  const openNav = (e) => {
    e.target.classList.toggle("active");
  };
  return (
    <nav>
      <ul>
        <li onClick={openNav} className="dropDownBtn">
          Elektronik
          <Dropdown />
        </li>
        <li>Ev &#38; Yaşam &#38; Kırtasiye &#38; Ofis</li>
        <li>Süpermarket &#38; Petshop</li>
        <li>Moda </li>
        <li>Kitap &#38; Hobi</li>
        <li>Kişisel Bakım &#38; Kozmetik</li>
        <li>Dış Mekan Bahçe &#38; Oto</li>
        <li>Spor &#38; Doğa</li>
        <li>Anne &#38; Bebek &#38; Oyuncak</li>
        <li> Takı &#38; Aksesuar</li>
      </ul>
    </nav>
  );
};

export default Nav;
