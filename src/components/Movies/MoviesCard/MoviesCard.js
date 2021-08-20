import React, {useContext, useState} from 'react';
import './MoviesCard.css';
import CardButton from '../CardButton/CardButton';
import {CurrentUserContext} from '../../../contexts/CurrentUserContext';

function MoviesCard ({ card, locationPath, onCardLike, owner, savedCards, onRemoveCardLike }) {

    const [isLiked, setIsLiked] = useState( !(locationPath === '/saved-movies')
        && !(savedCards.find(movie => movie.movieId === card.id) === undefined));

    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return `${hours}ч ${minutes}м`;
    };

    function handleLikeClick() {

        if (isLiked) {
            handleRemoveCard(savedCards.find(movie => movie.movieId === card.id)._id);
            setIsLiked(false)
            return
        }

        const movieId = card.id;
        const trailerLink = card.trailerLink;

        onCardLike({
            ...card,
            movieId: movieId,
            trailer: trailerLink,
            image: 'https://api.nomoreparties.co' + card.image.url,
            thumbnail: 'https://api.nomoreparties.co' + card.image.url,
        })
        setIsLiked(true)
    }

    function handleRemoveCard(id) {
        onRemoveCardLike(typeof id === 'string' ? id : card._id )
    }

    const handleClick = locationPath === '/movies' ? handleLikeClick : handleRemoveCard;
    const imageUrl = locationPath === '/movies' ? 'https://api.nomoreparties.co' + card.image.url : card.image;

    return (
        <li className="elements__item card">
            <div className="card__header">
                <div className="card__wrapper">
                    <h2 className="card__title">{card.nameRU}</h2>
                    <p className="card__duration">{getTimeFromMins(card.duration)}</p>
                </div>
                <CardButton
                    onClick={handleClick}
                    locationPath={locationPath}
                    isLiked={isLiked}
                />
            </div>
            <a href={card.trailerLink} target={'_blank'}>
                <img
                    className="card__image"
                    src={imageUrl}
                    alt={card.nameRU}
                />
            </a>
        </li>
    )
}

export default MoviesCard