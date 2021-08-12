import React from 'react';
import './CardButton.css';

function CardButton ({ locationPath, onClick, isLiked }) {

    let className = '';

    if (locationPath === '/movies') {
        if (isLiked) {
            className = 'card__like-btn_active'
        } else className = 'card__like-btn'
    } else className = 'card__delete-btn'

    return (
        <button className={'card-btn ' + className}
                type="button"
                aria-label="действие кнопки"
                onClick={onClick}
        />
    )
}

export default CardButton;