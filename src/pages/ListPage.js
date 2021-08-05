import React, {useEffect, useState} from 'react'
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BackendUrl} from "../BackendUrl";

function ListPage(props) {

    const [dataList, setDataList] = useState([]);

    const [searchForm, setSearchForm] = useState({
        type: props.type,
        q: ""
    });

    useEffect(()=>{
        let url = BackendUrl.ALL_TV;
        if(props.type==='movie'){
            url = BackendUrl.ALL_MOVIE;
        }
        fetch(url).then(res=>{
            return res.json();
        }).then(json=>{
            setDataList(json.data);
        })
    }, []);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let url = BackendUrl.SEARCH;
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(searchForm)
        });
        const resJson = await res.json();
        console.log(res.status);
        if(res.status==200){
            setDataList(resJson.data); //TODO no data
        }
    }

    return (
        <Container>
            <Row style={{'paddingTop':'1.5rem', 'marginBottom':'1.5rem'}}>
                <Col>
                    {/*<div className="btn-group" role="group" aria-label="Basic example">*/}
                    {/*    <button type="button" className="btn btn-primary">Most Watched</button>*/}
                    {/*    <button type="button" className="btn btn-outline-primary">Released Date</button>*/}
                    {/*    <button type="button" className="btn btn-outline-primary">Recently Added</button>*/}
                    {/*</div>*/}
                    <form onSubmit={handleSubmit}>
                        <input className="" value={searchForm.q} onChange={e => setSearchForm({...searchForm, q: e.target.value})}/>
                        <button className="" type="submit">search</button>
                    </form>
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
