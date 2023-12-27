import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { buttonContainerStyle, buttonStyle, containerStyle, logoStyle, siteNameStyle } from "../Components/Home.styles";
import { headerContainerStyle } from "./Login.styles";
import { formInputStyle, formLabelStyle, profileContainerStyle, updateButtonStyle } from "./Profile.styles";

const Register = (): JSX.Element => {
    // State to store user registration information
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");



    const register = () => {

        const newUser = {
            userName: name,
            userEmail: email,
            userPassword: password,

        };

        axios
            .post("http://localhost:8080/User/Register", newUser)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Registration failed", error);
            });
    };

    return (
        // <div>

        //     <div style={containerStyle}>

        //         <div style={buttonContainerStyle}>
        //             <img src="../home_images/globe.png" alt="Logo" style={logoStyle} />
        //             <div style={siteNameStyle}>WanderScape</div>
        //         </div>

        //         <div style={profileContainerStyle}>
        //             <h1>Register</h1>
        //             <label style={formLabelStyle}>
        //                 Name:
        //                 <input type="text" name="userName" value={name} onChange={(e) => setName(e.target.value)} style={formInputStyle} />
        //             </label>
        //             <br />
        //             <label style={formLabelStyle}>
        //                 Email:
        //                 <input type="email" name="userEmail" value={email} onChange={(e) => setEmail(e.target.value)} style={formInputStyle} />
        //             </label>
        //             <br />
        //             <label style={formLabelStyle}>
        //                 Password:
        //                 <input type="password" name="userPassword" value={password} onChange={(e) => setPassword(e.target.value)} style={formInputStyle} />
        //             </label>
        //             <br />
        //             <button onClick={register} style={updateButtonStyle}>
        //                 Register
        //             </button>
        //             {/* Use Link to navigate back to the login page */}
        //             <div>
        //                 <Link to="/">Already have an account? Log in</Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div>

            <div style={containerStyle}>

                <div style={buttonContainerStyle}>

                    <img src="../home_images/globe.png" alt="Logo" style={logoStyle} />

                    <div style={siteNameStyle}>WanderScape</div>

                </div>

            </div>

            <div style={profileContainerStyle}>
                <h1>Register Sheet</h1>
                <label style={formLabelStyle}>
                    Name:
                    <input type="text" name="userName" value={name} onChange={(e) => setName(e.target.value)} style={formInputStyle} />
                </label>
                <br />
                <label style={formLabelStyle}>
                    Email:
                    <input type="email" name="userEmail" value={email} onChange={(e) => setName(e.target.value)} style={formInputStyle} />
                </label>
                <br />
                <label style={formLabelStyle}>
                    Password:
                    <input type="password" name="userPassword" value={password} onChange={(e) => setName(e.target.value)} style={formInputStyle} />
                </label>
                <br />
                <button onClick={register} style={updateButtonStyle}>
                    Sign Up
                </button>
                <div>
                    <Link to="/">Already have an account? Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
