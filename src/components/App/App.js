import {useEffect, useState} from 'react';
import { Route, Switch, useHistory} from 'react-router-dom';
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
import * as userAuth from "../../utils/userAuth";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';

function App() {

    const history = useHistory();

    const [currentUser, setCurrentUser] = useState({
            name: '',
            email: '',
            id: '',
        }
    )

    const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

    const handleMenuPopupClick = () => {
        setIsMenuPopupOpen(true)
    }

    const closeAllPopups = () => {
        setIsMenuPopupOpen(false)
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onSignup = ({password, email, name}) => {
        userAuth.register(password, email, name)
            .then(res => {
                onSignIn({password, email})
            })
            .catch(err => {
                console.log(err);
                alert('Что-то пошло не так! Попробуйте еще раз.')
            })
    }

    const onSignIn = ({password, email}) => {
        userAuth.authorize(password, email)
            .then(res => {
                const {token, name, email, id} = res
                localStorage.setItem('token', token)
                setIsLoggedIn(true)
                setCurrentUser({ name, email, id })
                history.push('/movies')
            })
            .catch(err => {
                console.log(err);
                alert('Что-то пошло не так! Попробуйте еще раз.')
            })
    }

    const signOut = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false)
        history.push('/')
    }

    const checkToken = () => {
        const token = localStorage.getItem('token')
        if (token) {
            userAuth.checkToken(token)
                .then(res=>{
                    setIsLoggedIn(true)
                    const {name, email} = res
                    setCurrentUser({ name, email })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const onUpdateProfileInfo = (name, email) => {
        mainApi.updateProfileInfo(name, email)
            .then(res => {
                setCurrentUser({ name, email })
                alert('Данные аккаунта обновлены')
            })
            .catch((err) => {
                alert('Во время запроса произошла ошибка. ' +
                    'Возможно, проблема с соединением или сервер недоступен. ' +
                    'Подождите немного и попробуйте ещё раз')
            })
    }

    useEffect(()=>{
        checkToken();
    },[])

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <div className="page">
                    <div className="page__container">
                        <Header
                            isLoggedIn={isLoggedIn}
                            onEditMenu={handleMenuPopupClick}
                        />
                        <Switch>
                            <Route
                                exact
                                path="/"
                            >
                                <Main/>
                            </Route>
                            <ProtectedRoute
                                path="/movies"
                                isLoggedIn={isLoggedIn}
                                component={Movies}
                                checkToken={checkToken}
                            />
                            <ProtectedRoute
                                path="/saved-movies"
                                isLoggedIn={isLoggedIn}
                                component={SavedMovies}
                            />
                            <Route
                                path="/signup"
                            >
                                <Register
                                    onSignup={onSignup}
                                />
                            </Route>
                            <Route
                                path="/signin"
                            >
                                <Login
                                    onSignin={onSignIn}
                                />
                            </Route>
                            <ProtectedRoute
                                path="/profile"
                                isLoggedIn={isLoggedIn}
                                signOut={signOut}
                                component={Profile}
                                onUpdateProfileInfo={onUpdateProfileInfo}
                            />
                            <Route path="*">
                                <NotFound/>
                            </Route>
                        </Switch>

                        <Footer/>

                        <MenuPopup
                            isOpen={isMenuPopupOpen}
                            onClose={closeAllPopups}
                            loggedIn={true}
                        />

                    </div>
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
