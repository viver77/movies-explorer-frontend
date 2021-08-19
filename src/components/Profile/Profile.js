import React, {useContext} from 'react';
import AuthForm from '../AuthForm/AuthForm';
import * as authFormFields from '../../constants/authFormFields';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {useFormWithValidation} from '../../utils/formValidation'

function Profile({ signOut }) {

    const currentUser = useContext(CurrentUserContext);

    const settingsProfile = {
        title: `Привет, ${currentUser.name} !`,
        labelClassName: 'auth__form-label auth__form-label_style_profile',
        inputClassName: 'auth__form-input auth__form-input_style_profile',
        buttonText: 'Редактировать',
        buttonClassName: 'auth__button auth__button_style_profile',
        infoText: '',
        link: '/signup',
        linkText: 'Выйти из аккаунта',
        titleClassName:'auth__title auth__title_style_profile',
        signOut: signOut,
        fields: [
            {...authFormFields.NAME, value: currentUser.name},
            {...authFormFields.EMAIL, value: currentUser.email},
        ]
    }

    const {
        values,
        errors,
        isValid,
        handleChange,
        resetForm
    } = useFormWithValidation({});

    return (
        <main
            className='Profile'
        >
            <AuthForm
               settings={settingsProfile}
               onSubmit={signOut}
               onChange={handleChange}
               errors={errors}
               formIsValid={isValid}
               values={values}
            />
        </main>
    )
}

export default Profile;