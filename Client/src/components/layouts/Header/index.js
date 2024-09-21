import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginModal from '../../Form/Login/LoginModal';
import { useState } from 'react';
import UserAccount from '../../UserAccount';

function Header() {
    // const cart = useSelector((state) => state.cart);
    const cartProducts = useSelector((state) => state.cart);
    const totalItems = cartProducts.reduce((total, product) => {
        return total + product.qty;
    }, 0);

    const [showLogin, setShowLogin] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const handleClickLoginBtn = () => {
        setShowLogin(!showLogin);
    };
    const isLogin = useSelector((state) => state.user.login);
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="nav">
                        <div>
                            <FontAwesomeIcon
                                icon="fa-solid fa-bars"
                                className="nav__menu__icon"
                                onClick={() => setShowMenu(!showMenu)}
                            />
                            <NavLink className="nav__logo" to="/">
                                Teck & Manual
                            </NavLink>
                        </div>
                        <div id="pc_nav_menu" className="nav__menu">
                            <ul>
                                <li className="nav__item">
                                    <NavLink className="nav__link" to="/">
                                        Trang chủ
                                    </NavLink>
                                </li>

                                <li className="nav__item">
                                    <NavLink className="nav__link" to="/products">
                                        Sản phẩm
                                    </NavLink>
                                </li>

                                <li className="nav__item">
                                    <NavLink className="nav__link" to="/about">
                                        Giới thiệu
                                    </NavLink>
                                </li>

                                <li className="nav__item">
                                    <NavLink className="nav__link" to="/contact">
                                        Liên hệ
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        {showMenu && (
                            <div className="sidebar__menu">
                                <div
                                    className="sidebar__overlay"
                                    onClick={() => {
                                        setShowMenu(!showMenu);
                                    }}
                                ></div>
                                <div id="small_nav_menu" className="nav__menu" onClick={() => setShowMenu(!showMenu)}>
                                    <NavLink className="sidebar__nav__logo" to="/">
                                        Teck & Manual
                                    </NavLink>
                                    <ul>
                                        <li className="nav__item">
                                            <NavLink className="nav__link" to="/">
                                                Trang chủ
                                            </NavLink>
                                        </li>

                                        <li className="nav__item">
                                            <NavLink className="nav__link" to="/products">
                                                Sản phẩm
                                            </NavLink>
                                        </li>

                                        <li className="nav__item">
                                            <NavLink className="nav__link" to="/about">
                                                Giới thiệu
                                            </NavLink>
                                        </li>

                                        <li className="nav__item">
                                            <NavLink className="nav__link" to="/contact">
                                                Liên hệ
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        <div className="nav__buttons">
                            {isLogin ? <UserAccount /> : <Link to="/login">Đăng nhập</Link>}

                            <Link to="/cart" className="nav__button">
                                <FontAwesomeIcon className="btn__icon" icon="fa-solid fa-cart-arrow-down" />
                                Giỏ hàng ({totalItems})
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {showLogin && <LoginModal onCloseBtnClick={handleClickLoginBtn} />}
        </>
    );
}

export default Header;
