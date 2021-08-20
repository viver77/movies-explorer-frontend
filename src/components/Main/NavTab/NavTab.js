import React from 'react';
import './NavTab.css';

function NavTab({ navList }) {

    return (
        <nav className="navtab">
            <ul className="navtab__list">
                {navList.map((item) =>
                    <li key={item.id} className="navtab__list-item">
                        <a className='navtab__list-link link' href={item.link}>
                            {item.title}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default NavTab;