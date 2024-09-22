import React from "react";
import "./index.scss";
import img from "../../../assets/about/2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__promo">
            <h5 className="footer__title">CHÂN TRANG</h5>
            <a href="/">
              <img className="footer__promo__img" src={img} alt={img} />
              <p>Xin cảm ơn đã ghé thăm trang web của chúng tôi!</p>
            </a>
          </div>
          <div className="footer__quicklinks">
            <h5 className="footer__title">LINKS</h5>
            <div className="quicklinks__list">
              <div className="list__link">
                <a href="/">Trang chủ</a>
                <a href="/">Sản phẩm</a>
                <a href="/">Giới thiệu</a>
                <a href="/">Liên hệ</a>
              </div>
            </div>
          </div>
          <div className="footer__contact">
            <h5 className="footer__title">THÔNG TIN LIÊN HỆ</h5>
            <p className="contact__text">
              <FontAwesomeIcon
                className="footer__icon"
                icon="fa-solid fa-location-dot"
              />
              Hà Nội
            </p>
            <p className="contact__text">
              <FontAwesomeIcon
                className="footer__icon"
                icon="fa-solid fa-phone"
              />{" "}
              +2 392 3929 210
            </p>
            <p className="contact__text">
              <FontAwesomeIcon
                className="footer__icon"
                icon="fa-solid fa-envelope"
              />
              abc@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
