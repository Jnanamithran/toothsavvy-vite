import React from 'react';
import history from '../../data/history.json';
import './PatientHistory.styles.css'; // Import the new CSS file

const PatientHistory = () => {
  return (
    <div className="patient-history-container">
      <h1 className="patient-history-header">Patient History</h1>
      <div className="history-card">
        <input 
          type="text" 
          placeholder="Search by patient name..." 
          className="search-bar"
        />
        <ul className="history-list">
          {history.map(record => (
            <li key={record.id} className="history-item">
              <p className="history-patient-name">
                {record.patientName} 
                <span className="patient-id">(ID: {record.patientId})</span>
              </p>
              <p className="history-date">Date: {record.date}</p>
              <p className="history-notes">Notes: {record.notes}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientHistory;
