class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }

    createMovie(data) {
        const token = (localStorage.getItem('token'));

        return fetch(this._baseUrl + '/movies', {
            method: 'POST',
            headers: {
                ...this._headers,
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data),
        })
            .then(this._checkResponse)
    }

    deleteMovie(id) {
        const token = (localStorage.getItem('token'));

        return fetch(this._baseUrl + '/movies/' + id, {
            method: 'DELETE',
            headers: {
                ...this._headers,
                'authorization': `Bearer ${token}`
            },
        })
            .then(this._checkResponse)
    }

    getMovies() {
        const token = (localStorage.getItem('token'));

        return fetch(this._baseUrl + '/movies', {
            headers: {
                ...this._headers,
                'authorization': `Bearer ${token}`
            },
        })
            .then(this._checkResponse)
    }

    updateProfileInfo(name, email) {
        const token = (localStorage.getItem('token'));

        return fetch( this._baseUrl + '/users/me', {
            method: 'PATCH',
            headers: {...this._headers,
                'authorization':`Bearer ${token}`},
            body: JSON.stringify({
                name, email
            })
        })
            .then(this._checkResponse)
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
    }

}

const mainApi = new MainApi({baseUrl: 'https://api.diploma-1.nomoredomains.monster',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default mainApi