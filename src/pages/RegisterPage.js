import React, {useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {BackendUrl} from "../BackendUrl";

function RegisterPage() {

    const history = useHistory();

    const [registerForm, setRegisterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [failMsgVisibility, setFailMsgVisibility] = useState("invisible");
    const [failMsg, setFailMsg] = useState("");

    const registerStyle = {
        backgroundColor: "white",
        marginTop: "5rem",
        paddingTop: "5rem",
        paddingBottom: "5rem"
    }

    const handleFieldChange = (data) => {
        setFailMsgVisibility("invisible");
        setRegisterForm(data);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let url = BackendUrl.REGISTER;
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerForm) // body data type must match "Content-Type" header
        });
        const resJson = await res.json();
        console.log(res.status);
        if(res.status!=200){
            // alert(resJson.msg);
            setFailMsgVisibility("visible");
            setFailMsg(resJson.msg);
        }else{
            history.push("/login");
        }
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={10} md={4} style={registerStyle}>
                    <form className="form-signin text-center" onSubmit={handleSubmit}>

                        <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
                        <label htmlFor="inputFirstName" className="sr-only">First Name</label>
                        <input type="text" id="inputFirstName" className="form-control" placeholder="First Name"
                               required autoFocus value={registerForm.firstName} onChange={e => handleFieldChange({...registerForm, firstName: e.target.value})}/>
                        <label htmlFor="inputLastName" className="sr-only">Last Name</label>
                        <input type="text" id="inputLastName" className="form-control" placeholder="Last Name"
                               required value={registerForm.lastName} onChange={e => handleFieldChange({...registerForm, lastName: e.target.value})}/>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                               required autoFocus value={registerForm.email} onChange={e => handleFieldChange({...registerForm, email: e.target.value})}/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                               required value={registerForm.password} onChange={e => handleFieldChange({...registerForm, password: e.target.value})}/>
                        <label htmlFor="inputPassword" className="sr-only">Repeat Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Repeat Password"
                               required value={registerForm.confirmPassword} onChange={e => handleFieldChange({...registerForm, confirmPassword: e.target.value})}/>
                        <div className="checkbox mb-3">

                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                    </form>
                    <p style={{color: "red"}} className={failMsgVisibility}>{failMsg}</p>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default RegisterPage
