//login.tsx:
import { Button, TextField } from "@mui/material"
import { loginButtonStyle, parentDivStyle, headerStyle } from "./Login.styles"
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Login = (): JSX.Element => {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const navigate = useNavigate();

    const onChangeEmail = (event: any): void => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: any): void => {
        setPassword(event.target.value)
    }

    const login = (): void => {
        axios.get("http://localhost:8080/User/Login", {
            params: {
                userEmail: email,
                userPassword: password
            }
        })
            .then(response => {
                console.log(response.data);
                navigate("/Home");
            })
            .catch(error => {
                console.error("Login failed", error);
            });
    };

    // const signUp = (): void => {
    //     axios.get("http://localhost:8080/User/Insert", {
    //         params: {
    //             userEmail: email,
    //             userPassword: password
    //         }
    //     })
    //         .then(response => {
    //             console.log(response.data);
    //             navigate("/Home");
    //         })
    //         .catch(error => {
    //             console.error("Login failed", error);
    //         });
    // }

    return <div style={parentDivStyle}>
        <h1 style={headerStyle}>Welcome to Numele Siteului xd!</h1>
        <h2 style={headerStyle}>Log In</h2>
        <div style={{ marginTop: 20 }}>
            <TextField id="standard-basic" label="Email" variant="standard" onChange={onChangeEmail} />
        </div>
        <div style={{ marginTop: 20 }}>
            <TextField id="standard-basic" label="Password" variant="standard" onChange={onChangePassword} />
        </div>
        <Button style={loginButtonStyle} onClick={login} variant="contained">Login</Button>
        {/* <Button style={loginButtonStyle} onClick={signUp} variant="contained">Sign Up</Button> */}
    </div>
}