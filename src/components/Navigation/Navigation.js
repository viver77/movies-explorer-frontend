import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';
import account from '../../images/account.svg';

function Navigation({ links, classes,  loggedIn, onClose }) {

    return (
        <>
            <ul className={classes.classNameLinks}>
                {links.map((item) =>
                    <li key={item.id} className={classes.classNameLinksItem} onClick={onClose}>
                        <Link className={item.className} to={item.link}>
                            {item.title}
                        </Link>
                    </li>
                )}
            </ul>
            {loggedIn && (
                <Link className={`${classes.classNameLinkProfile} link`} to='/profile' onClick={onClose}>
                    Аккаунт
                    <img className="header__icon-account" alt="логотип" src={account}/>
                </Link>
            )}
        </>
    )
}

export default Navigation