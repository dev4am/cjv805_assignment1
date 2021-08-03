import React, {useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {BackendUrl} from "../BackendUrl";

export default function LoginPage(props) {

    const history = useHistory();

    const loginStyle = {
        backgroundColor: "white",
        marginTop: "5rem",
        paddingTop: "5rem",
        paddingBottom: "5rem"
    }

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const [failMsgVisibility, setFailMsgVisibility] = useState("invisible");
    const [failMsg, setFailMsg] = useState("");

    const handleFieldChange = (data) => {
        setFailMsgVisibility("invisible");
        setLoginForm(data);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let url = BackendUrl.LOGIN;
        const res = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginForm) // body data type must match "Content-Type" header
        });
        const resJson = await res.json();
        console.log(res.status);
        if(res.status!=200){
            setFailMsgVisibility("visible");
            setFailMsg(resJson.msg);
        }else{
            props.setLoginState(true);
            history.push("/");
        }
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={10} md={4} style={loginStyle}>
                    <form className="form-signin text-center" onSubmit={handleSubmit}>

                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                               required autoFocus value={loginForm.email} onChange={e => handleFieldChange({...loginForm, email: e.target.value})}/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                               required value={loginForm.password} onChange={e => handleFieldChange({...loginForm, password: e.target.value})}/>
                        <div>
                            &nbsp;
                        </div>

                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <Link to="/register">
                            <button className="btn btn-lg btn-outline-primary btn-block" style={{marginTop: "1rem"}}>Register</button>
                        </Link>
                        {/*<p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>*/}
                    </form>
                    <p style={{color: "red"}} className={failMsgVisibility}>{failMsg}</p>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
