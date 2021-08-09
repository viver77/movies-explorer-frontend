import React from 'react';
import photo from "../../../images/photo.jpg";
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio'

function AboutMe() {

    const SOCIAL_LIST = [
        {
            id: 1,
            title: 'Facebook',
            href: 'https://www.facebook.com/',
        },
        {
            id: 2,
            title: 'Github',
            href: 'https://github.com/',
        },
        ]

    const PORTFOLIO_LIST = [
        {
            id: 1,
            title: 'Статичный сайт',
            href: 'https://github.com/viver77/how-to-learn',
        },
        {
            id: 2,
            title: 'Адаптивный сайт',
            href: 'https://github.com/viver77/russian-travel',
        },
        {
            id: 3,
            title: 'Одностраничное приложение',
            href: 'https://github.com/viver77/express-mesto',
        },
    ]

    return (
        <section className='about-me' id='student'>
            <h2 className="about-me__title">Студент</h2>
            <article className='about-me__wrapper'>
                <div className='about-me__description'>
                    <h3 className='about-me__description-title'>Виталий</h3>
                    <h4 className='about-me__description-subtitle'>Фронтенд-разработчик, 30 лет</h4>
                    <p className='about-me__description-text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <ul className="about-me__list">
                        {SOCIAL_LIST.map((item) =>
                            <li key={item.id} className="about-me__list-item">
                                <a className='about-me__list-link link' href={item.href} target="_blank">{item.title}</a>
                            </li>
                        )}
                    </ul>
                </div>
                <img className='about-me__photo' src={photo} alt="фотография студента"/>
            </article>
            <Portfolio
                PortfolioList={PORTFOLIO_LIST}
            />

        </section>
    );
}

export default AboutMe;