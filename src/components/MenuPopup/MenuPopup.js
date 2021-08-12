import React from 'react';
import './MenuPopup.css';
import Navigation from '../Navigation/Navigation';

function MenuPopup({ isOpen, onClose, links, loggedIn }) {

    const LIST_OF_CLASSES =
        {
            classNameLinks: 'menu-mobile__links',
            classNameLinksItem: 'menu-mobile__links-item',
            classNameLinkProfile: 'menu-mobile__link-profile',
        }

        if (isOpen && links.find(item=> item.id === 3) === undefined) {
            links.unshift(
                {
                    id: 3,
                    title: 'Главная',
                    link: '/',
                    className: 'header__links-movies-link link',
                }
            )
        }

    return (
        <div className={`popup popup-menu ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <div className='menu-mobile'
                >
                   <Navigation
                       links={links}
                       classes={LIST_OF_CLASSES}
                       loggedIn={loggedIn}
                       onClose={onClose}
                   />
                </div>
                <button
                    className="popup__close-btn"
                    onClick={onClose}
                    type="button"
                    aria-label="закрыть форму меню"></button>
            </div>
        </div>
    )
}

export default MenuPopup