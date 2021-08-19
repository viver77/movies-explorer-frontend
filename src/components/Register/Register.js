import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import * as authFormFields from '../../constants/authFormFields';
import {useFormWithValidation} from '../../utils/formValidation';

function Register({ onSignup }) {

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

    const {
        values,
        errors,
        isValid,
        handleChange,
        resetForm
    } = useFormWithValidation({});


    const handleSubmit = () => {
        onSignup(values);
    };


    return (
        <main
            className='register'
        >
            <AuthForm
                settings={settingsRegister}
                onChange={handleChange}
                onSubmit={handleSubmit}
                errors={errors}
                formIsValid={isValid}
            />
        </main>
    )
}

export default Register;