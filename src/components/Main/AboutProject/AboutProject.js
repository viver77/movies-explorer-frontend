import React from 'react';
import './AboutProject.css';
import ProjectChart from '../ProjectChart/ProjectChart'

function AboutProject() {

    const PROJECT_LIST = [
        {
            id: 1,
            title: 'Дипломный проект включал 5 этапов',
            text: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
        },
        {
            id: 2,
            title: 'На выполнение диплома ушло 5 недель',
            text: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
        },
    ]

    const PROJECT_DURATION = [
        {
            id: 1,
            title: '1 неделя',
            text: 'Back-end',
            duration: 1,
            background: 'rgba(43, 224, 128, 1)',
        },
        {
            id: 2,
            title: '4 недели',
            text: 'Front-end',
            duration: 4,
            background: 'rgba(242, 242, 242, 1)',
        },
    ]


    return (
        <section className="about-project" id='about-project'>
            <h2 className="about-project__title" >О проекте</h2>

            <ul className="about-project__list">
                {PROJECT_LIST.map((item) =>
                    <li key={item.id} className="about-project__list-item">
                        <h3 className='about-project__list-title'>{item.title}</h3>
                        <p className='about-project__list-text'>{item.text}</p>
                    </li>
                )}
            </ul>

            <ProjectChart
                ProjectDuration = {PROJECT_DURATION}
            />

        </section>
    );
}

export default AboutProject;