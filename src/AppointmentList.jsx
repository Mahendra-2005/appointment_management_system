import React, { useContext } from 'react';
import { AppointmentContext } from './AppointmentContext'; // Import the context
import './appointlist.css' // Import the CSS

const AppointmentList = () => {
  const { appointments } = useContext(AppointmentContext); // Access the appointments from context

  return (
    <div className="appointment-list-container">
      <h2>Today's Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments scheduled yet.</p>
      ) : (
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Purpose of Visit</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.mobile}</td>
                <td>{appointment.purposeOfVisit}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppointmentList;
