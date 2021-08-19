import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './FormButtons.css';

const FormButtons = ({ buttonText, infoText, linkText, to, className, handleEdit, disabled, updateProfileInfo }) => {

    const location = useLocation();

    const onClickBtnEdit = () => {
        updateProfileInfo()
    }

    if (location.pathname === '/profile') {
        return <>
            <button
                className={className}
                type={'button'}
                onClick={onClickBtnEdit}
                disabled={disabled}
            >
                {buttonText}
            </button>
            <p className="auth__info">{infoText}
                <button
                    className={`auth__button_style_profile_red ${className}`}
                    type="submit"
                >
                    {linkText}
                </button>
            </p>
        </>
    }

    return <>
        <button
            className={className}
            type="submit"
            disabled={disabled}
        >
            {buttonText}
        </button>
        <p className="auth__info">{infoText}
            <Link
                to={to}
                className="auth__info-link link">
                {linkText}
            </Link>
        </p>
    </>
};

export default FormButtons;