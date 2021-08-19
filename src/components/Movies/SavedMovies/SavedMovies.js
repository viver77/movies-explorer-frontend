import React, {useEffect, useState} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import mainApi from '../../../utils/MainApi'
import searchFilter from '../../../utils/searchFilter'
import Note from '../../Note/Note'

function SavedMovies() {

    const [noResult, setNoResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [textNote, setTextNote] = useState('');
    const [mainApiResult, setMainApiResult] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    const updateSavedMovies = () => {
        mainApi.getMovies()
            .then(movies => {
                setMainApiResult(movies)
            })
            .catch((err) => {
                setTextNote('Во время запроса произошла ошибка. ' +
                    'Возможно, проблема с соединением или сервер недоступен. ' +
                    'Подождите немного и попробуйте ещё раз')
            })
    }

    const filterSavedMovies = (searchQueries) => {
        const filterResult = searchFilter(searchQueries, mainApiResult);
        filterResult.forEach(item => {item.id = item._id})
        if (filterResult.length===0) {
            setTextNote('Ничего не найдено')
        }
        setIsLoading(false)
        setNoResult(!filterResult.length)
        setFilteredMovies(filterResult)
    }

    useEffect(()=>{
        updateSavedMovies()
    }, [])


    const onRemoveCardLike = (id) => {
        mainApi.deleteMovie(id)
            .then(res => {
                updateSavedMovies()
                setFilteredMovies((state) => state.filter(item => !(item._id === id)))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <section className="movies">
            <SearchForm
                onSubmit={filterSavedMovies}
            />

            {!isLoading && noResult && (
                <Note
                    text={textNote}
                />
            )}

            <MoviesCardList
                cards={filteredMovies}
                onRemoveCardLike={onRemoveCardLike}
            />
        </section>
    );
}

export default SavedMovies;