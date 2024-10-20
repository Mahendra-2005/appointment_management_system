import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { AppointmentContext } from './AppointmentContext'; // Import the context
import "./appoint.css";

function Appointments() {
  const { addAppointment } = useContext(AppointmentContext); // Access the function to add appointment
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    purposeOfVisit: "",
    date: "",
    time: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add the new appointment to the global context
    addAppointment({
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      purposeOfVisit: formData.purposeOfVisit,
      date: formData.date,
      time: formData.time,
    });

    setIsSubmitted(true);
  };

  const handleBack = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="appointment-form-container">
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Purpose of Visit:</label>
          <input
            type="text"
            name="purposeOfVisit"
            value={formData.purposeOfVisit}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {isSubmitted && (
        <div className="dialog-box">
          <p>Appointment successfully scheduled!</p>
          <button onClick={() => setIsSubmitted(false)}>OK</button>
          <button onClick={handleBack} className="back-btn">Back to Home</button>
        </div>
      )}
    </div>
  );
}

export default Appointments;
