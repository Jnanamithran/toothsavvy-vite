import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReschedule } from '../../context/RescheduleContext';
import appointments from '../../data/appointments.json';
import './RescheduleModal.css';

const RescheduleModal = () => {
  const navigate = useNavigate();
  const { rescheduleAppointment } = useReschedule();

  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  if (!rescheduleAppointment) {
    return (
      <div className="modal full-screen">
        <h2>No appointment selected for rescheduling.</h2>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clone appointments and update selected one
    const updatedAppointments = appointments.map(appt => {
      if (appt.appointmentId === rescheduleAppointment.appointmentId) {
        return {
          ...appt,
          date: newDate,
          time: newTime
        };
      }
      return appt;
    });

    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    alert('Appointment rescheduled successfully!');
    navigate('/patient-dashboard');
  };

  return (
    <div className="modal full-screen">
      <h2>Reschedule Appointment</h2>
      <p><strong>Current:</strong> {rescheduleAppointment.date} @ {rescheduleAppointment.time}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Date:</label>
          <input type="date" required value={newDate} onChange={(e) => setNewDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>New Time:</label>
          <input type="time" required value={newTime} onChange={(e) => setNewTime(e.target.value)} />
        </div>
        <button type="submit">Confirm Reschedule</button>
      </form>
    </div>
  );
};

export default RescheduleModal;
