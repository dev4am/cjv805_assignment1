import React from 'react'
import {Carousel} from "react-bootstrap";

function Hero() {
    return (
        <Carousel>
            <Carousel.Item>
                <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide"
                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect>
                    <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                </svg>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide"
                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect>
                    <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                </svg>

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide"
                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect>
                    <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                </svg>

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero
