import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ isLoggedIn, component: Component, ...props }) => {

    return (
        <Route>
            {() => isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
            }
        </Route>
    )
}

export default ProtectedRoute;