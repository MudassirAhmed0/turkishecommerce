import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="redBg">
      <div className="footerBrand">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="footerSocials">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div>
        <div className="whiteColoredFooter">
          <span>
            Türkiye e-pazar Portalı, Müşteri e-ticaret ve Alışveriş için sürekli
            büyüyen ilk Global Tedarikçidir. Platformu, sadece Türk
            tedarikçileri için dünya çapındaki müşterilere katılıyor.
          </span>
          <span>
            Geri ödeme politikası
            <br />
            Kullanım Şartları
          </span>
          <span>
            Gizlilik Politikası
            <br />
            Kabul Politikası
          </span>
          <div className="footerInputWrapper">
            <label htmlFor="subs">Haber Bültenine Kaydolun</label>
            <div>
              <input type="email" placeholder="email adresiniz" />
              <button>ABONE OL</button>
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li>Elektronik</li>
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
    </footer>
  );
};

export default Footer;
