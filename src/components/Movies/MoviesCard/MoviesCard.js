import React, {useState} from 'react';
import './MoviesCard.css';
import poster from '../../../images/movie.svg';
import CardButton from '../CardButton/CardButton';

function MoviesCard ({ card, locationPath }) {

    const [isLiked, setIsLiked] = useState();

    function handleLikeClick() {
        setIsLiked(!isLiked)
    }

    function handleDeleteCard() {

    }

    const handleClick = locationPath === '/movies' ? handleLikeClick: handleDeleteCard;

    return (
        <li className="elements__item card">
            <div className="card__header">
                <div className="card__wrapper">
                    <h2 className="card__title">{card.title}</h2>
                    <p className="card__duration">{card.duration}</p>
                </div>
                <CardButton
                    onClick={handleClick}
                    locationPath={locationPath}
                    isLiked={isLiked}
                />
            </div>
            <img className="card__image" src={poster} alt={card.name} />
        </li>
    )
}

export default MoviesCard