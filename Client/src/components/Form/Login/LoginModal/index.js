import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm';
import { useSelector } from 'react-redux';
import Accountinfo from '../../../UserAccount';

function LoginModal({ onCloseBtnClick }) {
    const isLogin = useSelector((state) => state.user.login);
    return (
        <div className="login__modal">
            <div className="login__form__wrap">
                <FontAwesomeIcon
                    className="login__closeicon"
                    icon="fa-solid fa-xmark"
                    onClick={() => {
                        onCloseBtnClick();
                    }}
                />

                <LoginForm handleCloseModal={onCloseBtnClick}></LoginForm>
                <p className="form__question">
                    Not a member yet?
                    <NavLink
                        to="/register"
                        onClick={() => {
                            onCloseBtnClick();
                        }}
                    >
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    );
}

export default LoginModal;
