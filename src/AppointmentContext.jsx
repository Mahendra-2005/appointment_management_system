import React, { createContext, useState } from 'react';

// Create a new context
export const AppointmentContext = createContext();

// Create a provider component
export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};
