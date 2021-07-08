import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            {/*<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">*/}
                <Link to="/">
                <a className="navbar-brand" href="#">VUDU</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link to="/movie"><a className="nav-link" href="#">Movies <span className="sr-only">(current)</span></a></Link>
                        
                        </li>
                        <li className="nav-item">
                            <Link to="/tv"><a className="nav-link" href="#">TV</a></Link>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <a className="nav-link" href="#">Sign In</a>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default header
