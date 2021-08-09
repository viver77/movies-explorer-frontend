import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {

    const CARDS = [
        {
            id: 1,
            title: '33 слова о дизайне',
            duration: '1ч 47м',
            link: ''
        },
        {
            id: 2,
            title: '33 слова о дизайне',
            duration: '1ч 47м',
            link: ''
        },
        {
            id: 3,
            title: '33 слова о дизайне',
            duration: '1ч 47м',
            link: ''
        },
        {
            id: 4,
            title: '33 слова о дизайне',
            duration: '1ч 47м',
            link: ''
        },
        {
            id: 5,
            title: '33 слова о дизайне',
            duration: '1ч 47м',
            link: ''
        },
        {
            id: 6,
            title: '33 слова о дизайне',
            duration: '1ч 47м',
            link: ''
        },
        ]
    ;

    return (
        <section className="movies">
            <SearchForm />
            <FilterCheckbox/>
            <MoviesCardList cards={CARDS} />
        </section>
    );
}

export default Movies;