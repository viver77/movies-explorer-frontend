import React from 'react';
import './CardButton.css';

function CardButton ({ locationPath }) {

    const className = locationPath ==='/movies' ? 'card__like-btn' : 'card__delete-btn';

    return (<button className={'card-btn ' + className} type="button"
                    aria-label="действие кнопки"></button>)
}

export default CardButton;