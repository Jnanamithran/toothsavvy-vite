import React from 'react';
import appointments from '../../data/appointments.json';
import './ManageAppointments.styles.css'; // Import the new CSS file

const ManageAppointments = () => {
  return (
    <div className="manage-appointments-container">
      <h1 className="manage-appointments-header">Manage Appointments</h1>
      <div className="appointments-list-card">
        <ul className="appointments-list">
          {appointments.map(appt => (
            <li key={appt.id} className="appointment-item">
              <div className="appointment-details">
                <p className="patient-name">
                  {appt.patientName} - <span className="service-name">{appt.service}</span>
                </p>
                <p className="appointment-time">{appt.date} at {appt.time}</p>
              </div>
              <div className="action-buttons">
                <button className="action-btn confirm-btn">Confirm</button>
                <button className="action-btn cancel-btn">Cancel</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageAppointments;
