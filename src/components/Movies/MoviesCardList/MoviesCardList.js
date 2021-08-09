import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import CardButton from '../CardButton/CardButton';

function MoviesCardList( {cards} ) {

    const location = useLocation();

    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__cards">
                {cards.map(card =>
                    (
                        <MoviesCard
                            key={card.id}
                            card={card}
                            locationPath = {location.pathname}
                        />
                    )
                )}
            </ul>
            {location.pathname === '/movies' && (
                <div className="movies-card-list__wrapper-more-btn">
                    <button className=" movies-card-list__more-btn" type=" button" aria-label=" загрузить еще">
                        Еще
                    </button>
                </div>
                    )

            }

        </section>
    );
}

export default MoviesCardList;