import React, {useEffect, useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {BackendUrl} from "../BackendUrl";
import Cookies from "js-cookie";

export default function LoginPage(props) {

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })

    const loginStyle = {
        backgroundColor: "white",
        marginTop: "5rem",
        paddingTop: "5rem",
        paddingBottom: "5rem"
    }

    useEffect(()=>{
        fetch(BackendUrl.DASHBOARD, {
                headers: {
                    Authorization: Cookies.get("dvs_token"),
                }
                // credentials: 'include'
            })

            .then(res=>{
            return res.json();
        }).then(json=>{
            setUserInfo(json.data);
        })
    }, []);

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={10} md={4} style={loginStyle}>
                    <h1>User Dashboard</h1>
                    email: {userInfo.email}<br/>
                    name: {userInfo.firstName} {userInfo.lastName}<br/>

                    {/*<p style={{color: "red"}} className={failMsgVisibility}>{failMsg}</p>*/}
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
