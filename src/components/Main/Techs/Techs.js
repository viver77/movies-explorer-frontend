import React from 'react';
import './Techs.css';

function Techs() {

    const TECHS_LIST = [
        {
            id: 1,
            title: 'HTML',
        },
        {
            id: 2,
            title: 'CSS',
        },
        {
            id: 3,
            title: 'JS',
        },
        {
            id: 4,
            title: 'React',
        },
        {
            id: 5,
            title: 'Git',
        },
        {
            id: 6,
            title: 'Express.js',
        },
        {
            id: 7,
            title: 'mongoDB',
        },
    ]

    return (
        <section className="techs" id='technologies'>
            <h2 className="techs__title">Технологии</h2>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

            <ul className="techs__list">
                {TECHS_LIST.map((item) =>
                    <li key={item.id} className="techs__list-item">
                        <h3 className='techs__list-title'>{item.title}</h3>
                    </li>
                )}
            </ul>

        </section>
    );
}

export default Techs;