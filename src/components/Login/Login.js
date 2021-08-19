import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import * as authFormFields from '../../constants/authFormFields';
import {useFormWithValidation} from '../../utils/formValidation'

function Login({ onSignin }) {

    const settingsLogin= {
        title: 'Рады видеть!',
        titleClassName:'auth__title',
        labelClassName: 'auth__form-label',
        inputClassName: 'auth__form-input',
        buttonText: 'Войти',
        buttonClassName: 'auth__button',
        infoText: 'Еще не зарегистрированы?',
        link: '/signup',
        linkText: 'Регистрация',
        logotype:true,
        fields: [
            authFormFields.EMAIL,
            authFormFields.PASSWORD
        ]
    }

    const {
        values,
        errors,
        isValid,
        handleChange,
        resetForm
    } = useFormWithValidation({});


    const handleSubmit = () => {
        onSignin(values);
    };

    return (
        <main
            className='Login'
        >
            <AuthForm
                settings={settingsLogin}
                onChange={handleChange}
                onSubmit={handleSubmit}
                errors={errors}
                formIsValid={isValid}
            />
        </main>
    )
}

export default Login;