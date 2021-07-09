import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Spotlight(props) {

    const spotlight = {
        width: "100%",
        height: "280px",
        marginTop: "3rem",

        backgroundPosition: 'right 0px top -700px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("/poster/icarly.jpg")',
    }

    const fg = {
        color: "white",
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(56,39,119, 0.7)',
    }

    const cardBody = {
        maxWidth: '150px',
        marginRight: '30px'
    }

    const spotlightPrice = {
        fontWeight: "700",
        fontSize: "3em",
        lineHeight: "1"
    }

    const spotlightWord = {
        fontWeight: "700",
        fontSize: "2em",
        lineHeight: "1",
        color: "yellow"
    }

    return (
        <div style={spotlight}>
            <div className="d-flex align-items-center justify-content-center" style={fg}>
                <Row>
                    <Col md={3} className="d-flex align-items-center">
                        <div>
                            <div style={spotlightPrice}>$3.99</div>
                            <div style={spotlightWord}>CINEMA</div>
                            <div style={spotlightWord}>SPOTLIGHT</div>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="d-flex flex-row flex-nowrap overflow-auto">
                            <Card style={cardBody}>
                                <img src="/poster/luca.jpg" className="card-img-top" alt="..."/>
                            </Card>
                            <Card style={cardBody}>
                                <img src="/poster/spirit.jpg" className="card-img-top" alt="..."/>
                            </Card>
                            <Card style={cardBody}>
                                <img src="/poster/man.jpg" className="card-img-top" alt="..."/>
                            </Card>
                            <Card style={cardBody}>
                                <img src="/poster/icarly.jpg" className="card-img-top" alt="..."/>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Spotlight
