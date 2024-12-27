import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Landingpg from './components/Landingpg'
import Login from './components/Login'
import './App.css';
import Register from './components/Register';
const App = () => {
  
  return (

    <>
    
    <Router>
    <Routes>
      <Route path="/" element={<Landingpg/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </Router>
    </>
  );
};

export default App

