import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Login from './pages/Login';
import AppointmentList from './pages/AppointmentList';
import Contact from './pages/Contact';

function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointments-list" element={<AppointmentList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Page;
