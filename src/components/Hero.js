import React from 'react'
import {Card, Carousel} from "react-bootstrap";

function Hero() {

    const carousel = {
        color: "white",
        width: "100%",
        height: "400px",
        // backgroundColor: 'rgba(38,179,170)',
        backgroundImage: 'linear-gradient(to right, rgba(38,179,170, 1.00), rgba(0,49,133, 1))',
    }

    const carousel1 = {
        color: "white",
        width: "100%",
        height: "400px",
        backgroundImage: 'linear-gradient(to right, rgba(255,207,67, 1.00), rgba(255,117,0, 1))',
    }

    const cardBody = {
        maxWidth: '100px',
        marginRight: '20px'
    }

    return (
        <Carousel>
            <Carousel.Item style={carousel} className="d-flex align-items-center justify-content-center">
                <div>
                <div className="d-flex align-items-center justify-content-center">
                    <h1>4K UHD</h1>
                </div>
                <div className="d-flex align-items-center justify-content-center">
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
                    <Card style={cardBody}>
                        <img src="/poster/war.jpg" className="card-img-top" alt="..."/>
                    </Card>
                    <Card style={cardBody}>
                        <img src="/poster/doctor.jpg" className="card-img-top" alt="..."/>
                    </Card>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <h3>3 Films for $14.99</h3>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item style={carousel1} className="d-flex align-items-center justify-content-center">
                <div>
                    <div className="d-flex align-items-center justify-content-center">
                        <h1>ANIMATION SALE</h1>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={cardBody}>
                            <img src="/poster/spirit.jpg" className="card-img-top" alt="..."/>
                        </Card>
                        <Card style={cardBody}>
                            <img src="/poster/record.jpg" className="card-img-top" alt="..."/>
                        </Card>
                        <Card style={cardBody}>
                            <img src="/poster/luca.jpg" className="card-img-top" alt="..."/>
                        </Card>
                        <Card style={cardBody}>
                            <img src="/poster/boss.jpg" className="card-img-top" alt="..."/>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <h3>25% OFF Movies & TV Shows</h3>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero
