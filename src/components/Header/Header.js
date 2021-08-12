import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import account from "../../images/account.svg";
import './Header.css';
import Logotype from '../logotype/logotype';
import Navigation from '../Navigation/Navigation';

function Header({ links, loggedIn, onEditMenu }) {

    const location = useLocation();

    const isBurgerMenu= (location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile');

    const LIST_OF_CLASSES =
        {
            classNameLinks: 'header__links',
            classNameLinksItem: 'header__links-item',
            classNameLinkProfile: 'header__link-profile',
        }

    return (
        <header className="header">
           <Logotype />
            <div className={`header__wrapper ${isBurgerMenu && 'header__wrapper-mobile'}`}>
                <Navigation links={links} classes={LIST_OF_CLASSES} loggedIn={loggedIn}/>
            </div>
            {isBurgerMenu && (
                <button className="header__menu-btn" onClick={onEditMenu}/>
            )}
        </header>
    );
}

export default Header;
