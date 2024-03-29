//login.tsx:
import { Button, TextField } from "@mui/material"
import { loginButtonStyle, parentDivStyle, headerStyle, headerContainerStyle, registerButtonStyle } from "./Login.styles"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { containerStyle, logoStyle, siteNameStyle } from "../Components/Home.styles";


interface HomeProps {
  userId: number;
}

export const Login = (): JSX.Element => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [user, setUser] = useState<HomeProps | null>(null);
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [insertError, setInsertError] = useState("");

  const onChangeEmail = (event: any): void => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event: any): void => {
    setPassword(event.target.value)
  }


  const login = (): void => {
    if(!email || !password ){
      setInsertError("All fields are required for login.");
      console.log("Error message set:", insertError);
      return;
  }
    axios
      .get("http://localhost:8080/User/Login", {
        params: {
          userEmail: email,
          userPassword: password,
        },
      })
      .then((response) => {
        setUser(response.data);

        console.log("isAdmin: ", response.data.isAdmin);
        if (response.data.isAdmin === true) {
          // Redirect to admin page
          navigate(`/Admin`);
        } else {
          // Redirect to user page
          navigate(`/Home/${response.data.userId}`);
        }
        console.log("user: ", response.data);

        console.log(response.data.userId);
        setUser(response.data)
        // navigate(`/Home/${response.data.userId}`);
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  return <div>
    
    <div style={containerStyle}>

      <div style={headerContainerStyle}>
        <img src="../home_images/globe.png" alt="Logo" style={logoStyle} />
        <div style={siteNameStyle}>WanderScape</div>
      </div>
      <div style={parentDivStyle}>
  
        {/* <h1 style={headerStyle}>Welcome to WanderScape</h1> */}
        <h2 style={headerStyle}>Log In</h2>
        <div style={{ marginTop: 20 }}>
          <TextField id="standard-basic" label="Email" variant="standard" onChange={onChangeEmail} />
        </div>
        <div style={{ marginTop: 20 }}>
          <TextField id="standard-basic" label="Password" variant="standard" onChange={onChangePassword} />
        </div>
        <Button style={loginButtonStyle} onClick={login} variant="contained">Login</Button>
        <Link to="/Register" style={registerButtonStyle} >
        {/* <Button style={registerButtonStyle}  variant="contained">Register</Button> */}
        Register
        </Link>
        {/* {insertError && <p style={{ color: "red" }}>{insertError}</p>} */}
      </div>
      {insertError && <p style={{ color: "red" }}>{insertError}</p>}
      {/* <img src={`../login_images/login_bg.jpg`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }} /> */}
    </div>
  </div>
}