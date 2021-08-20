import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import Logotype from '../logotype/logotype';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn, onEditMenu }) {

    const location = useLocation();

    if (!(location.pathname === '/' || location.pathname === '/movies'
        || location.pathname === '/saved-movies' || location.pathname === '/profile')) {
        return null
    }

    const getLinks = () => {
        if (location.pathname === '/' && !isLoggedIn) {
            return [
                {
                    id: 1,
                    title: 'Регистрация',
                    link: '/signup',
                    className: 'header__links-link link',
                },
                {
                    id: 2,
                    title: 'Войти',
                    link: '/signin',
                    className: 'header__links-link header__links-link_bgcolor_green link',
                },
            ]
        } else {
            return [
                {
                    id: 1,
                    title: 'Фильмы',
                    link: '/movies',
                    className: 'header__links-movies-link link',
                },
                {
                    id: 2,
                    title: 'Сохраненные фильмы',
                    link: '/saved-movies',
                    className: 'header__links-saved-movies-link link',
                },
            ]
        }
    }

    const links = getLinks();

    const isBurgerMenu = (location.pathname === '/movies' || location.pathname === '/saved-movies'
        || location.pathname === '/profile' || (isLoggedIn && location.pathname === '/'));

    const LIST_OF_CLASSES =
        {
            classNameLinks: 'header__links',
            classNameLinksItem: 'header__links-item',
            classNameLinkProfile: 'header__link-profile',
        }

    return (
        <header className="header">
            <Logotype/>
            <div className={`header__wrapper ${isBurgerMenu && 'header__wrapper-mobile'}`}>
                <Navigation links={links} classes={LIST_OF_CLASSES} isLoggedIn={isLoggedIn}/>
            </div>
            {isBurgerMenu && (
                <button className="header__menu-btn" onClick={onEditMenu}/>
            )}
        </header>
    );
}

export default Header;
