import {useState} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import MenuPopup from '../MenuPopup/MenuPopup';

function App() {

    const HEADER_LINKS_AUTH = [
        {
            id: 1,
            title: 'Регистрация',
            link: '/signup',
            className: 'header__links-auth-link link',
        },
        {
            id: 2,
            title: 'Войти',
            link: '/signin',
            className: 'header__links-auth-link header__links-auth-link_bgcolor_green link',
        },
    ];

    const HEADER_LINKS_MOVIES = [
        {
            id: 1,
            title: 'Фильмы',
            link: '/movies',
            className: 'header__links-movies-link link',
        },
        {
            id: 2,
            title: 'Сохраненные фильмы',
            link: '/saved-movies',
            className: 'header__links-saved-movies-link link',
        },
    ];

    const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false)

    const handleMenuPopupClick = () => {
        setIsMenuPopupOpen(true)
    }

    const closeAllPopups = () => {
        setIsMenuPopupOpen(false)
    }


    return (
        <div className="App">
            <div className="page">
                <div className="page__container">
                    <Switch>
                        <Route
                            exact
                            path="/"
                        >
                            <Header
                                links={HEADER_LINKS_AUTH}
                                loggedIn={false}
                            />
                            <Main/>
                            <Footer/>
                        </Route>
                        <Route
                            exact
                            path="/movies"
                        >
                            <Header
                                links={HEADER_LINKS_MOVIES}
                                loggedIn={true}
                                onEditMenu={handleMenuPopupClick}
                            />
                            <Movies/>
                            <Footer/>
                        </Route>
                        <Route
                            path="/saved-movies"
                        >
                            <Header
                                links={HEADER_LINKS_MOVIES}
                                loggedIn={true}
                                onEditMenu={handleMenuPopupClick}
                            />
                            <SavedMovies />
                            <Footer/>
                        </Route>
                        <Route
                            exact
                            path="/signup"
                        >
                            <Register/>
                        </Route>
                        <Route
                            exact
                            path="/signin"
                        >
                            <Login/>
                        </Route>
                        <Route
                            exact
                            path="/profile"
                        >
                            <Header
                                links={HEADER_LINKS_MOVIES}
                                loggedIn={true}
                                onEditMenu={handleMenuPopupClick}
                            />
                            <Profile />
                        </Route>
                        <Route path="*">
                            {/*<Redirect to="/"/>*/}
                            <NotFound />
                        </Route>
                    </Switch>

                    <MenuPopup
                        isOpen={isMenuPopupOpen}
                        onClose={closeAllPopups}
                        links={HEADER_LINKS_MOVIES}
                        loggedIn={true}
                    />

                </div>
            </div>
        </div>
    );
}

export default App;
