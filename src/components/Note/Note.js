import React from 'react';
import './Note.css';

const Note = ({ text }) => {
    return (
        <div className="note">
            <div className="note__container">
                <h2 className="note__title">{text}</h2>
            </div>
        </div>
    )
};

export default Note;
