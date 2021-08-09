import React from 'react'
import './Footer.css';

function Footer() {

    const FOOTER_LINKS = [
        {
            id: 1,
            title: 'Яндекс.Практикум',
            href: 'https://praktikum.yandex.ru/',
        },
        {
            id: 2,
            title: 'Github',
            href: 'https://github.com/',
        },
        {
            id: 3,
            title: 'Facebook',
            href: 'https://www.facebook.com/',
        },
    ]

    return (
        <footer className="footer">
            <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className='footer__wrapper'>
                <p className="footer__copyright">© 2020</p>

                <nav className="footer__nav-links">
                    <ul className="footer__links">
                        {FOOTER_LINKS.map((item) =>
                            <li key={item.id} className="footer__links-item">
                                <a className='footer__links-link link' href={item.href} target="_blank">
                                    {item.title}
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>

            </div>
        </footer>
    );
}

export default Footer;
