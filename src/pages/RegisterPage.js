import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function RegisterPage() {

    const registerStyle = {
        backgroundColor: "white",
        marginTop: "5rem",
        paddingTop: "5rem",
        paddingBottom: "5rem"
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col style={registerStyle}>
                    <form className="form-signin text-center">

                        <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                               required autoFocus/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                               required/>
                        <label htmlFor="inputPassword" className="sr-only">Repeat Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Repeat Password"
                               required/>
                        <div className="checkbox mb-3">

                        </div>
                        <Link to="/login">
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                        </Link>
                        {/*<p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>*/}
                    </form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default RegisterPage
