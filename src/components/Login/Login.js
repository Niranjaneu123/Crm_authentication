import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInWithEmailAndPassword} from "firebase/auth";
import { authentication } from "../../firebase/firebase";
import cs from "../Images/cs.jpg";




function Login() {

    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const navigate = useNavigate();
    const myStyle = {
        color: "black",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        padding: "none",

      }
    const handleLogin = () => {
        signInWithEmailAndPassword(authentication,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Logged in with : ", user.email);

        })
        .catch((error) => console.log(error))

    }

    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged((user) => {
            if(user) {
                navigate("/home");
                console.log(unsubscribe);
            }

        })
            
    })
    return (
        <div>
            <h1>CyborgSapient</h1>
        <StyledDiv>
        <h1 style={ myStyle }>Login</h1>
        <img src={ cs }  alt = "its loading" width="150" height="150" border-radius ="25%" />
        <br></br>
        <Input
        type = "text"
        placeholder = "Email"
        value = {email}
        onChange = {(event) => setEmail(event.target.value)}
        />
        <br></br>
        <Input
        type = "password"
        placeholder = "password"
        value = {password}
        onChange = {(event) => setPassword(event.target.value)}
        />
        <br></br>
        <Button onClick={() => handleLogin()}>Login</Button>
        <h4>Create New Account</h4>
        <Button onClick={() => navigate("/register")}>Register</Button>
    </StyledDiv>
    </div>

    )
}


export default Login;


const StyledDiv = styled.div`
        display: inline-block;
        padding: 5em;
        width: 23%;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 40px;
        position-relaive;
        cursor: pointer;
        box-shadow: 4px 2px 16px rgba(0, 0, 0, 0.4);
        color: black;

`;


const Input = styled.input`
    padding: 15px;
    margin: 10px;
    font-size: 17px;
    background: white;
    outline: black;
    border: #e41b17;
    border-radius: 30px;
    width: 90%;
`;


const Button = styled.button`
    margin: 10px;
    padding:10px;
    border-radius: 30px;
    background: linear-gradient(90deg, rgba(252,205,128,1) 0%, rgba(209,122,142,1) 55%, rgba(220,159,174,1) 100%);
    color: #fff;
    width: 100%;
    font-size: 16px;
    font-weight:800;

`;
