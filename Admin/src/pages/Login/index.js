import React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import LoginForm from '../../components/Form/Login/LoginForm';

function Login(props) {
    const isLogin = useSelector((state) => state.user.login);
    return (
        <div className="register">
            {isLogin ? (
                <LoginForm />
            ) : (
                <div className="register__wrap">
                    {' '}
                    <LoginForm />
                </div>
            )}
        </div>
    );
}
export default Login;
