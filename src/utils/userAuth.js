
export const BASE_URL = 'https://api.diploma-1.nomoredomains.monster'

const checkResponse = (res) => {return res.ok ? res.json() : Promise.reject(res.status)}

export const register = (password, email, name) => {

    return fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({password, email, name})
        }
    )
        .then(checkResponse)
}

export const authorize = (password, email) => {

    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password, email})

    })
        .then(checkResponse)
}

export const checkToken = (token) => {

    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
        }

    })
        .then(checkResponse)
}