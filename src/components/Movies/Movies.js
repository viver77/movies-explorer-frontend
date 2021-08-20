import React, {useEffect, useState} from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import searchFilter from '../../utils/searchFilter';
import Preloader from '../Preloader/Preloader';
import Note from '../Note/Note';
import * as errorText from '../../constants/errorText';

function Movies() {

    const [isLoading, setIsLoading] = useState(false);
    const [textNote, setTextNote] = useState('');
    const [mainApiResult, setMainApiResult] = useState([]);

    const updateSavedMovies = () => {
        mainApi.getMovies()
            .then(movies => {
                setMainApiResult(movies)
            })
            .catch((err) => {
                setTextNote(errorText.SERVER_ERROR)
            })
    }

    useEffect(()=>{
        updateSavedMovies()
    }, [])

    const [moviesApiResult, setMoviesApiResult] = useState([]);
    const getMovies = (searchQueries) => {
        setTextNote('')
        setIsLoading(true)

        const movieslocalStorage = localStorage.getItem('movies');
        if (movieslocalStorage) {
            const filterResult = searchFilter(searchQueries, JSON.parse(movieslocalStorage));
            setMoviesApiResult(filterResult)
            if (filterResult.length === 0) {
                setTextNote('Ничего не найдено')
            }
            setIsLoading(false)
            return
        }

        moviesApi.getMovies()
            .then(movies => {
                localStorage.setItem('movies', JSON.stringify(movies))
                const filterResult = searchFilter(searchQueries, movies);
                setMoviesApiResult(filterResult)
                if (filterResult.length===0) {
                    setTextNote('Ничего не найдено')
                }
               })
            .catch((err) => {
                setTextNote(errorText.SERVER_ERROR)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }

    const onCardLike = (movie) => {

        delete movie.id;
        delete movie.trailerLink;
        delete movie.created_at;
        delete movie.updated_at;

        mainApi.createMovie(movie)
            .then(res => {
                updateSavedMovies()
            })
            .catch((err) => {
                setTextNote(errorText.SERVER_ERROR)
            })
    }

    const onRemoveCardLike = (id) => {
        mainApi.deleteMovie(id)
            .then(res => {
                console.log(res)
            })
            .catch((err) => {
                setTextNote(errorText.SERVER_ERROR)
            })
    }

    return (
        <section className="movies">
            <SearchForm
                onSubmit={getMovies}
            />

            {!isLoading && (
                <Note
                    text={textNote}
                />
            )}

            {isLoading && (
                <Preloader />
            )}

            <MoviesCardList
                cards={moviesApiResult}
                savedCards={mainApiResult}
                onCardLike={onCardLike}
                onRemoveCardLike={onRemoveCardLike}
            />
        </section>
    );
}

export default Movies;
