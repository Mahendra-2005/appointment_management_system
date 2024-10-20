import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const adminCredentials = {
    username: 'mahendra',
    password: 'mahendra@2005',
  };

  const navigate = useNavigate(); // Initialize useNavigate to handle redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.username.trim()) {
      formErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (
        formData.username === adminCredentials.username &&
        formData.password === adminCredentials.password
      ) {
        setSubmitted(true);
        navigate('/appointments-list'); // Redirect to the AppointmentList page after successful login
      } else {
        setErrors({ general: 'Invalid credentials. Access denied.' });
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="left-section">
          <h2>Admin 
          Login</h2>
        </div>
        <div className="right-section">
          {errors.general && <span className="error">{errors.general}</span>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
