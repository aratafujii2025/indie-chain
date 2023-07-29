import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const API_URL = "http://localhost:3000/";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post(API_URL + "login", { username: username, password: password })
      .then((result) => console.log("success"))
      .catch((error) => {
        console.log(error);
      });
    setUsername("");
    setPassword("");
  };

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event.target);
    // Perform login logic here with username and password
    axios
      .post(API_URL + "register", {
        username: username,
        password: password,
      })
      .then((value) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("A user with that name already exists");
      });
    console.log("Login submitted:", username, password);
    // Clear username and password fields after submission
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h5 style={{ fontSize: "50px" }}></h5>
        <h2 className="black-italic-text">Welcome Back</h2>
        <p className="subtext">Continue with Google or enter your details.</p>
        <button className="google-signin-container">
          <p className="google-signin-text">Sign in with Google</p>
        </button>
        <div className="container">
          <div className="divider"></div>
          <span className="or-text">OR</span>
          <div className="divider"></div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-container">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="text"
              id="username"
              placeholder="Email"
              value={username}
              onChange={handleUsernameChange}
              className="input-field"
            />
            <hr className={`underline ${username ? "filled" : ""}`} />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faKey} className="icon" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="input-field"
            />
            <hr className={`underline ${username ? "filled" : ""}`} />
          </div>
          <button className="login-button-container">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
            <button className="login-button" onClick={handleRegister}>
              Register
            </button>
          </button>
        </form>
      </div>
      <div className="gradient-background" />
    </div>
  );
}

function InputFieldsPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="password-input-container">
      <input
        type={passwordVisible ? "text" : "password"}
        id="password"
        name="password"
        placeholder="Enter your password"
      />
      <span className="password-toggle" onClick={togglePasswordVisibility}>
        <FontAwesomeIcon
          icon={passwordVisible ? faEyeSlash : faEye}
          id="password-toggle-icon"
        />
      </span>
    </div>
  );
}

export default LoginPage;
