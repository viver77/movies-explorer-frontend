import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {

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

export default SavedMovies;