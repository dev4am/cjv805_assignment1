import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function LoginPage() {

    const loginStyle = {
        backgroundColor: "white",
        marginTop: "5rem",
        paddingTop: "5rem",
        paddingBottom: "5rem"
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={10} md={4} style={loginStyle}>
                    <form className="form-signin text-center">

                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                               required autoFocus/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                               required/>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <Link to="/">
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-lg btn-outline-primary btn-block" style={{marginTop: "1rem"}}>Register</button>
                        </Link>
                        {/*<p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>*/}
                    </form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
