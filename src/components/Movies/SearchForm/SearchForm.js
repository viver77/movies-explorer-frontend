import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import searchLogo from "../../../images/search.svg";

function SearchForm() {

    const SEARCH_FORM = {
        form: 'search-form',
        icon: 'search-form__icon',
        textInput: 'search-form__text-input',
        submitButton: 'search-form__submit-button',
        checkboxInput: 'search-form__checkbox-input',
        checkboxLabel: 'search-form__checkbox-label',
        checkboxSlider: 'search-form__checkbox-slider',
        checkboxOnFocus: 'search-form__checkbox-label_focus'
    };

    return (
        <form
            className="search-form"
        >
            <div className='search-form__wrapper-input'>
                <img className="search-form__search-logo" alt="иконка лупа" src={searchLogo}/>
                <input id="search-form__input"
                       className="search-form__input"
                       type="text"
                       placeholder="Фильм"
                       required
                />
                <button className="search-form__submit"
                        type="submit"
                        name="formSubmit"
                >
                    Найти
                </button>
            </div>

        </form>
    )
}

export default SearchForm;
