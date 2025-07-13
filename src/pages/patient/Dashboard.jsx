import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import patients from '../../data/patients.json';
import appointments from '../../data/appointments.json';
import history from '../../data/history.json';
import './Dashboard.css';

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [currentPatient, setCurrentPatient] = useState(null);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [treatmentHistory, setTreatmentHistory] = useState([]);

  useEffect(() => {
    const loggedInId = localStorage.getItem('loggedInPatientId');
    if (loggedInId) {
      const foundPatient = patients.find(p => p.id === loggedInId);
      if (foundPatient) {
        setCurrentPatient(foundPatient);
        setUpcomingAppointments(
          appointments.filter(app => app.patientId === loggedInId && app.status === 'upcoming')
        );
        setTreatmentHistory(
          history.filter(entry => entry.patientId === loggedInId)
        );
      }
    }
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="patient-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {currentPatient?.name || 'Patient'}!</h1>
        <p>Manage your dental care efficiently</p>
      </div>

      <div className="dashboard-actions">
        <button onClick={() => handleNavigate('/book-appointment')}>Book Appointment</button>
        <button onClick={() => handleNavigate('/profile')}>View Profile</button>
      </div>

      <div className="dashboard-section">
        <h2>Upcoming Appointments</h2>
        {upcomingAppointments.length > 0 ? (
          upcomingAppointments.map(app => (
            <div key={app.appointmentId} className="card">
              <p><strong>{app.type}</strong> with {app.doctor}</p>
              <p>{app.date} @ {app.time}</p>
            </div>
          ))
        ) : (
          <p>No upcoming appointments.</p>
        )}
      </div>

      <div className="dashboard-section">
        <h2>Treatment History</h2>
        {treatmentHistory.length > 0 ? (
          treatmentHistory.map(entry => (
            <div key={entry.historyId} className="card">
              <p><strong>{entry.treatment}</strong></p>
              <p>{entry.date} by {entry.doctor}</p>
              <p>Notes: {entry.notes}</p>
            </div>
          ))
        ) : (
          <p>No treatment history available.</p>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
