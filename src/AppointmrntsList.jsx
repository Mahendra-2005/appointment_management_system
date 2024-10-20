import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (!loggedIn) {
      navigate('/login');
    }

    // Simulate fetching appointments (could be replaced with an API call)
    setAppointments([
      { id: 1, name: 'John Doe', date: '2024-10-20', time: '10:00 AM' },
      { id: 2, name: 'Jane Smith', date: '2024-10-20', time: '11:00 AM' },
    ]);
  }, [navigate]);

  return (
    <div>
      <h1>Today's Appointments</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.name} - {appointment.date} - {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
