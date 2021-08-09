import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab'

function Promo() {

    const NAV_LIST = [
        {
            id: 1,
            title: 'О проекте',
            link: '#about-project',
        },
        {
            id: 2,
            title: 'Технологии',
            link: '#technologies',
        },
        {
            id: 3,
            title: 'Студент',
            link: '#student',
        },
    ]

    return (
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <NavTab navList={NAV_LIST}/>
        </section>
    );
}

export default Promo;