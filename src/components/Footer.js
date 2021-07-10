import React from 'react'
import {Container} from "react-bootstrap";

function Footer() {

    const footerStyle = {
        backgroundColor: "rgb(5,28,43)",
        color: "white",
        // marginTop: "0",
    }

    return (
        <footer className="pt-4 pt-md-5 border-top" style={footerStyle}>
            <Container>
            <div className="row">
                <div className="col-6 col-md">
                    <h5>APP</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Apple</a></li>
                        <li><a className="text-muted" href="/">Android</a></li>
                        <li><a className="text-muted" href="/">Desktop</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Watch</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Movies</a></li>
                        <li><a className="text-muted" href="/">TV Show</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>My Account</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Account</a></li>
                        <li><a className="text-muted" href="/">Setting</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Team</a></li>
                        <li><a className="text-muted" href="/">Locations</a></li>
                        <li><a className="text-muted" href="/">Privacy</a></li>
                        <li><a className="text-muted" href="/">Terms</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Social Media</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Facebook</a></li>
                        <li><a className="text-muted" href="/">Instagram</a></li>
                        <li><a className="text-muted" href="/">Twitter</a></li>
                        <li><a className="text-muted" href="/">Youtube</a></li>
                    </ul>
                </div>
            </div>
            </Container>
        </footer>
    )
}

export default Footer
