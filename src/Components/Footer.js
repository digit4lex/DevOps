import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <h1>Don't have an account?</h1>
            <NavLink to="/register" exact={true} activeClassName="is-active">Register here!</NavLink>
        </div>
    )
}

export default Footer