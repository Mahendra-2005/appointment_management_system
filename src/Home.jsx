import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className='home'>
      <header className="navbar">
        <div className="logo">
          <h1>bookin</h1>
        </div>
        <nav className="nav-links">
          
          <Link to="/login" className="nav-button">Admin Login</Link>
          <Link to="/contact" className="nav-button">Contact Us</Link>
        </nav>
      </header>
      <div className="main-content">
        <h1 className="welcome-message">Welcome to MNC Appointment System</h1>
        <button className="appointment-btn">
          <Link to="/appointments" className="link-btn">Book an Appointment</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
