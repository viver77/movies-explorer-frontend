import React, {useState} from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import searchLogo from "../../../images/search.svg";

function SearchForm({ onSubmit }) {

    const [keyword, setKeyword] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const handleChangeKeyword = (evt) => {
        setKeyword(evt.target.value)
    }

    const handleChangeCheckbox = (value) => {
        setCheckbox(value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        onSubmit(
            {
                search: keyword,
                shortfilm: checkbox
            }
        )
    }

    return (
        <form
            className="search-form"
            onSubmit={handleSubmit}
        >
            <div className='search-form__wrapper-input'>
                <img className="search-form__search-logo" alt="иконка лупа" src={searchLogo}/>
                <input id="search-form__input"
                       className="search-form__input"
                       value={keyword}
                       onChange={handleChangeKeyword}
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

            <FilterCheckbox
                checkbox={checkbox}
                onChangeCheckbox={handleChangeCheckbox}
            />

        </form>
    )
}

export default SearchForm;
