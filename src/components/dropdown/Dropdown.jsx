import React from "react";
import "./dropdown.css";
import watch from "../../assets/cat-watch.jpg";

const Dropdown = () => {
  return (
    <div className="dropdown active">
      <div classNames="dropdownRow">
        <ul>
          <li className="headingItem">
            <strong>Bilgisayar &#38; Tablet</strong>
          </li>
          <li>Laptop</li>
          <li>Masaüstü bilgisayar</li>
          <li>Tablet</li>
          <li>Monitör </li>
          <li>Oyuncu Bilgisayarı</li>
          <li>Mouse</li>
          <li>Klavye</li>
        </ul>
        <ul>
          <li className="headingItem">
            <strong>Telefon</strong>
          </li>
          <li>Cep Telefonu</li>
          <li>Şarj Cihazı</li>
          <li>Kapak &#38; Kılık</li>
          <li>Powerbank</li>
        </ul>
        <ul>
          <li className="headingItem">
            <strong>Beyaz Eşya </strong>
          </li>
          <li>Buzdolabı</li>
          <li>Çamaşır Makinesi</li>
          <li>Bulaşık Makinesi </li>
          <li>Ankastre</li>
          <li>Mini Fırın</li>
          <li>Klima </li>
        </ul>
        <ul>
          <li>
            <strong>Veri Depolama</strong>
          </li>
          <li>Harici Disk</li>
          <li>USB Bellek</li>
          <li>SSD Bellek</li>
          <li>Hafıza Kartı</li>
        </ul>
        <div className="dropDownImg">
          <img src={watch} alt="" />
        </div>
      </div>

      <div classNames="dropdownRow">
        <ul>
          <li className="headingItem">
            <strong>Bilgisayar &#38; Tablet</strong>
          </li>
          <li>Laptop</li>
          <li>Masaüstü bilgisayar</li>
          <li>Tablet</li>
          <li>Monitör </li>
          <li>Oyuncu Bilgisayarı</li>
          <li>Mouse</li>
          <li>Klavye</li>
        </ul>
        <ul>
          <li className="headingItem">
            <strong>Telefon</strong>
          </li>
          <li>Cep Telefonu</li>
          <li>Şarj Cihazı</li>
          <li>Kapak &#38; Kılık</li>
          <li>Powerbank</li>
        </ul>
        <ul>
          <li className="headingItem">
            <strong>Beyaz Eşya </strong>
          </li>
          <li>Buzdolabı</li>
          <li>Çamaşır Makinesi</li>
          <li>Bulaşık Makinesi </li>
          <li>Ankastre</li>
          <li>Mini Fırın</li>
          <li>Klima </li>
        </ul>
        <ul>
          <li>
            <strong>Veri Depolama</strong>
          </li>
          <li>Harici Disk</li>
          <li>USB Bellek</li>
          <li>SSD Bellek</li>
          <li>Hafıza Kartı</li>
        </ul>
        <div className="dropDownImg">
          <img src={watch} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
