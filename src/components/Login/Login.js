import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import * as authFormFields from '../../constants/authFormFields';

function Login() {

    const settingsLogin= {
        title: 'Рады видеть!',
        labelClassName: 'auth__form-label',
        inputClassName: 'auth__form-input',
        buttonText: 'Войти',
        buttonClassName: 'auth__button',
        infoText: 'Еще не зарегистрированы?',
        link: '/signup',
        linkText: 'Регистрация',
        logotype:true,
        fields: [
            authFormFields.NAME,
            authFormFields.EMAIL,
        ]
    }

    return (
        <main
            className='Login'
        >
            <AuthForm
                settings={settingsLogin}
            />
        </main>
    )
}

export default Login;