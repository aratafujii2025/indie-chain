import React, { useState } from 'react';
(callback:any) => {<input type="text" /> }
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform login logic here with username and password
    console.log('Login submitted:', username, password);
    // Clear username and password fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h5 style={{fontSize:"50px"}}></h5>
        <h2 className="black-italic-text">Welcome Back</h2>
        <p className="subtext">Continue with Google or enter your details.</p>
        <button className="google-signin-container">
        <p className="google-signin-text">Sign in with Google</p>
        </button>
        <div className="divider">
            <span className="or-text">or</span>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="input-field"
              />
              <hr className={`underline ${username ? 'filled' : ''}`} />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="input-field"
            />
            <hr className={`underline ${username ? 'filled' : ''}`} />
          </div>
          <button className="login-button-container">
            <button className="login-button">Login</button>
          </button>
          <input type="checkbox" id="myCheckbox" />
          <label htmlFor="myCheckbox">Remember me</label>

         
        </form>
      </div>
      <div className="gradient-background" />
    </div>
  );
}

export default LoginPage;
