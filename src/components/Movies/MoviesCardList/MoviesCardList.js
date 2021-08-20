import React, {useEffect, useRef, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import CardButton from '../CardButton/CardButton';
import searchFilter from '../../../utils/searchFilter';

function MoviesCardList( {cards, searchQueries, onCardLike, savedCards, onRemoveCardLike} ) {

    const location = useLocation();
    const [movies, setMovies] = useState([]);

    const returnSplice = () => {

        const clientWidth = document.documentElement.clientWidth;

        if (clientWidth >= 1280) {
            return  {
                firstSplice: 12,
                nextSplice: 3
            }
        } else if (clientWidth >= 768) {
            return  {
                firstSplice: 8,
                nextSplice: 2
            }
        } else
            return {
                firstSplice: 5,
                nextSplice: 2
            }
    }

    const downloadMore = () => {
        const splice = returnSplice();

        const array = []
        setMovies(array.concat(movies, cards.splice(0,splice.nextSplice)))
    }

    useEffect(() => {
        if (location.pathname === '/movies') {
            const splice = returnSplice();
            const array = cards.splice(0, splice.firstSplice);
            setMovies(array)
        } else {
            setMovies(cards)
        }
    }, [cards])

    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__cards">
                {movies.map(card =>
                    (
                        <MoviesCard
                            key={card.id}
                            card={card}
                            locationPath = {location.pathname}
                            onCardLike={onCardLike}
                            owner={card.owner}
                            savedCards={savedCards}
                            onRemoveCardLike={onRemoveCardLike}
                        />
                    )
                )}
            </ul>
            {location.pathname === '/movies' && cards.length>0 && (
                <div className="movies-card-list__wrapper-more-btn">
                    <button
                        className=" movies-card-list__more-btn"
                        type=" button"
                        aria-label=" загрузить еще"
                        onClick={downloadMore}
                    >
                        Еще
                    </button>
                </div>
                    )
            }
        </section>
    );
}

export default MoviesCardList;