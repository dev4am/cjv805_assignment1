import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'

function Feature(props) {

    return (
        <>
            <div className="row">
                <div className="col">
                    {props.name}
                </div>
                <div className="col text-right">
                    View More(TODO)
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ListGroup horizontal>
                        {
                            props.list.map(o=>(
                                <ListGroup.Item>
                                    <div className="card">
                                        <img src="p2656407373.webp" class="card-img-top" alt="..."/>
                                    </div>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </div>
            </div>
        </>
    )
}

export default Feature
