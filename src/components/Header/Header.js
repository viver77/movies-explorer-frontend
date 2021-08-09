import React from 'react';
import { Link } from 'react-router-dom';
import account from "../../images/account.svg";
import './Header.css';
import Logotype from '../logotype/logotype';

function Header({ links, loggedIn }) {
    return (
        <header className="header">
           <Logotype />
            <div className="header__wrapper">
                <ul className="header__links-auth">
                    {links.map((item) =>
                        <li key={item.id} className="header__links-auth-item">
                            <Link className={item.className} to={item.link}>
                                {item.title}
                            </Link>
                        </li>
                    )}
                </ul>
                {loggedIn && (
                    <Link className="header__link-profile link" to='/profile'>
                        Аккаунт
                        <img className="header__icon-account" alt="логотип" src={account}/>
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Header;
