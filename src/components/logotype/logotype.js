import React from 'react';
import { Link } from 'react-router-dom';
import './logotype.css';
import Logo from '../../images/logo.svg';

function Logotype() {
    return (
        <Link to='/' >
            <img className="logo" alt="логотип" src={Logo}/>
        </Link>

    );
}

export default Logotype;