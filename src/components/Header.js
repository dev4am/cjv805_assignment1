import React from 'react'

import {
    Link
  } from "react-router-dom";

function header() {

    const bg = {
        backgroundImage: 'linear-gradient(to right, rgba(0,122,194, 1.00), rgba(5,28,43, 0))',
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={bg}>
            {/*<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">*/}
                <Link className="navbar-brand" to="/">
                    Video Store
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/movie">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tv">TV</Link>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <Link className="nav-link" to="/login" style={{color: "white"}}>
                            Sign In
                        </Link>
                        {/*<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>*/}
                        {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default header
