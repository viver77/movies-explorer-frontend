import React, {useState} from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onChangeCheckbox, checkbox }) {

    const handleChangeCheckbox = () => {
        onChangeCheckbox(!checkbox)
    }

    return (
        <div className='filter-checkbox'>
            <input className="filter-checkbox__input"
                   type="checkbox"
                   name="checkbox"
                   id="checkbox"
                   value={checkbox}
                   onChange={handleChangeCheckbox}
            />
            <label htmlFor="checkbox" className="filter-checkbox__label">Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;

