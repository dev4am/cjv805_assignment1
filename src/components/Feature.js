import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function Feature(props) {

    const cardBody = {
        maxWidth: '200px',
        marginRight: '5px'
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <h3 style={{color: "white"}}>{props.name}</h3>
                </div>
                {/*<div className="col text-right">*/}
                {/*    View More(TODO)*/}
                {/*</div>*/}
            </div>
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-row flex-nowrap overflow-auto">
                        {
                            props.list.map(o=>(
                                <Card style={cardBody}>
                                    <Link to={"/"+props.type+"/"+o.id}>
                                        <img src={o.poster} className="card-img-top" alt="..."/>
                                    </Link>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature
