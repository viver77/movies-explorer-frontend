import React from 'react';
import './Portfolio.css';
import {Link} from 'react-router-dom';
import arrow from '../../../images/arrow.svg';

function Portfolio( {PortfolioList} ) {
    return (
        <div className="about-me__portfolio">
            <h3 className="about-me__portfolio-text">Портфолио</h3>
            <ul className='about-me__portfolio-list'>
                {PortfolioList.map((item) =>
                    <li key={item.id} className="about-me__portfolio-list-item">
                        <a className="about-me__portfolio-list-link link" href={item.href} target="_blank">{item.title}</a>
                        <img className="about-me__portfolio-list-icon" alt="логотип" src={arrow}/>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Portfolio;
