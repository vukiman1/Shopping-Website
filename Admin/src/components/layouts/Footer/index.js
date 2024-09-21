import React from 'react';
import './index.scss';
import img from '../../../assets/about/2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__promo">
                        <h5 className="footer__title">PROMO</h5>
                        <a>
                            <img className="footer__promo__img" src={img} alt={img} />
                            <p>Finding Your Perfect Shirts This Summer</p>
                        </a>
                    </div>
                    <div className="footer__quicklinks">
                        <h5 className="footer__title">QUICK LINKS</h5>
                        <div className="quicklinks__list">
                            <div className="list__link">
                                <a>Sell online</a>
                                <a>Store builder</a>
                                <a>Mobile commerce</a>
                                <a>Dropshipping</a>
                            </div>
                            <div className="list__link">
                                <a>Shopping cart</a>
                                <a>Web development</a>
                                <a>Point of sale</a>
                                <a>Shopping cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__contact">
                        <h5 className="footer__title">CONTACT INFO</h5>
                        <p className="contact__text">
                            <FontAwesomeIcon className="footer__icon" icon="fa-solid fa-location-dot" />
                            203 Fake St. Mountain View, San Francisco, California, USA
                        </p>
                        <p className="contact__text">
                            <FontAwesomeIcon className="footer__icon" icon="fa-solid fa-phone" /> +2 392 3929 210
                        </p>
                        <p className="contact__text">
                            <FontAwesomeIcon className="footer__icon" icon="fa-solid fa-envelope" />
                            emailaddress@domain.com
                        </p>
                    </div>
                </div>
                <hr />
                <p className="footer__copyright">
                    Copyright ©2022 All rights reserved | This template is made with{' '}
                    <FontAwesomeIcon className="footer__icon" icon="fa-solid fa-heart" /> by Me
                </p>
            </div>
        </div>
    );
}

export default Footer;
