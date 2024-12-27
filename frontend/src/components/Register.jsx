import React from 'react';
import './Auth.css';
import Navbar from './Navbar'
import { useState } from 'react';


function Register() {
const [name, setName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
  return (
    <>
    <Navbar/>
    <div className="auth-container">
      <div className="form-box">
        <h1>Register</h1>
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" required
            onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required 
            onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" required 
            onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="form-btn">Register</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Register;
