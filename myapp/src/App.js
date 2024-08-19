// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from './components/AuthContext';
import Header from "./components/Header";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Rooms from "./components/Rooms";
import "./styles/Header.css";
import "./styles/Signup.css";
import "./styles/Signin.css";
import "./styles/Rooms.css";
import image from "./assets/logo2.jpg"; 

function App() {
  return (
      <Router>
        <nav id="navbar">
          <img src={image} alt="image" width="30" height="30" />
          <h4>BACHELORS</h4>
          <div className="elements">
            <Link to="/">Home</Link>
            <Link to="/Rooms">Rooms</Link>
            <Link to="/Recipes">Recipes</Link>
            <Link to="/Signup">SIGN UP</Link>
            <Link to="/Signin">SIGN IN</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </Router>
  );
}

export default App;
