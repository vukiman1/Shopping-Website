import React from 'react';
import './index.scss';
import RegisterForm from '../../components/Form/RegisterForm';
import { useSelector } from 'react-redux';
import RegisterDone from '../../components/Form/RegisterDone';

function Register(props) {
    const isLogin = useSelector((state) => state.user.login);
    return (
        <div className="register">
            {isLogin ? (
                <RegisterDone />
            ) : (
                <div className="register__wrap">
                    {' '}
                    <RegisterForm />
                </div>
            )}
        </div>
    );
}
export default Register;
