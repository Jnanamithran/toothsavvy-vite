// AppointmentHistory.jsx
import React, { useEffect, useState } from 'react';
import patients from '../../data/patients.json';
import './AppointmentHistory.css';

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState('');

  useEffect(() => {
    const loggedInId = localStorage.getItem('loggedInPatientId');
    if (!loggedInId) return;

    const appointmentData = JSON.parse(localStorage.getItem('appointments')) || [];

    const patient = patients.find(p => p.id === loggedInId);
    setPatientName(patient?.name || 'Your');

    const patientAppointments = appointmentData.filter(
      a => a.patientId === loggedInId
    );

    const sorted = [...patientAppointments].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    setAppointments(sorted);
  }, []);

  return (
    <div className="appointment-history">
      <h2>{patientName}'s Appointment History</h2>

      {appointments.length === 0 ? (
        <p className="no-history">No appointments found.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Status</th>
              <th>Doctor</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.appointmentId}>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
                <td>{appt.type}</td>
                <td className={`status ${appt.status}`}>{appt.status}</td>
                <td>{appt.doctor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppointmentHistory;
