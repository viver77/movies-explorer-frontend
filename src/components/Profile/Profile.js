import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import * as authFormFields from '../../constants/authFormFields';

function Profile() {

    const settingsProfile = {
        title: 'Привет Аккаунт',
        labelClassName: 'auth__form-label auth__form-label_style_profile',
        inputClassName: 'auth__form-input auth__form-input_style_profile',
        buttonText: 'Редактировать',
        buttonClassName: 'auth__button auth__button_style_profile',
        infoText: '',
        link: '/signup',
        linkText: 'Выйти из аккаунта',
        titleClassName:'auth__title auth__title_style_profile',
        disabled: true,
        fields: [
            authFormFields.NAME,
            authFormFields.EMAIL,
        ]
    }

    return (
        <main
            className='Profile'
        >
            <AuthForm
               settings={settingsProfile}
            />
        </main>
    )
}

export default Profile;