import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-section">
      <div className="login-content">
        <div className="login-text">
          <h1 className="login-title">Log in</h1>
          <label className="label email">Email :</label>
          <input  className="input adress" type="email" required></input>
          <label className="label password">Password :</label>
          <input  className="input pass" type="password" required></input>
          
          <button className="btn white">
            Log in
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Login