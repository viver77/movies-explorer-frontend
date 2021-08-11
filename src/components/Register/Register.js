import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import * as authFormFields from '../../constants/authFormFields';

function Register() {

    const settingsRegister = {
        title: 'Добро пожаловать!',
        titleClassName:'auth__title',
        labelClassName: 'auth__form-label',
        inputClassName: 'auth__form-input',
        buttonText: 'Зарегистрироваться',
        buttonClassName: 'auth__button',
        infoText: 'Уже зарегистрированы?',
        link: '/signin',
        linkText: 'Войти',
        logotype:true,
        fields: [
            authFormFields.NAME,
            authFormFields.EMAIL,
            authFormFields.PASSWORD,
        ]
    }

    return (
        <main
            className='register'
        >
            <AuthForm
                settings={settingsRegister}
            />
        </main>
    )
}

export default Register;