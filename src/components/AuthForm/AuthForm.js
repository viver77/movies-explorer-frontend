import React, {useContext, useState} from 'react';
import Logotype from '../logotype/logotype';
import './AuthForm.css';
import FormButtons from '../FormButtons/FormButtons';
import Input from '../Input/Input';
import Note from '../Note/Note';
import mainApi from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function AuthForm({ settings, onChange, onSubmit, errors, formIsValid, values, onUpdateProfileInfo, updateProfileResult }) {

    const currentUser = useContext(CurrentUserContext);

    const handleSubmit = (evt) => {
        evt.preventDefault()
        onSubmit()
    }

    const [textNote, setTextNote] = useState('');
    const updateProfileInfo = () => {

        const {name = settings.fields.find(item => item.name==='name').value,
            email = settings.fields.find(item => item.name==='email').value} = values

        onUpdateProfileInfo(name, email)
        setTextNote(updateProfileResult)
    }

    const markupAuthForm = (field) => {
        return (

            <fieldset className="auth__form-fieldset" key={field.id}>
                <label className={settings.labelClassName} htmlFor={`auth-input-${field.name}`}>
                    {field.label}:
                </label>
                <Input field={field} onChange={onChange} className={settings.inputClassName}/>

                <span
                    className="auth-form__input-error"
                >
                    {field.regexp && errors[field.name] && field.errorMessage}
                    {errors[field.name]}
                    </span>

            </fieldset>
        )
    }

    return (
        <div className="auth">
            <div className="auth__top">
                {settings.logotype && (
                    <div className="logotype__wrapper">
                        <Logotype/>
                    </div>)}
                <h1 className={settings.titleClassName}>{settings.title}</h1>
            </div>
            <form
                className="auth__form"
                noValidate
                onSubmit={handleSubmit}
            >
                <div className="auth__fields-wrapper">
                    {settings.fields.map((field) =>
                        markupAuthForm(field)
                    )}
                </div>

                {textNote && (
                    <Note
                        text={textNote}
                    />
                )}

                <FormButtons className={settings.buttonClassName}
                             buttonText={settings.buttonText}
                             infoText={settings.infoText}
                             to={settings.link}
                             linkText={settings.linkText}
                             disabled={!formIsValid}
                             updateProfileInfo={updateProfileInfo}
                />
            </form>
        </div>
    )
}

export default AuthForm;