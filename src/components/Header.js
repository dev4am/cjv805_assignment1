import React, {useEffect, useState} from 'react'

import {
    Link
  } from "react-router-dom";
import Cookies from "js-cookie";

function Header(props) {

    const [menu, setMenu] = useState("");

    const bg = {
        backgroundImage: 'linear-gradient(to right, rgba(0,122,194, 1.00), rgba(5,28,43, 0))',
    }

    const toggleMenu = ()=>{
        if(menu==="show"){
            setMenu("");
        }else{
            setMenu("show");
        }
    }

    const handleLogout = ()=>{
        // console.log("logout");
        Cookies.remove("dvs_token");
        props.setLoginState(false);
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={bg}>
            {/*<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">*/}
                <Link className="navbar-brand" to="/">
                    Video Store
                </Link>
                <button className="navbar-toggler" type="button" onClick={ toggleMenu }>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse "+menu} id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/movie" onClick={ toggleMenu }>Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tv" onClick={ toggleMenu }>TV</Link>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <Link className={`nav-link ${props.loginState?'invisible':''}`} to="/login" onClick={ toggleMenu } style={{color: "white"}}>
                            Log In
                        </Link>

                        <a className={`nav-link ${props.loginState?'':'invisible'}`} style={{color: "white"}} onClick={handleLogout}>Log out</a>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default Header
