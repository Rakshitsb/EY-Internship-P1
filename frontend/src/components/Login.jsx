import React from 'react';
import './Auth.css';
import Navbar from './Navbar';

function Login() {
  return (
    <>
    <Navbar/>
    <div className="auth-container">
      <div className="form-box">
        <h1>Login</h1>
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="form-btn">Login</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login
