import React from 'react';
import {Link} from 'react-router-dom';
import Logotype from '../logotype/logotype';
import './AuthForm.css';

function AuthForm({ settings }) {

    const markupAuthForm = (field) =>{
        return (
            <fieldset className='auth__form-fieldset' key={field.id}>
                <label className={settings.labelClassName} htmlFor={`auth-input-${field.name}`}>
                    {field.label}:
                </label>
                <input id={`auth-input-${field.name}`}
                       className={settings.inputClassName}
                       type="text"
                       placeholder={field.placeholder}
                       disabled={settings.disabled}
                       required
                />
            </fieldset>
        )
    }

    return (
        <div className="auth">
            <div className="auth__top">
                {settings.logotype && (
                    <div className='logotype__wrapper'>
                        <Logotype />
                    </div> )}
                <h1 className={settings.titleClassName}>{settings.title}</h1>
            </div>
            <form className='auth__form'>
                {settings.fields.map((field) =>
                    markupAuthForm(field)
                )}
            </form>
            <button className={settings.buttonClassName} type='submit'>{settings.buttonText}</button>
            <p className='auth__info'>{settings.infoText}
                <Link to={settings.link} className='auth__info-link link'>
                    {settings.linkText}
                </Link>
            </p>
        </div>
    )
}

export default AuthForm;