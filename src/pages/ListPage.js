import React, {useEffect, useState} from 'react'
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function ListPage(props) {

    const [dataList, setDataList] = useState([]);

    useEffect(()=>{
        let url = props.type==='movie'?'movieList':'tvList'
        fetch("http://localhost:5000/"+url).then(res=>{
            return res.json();
        }).then(json=>{
            setDataList(json);
        })
    }, []);

    return (
        <Container>
            <Row style={{'paddingTop':'1.5rem', 'marginBottom':'1.5rem'}}>
                <Col>
                    {/*<div className="btn-group" role="group" aria-label="Basic example">*/}
                    {/*    <button type="button" className="btn btn-primary">Most Watched</button>*/}
                    {/*    <button type="button" className="btn btn-outline-primary">Released Date</button>*/}
                    {/*    <button type="button" className="btn btn-outline-primary">Recently Added</button>*/}
                    {/*</div>*/}
                </Col>
            </Row>
            <Row>
                {
                    dataList.map(d=>(
                        <Col key={d.id} xs={6} md={2} style={{'marginBottom': '1.5rem' }}>
                            <Link to={`/${props.type}/${d.id}`}>
                                <Card>
                                    <Card.Img variant="top" src={d.poster_small} />
                                    <Card.Body style={{ padding: '.5rem'}}>
                                        <Card.Title className="text-truncate" style={{ 'marginBottom': '.5rem'}}>{d.name}</Card.Title>
                                        <Card.Text>
                                            {d.year}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
            {/*<Row>*/}
            {/*    <Pagination>*/}
            {/*        <Pagination.Item>{1}</Pagination.Item>*/}
            {/*        <Pagination.Item>{2}</Pagination.Item>*/}
            {/*        <Pagination.Item>{3}</Pagination.Item>*/}
            {/*        <Pagination.Item>{4}</Pagination.Item>*/}
            {/*        <Pagination.Item>{5}</Pagination.Item>*/}
            {/*    </Pagination>*/}
            {/*</Row>*/}

        </Container>
    )
}

export default ListPage
