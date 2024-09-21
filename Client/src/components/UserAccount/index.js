import React, { useState } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import { logout } from '../Form/Login/LoginForm/userSlice';

function UserAccount() {
    const accountRef = useRef();
    const accountInfoRef = useRef();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const handleClickLogoutBtn = () => {
        dispatch(logout());
        localStorage.removeItem('currentUser');
    };
    const currentUser = useSelector((state) => state.user.user.name);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accountInfoRef.current && !accountInfoRef.current.contains(event.target)) {
                setOpen(!open);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    return (
        <div className="account" ref={accountRef}>
            <button className="nav__button" onClick={() => setOpen(!open)}>
                <FontAwesomeIcon className="btn__icon" icon="fa-solid fa-right-to-bracket" />
                {currentUser}
            </button>
            {open && (
                <div className="account__info" ref={accountInfoRef}>
                    <ul className="account__list">
                        <li className="account__list__link">
                            <a href="#">My account</a>
                        </li>
                        <li className="account__list__link">
                            <a href="#">My order</a>
                        </li>
                        <li className="account__list__link">
                            <a href="#">My wishList </a>
                        </li>
                    </ul>
                    <p className="account__logout" onClick={handleClickLogoutBtn}>
                        Logout
                    </p>
                </div>
            )}
        </div>
    );
}

export default UserAccount;
