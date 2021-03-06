import React, {useEffect, useState} from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {BackendUrl} from "../BackendUrl";

function DetailPage(props) {

    const [data, setData] = useState({
        name: ""
    });
    const {id} = useParams();

    useEffect(()=>{
        let url = BackendUrl.VIDEO_DETAIL + '/' + id;
        fetch(url).then(res=>{
            return res.json();
        }).then(json=>{
            setData(json.data);
        })
    }, []);

    // const customBg = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    // };

    const bg = {
        backgroundColor: 'rgb(5,28,43)',
        backgroundPosition: 'right -500px top -600px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(' + data.poster_big + ')',
    }

    const fg = {
        paddingTop: '5rem',
        paddingBottom: '5rem',
        color: 'white',
        backgroundImage: 'linear-gradient(to right, rgba(5,28,43, 1.00) 60%, rgba(5,28,43, 0) 100%)',
    }

    return (
        <div style={bg}>
        <Container style={fg}>
            <Row>
                <Col md={3}>
                    <Image width={'100%'} src={data.poster_small}/>
                </Col>
                <Col>
                    <h1 className="display-4">{data.name}({data.year})</h1>
                    <span>{data.tags} | {data.length}</span>

                    <h5 style={{marginTop: "2rem"}}>Overview</h5>
                    <p className="lead">{data.overview}</p>
                    <h5 style={{marginTop: "2rem"}}>{data.director}</h5>
                    <span>Director</span>
                    <hr className="my-4"/>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Rent(${data.price_rent})</a>
                    <a className="btn btn-primary btn-lg" href="#" role="button" style={{marginLeft: '1rem'}}>Buy(${data.price_buy})</a>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default DetailPage
