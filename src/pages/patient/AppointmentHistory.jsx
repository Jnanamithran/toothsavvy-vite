import React, { useEffect, useState } from 'react';
import patients from '../../data/patients.json';
import history from '../../data/history.json';
import './AppointmentHistory.css';

const AppointmentHistory = () => {
  const [historyRecords, setHistoryRecords] = useState([]);
  const [patientName, setPatientName] = useState('');

  useEffect(() => {
    const loggedInId = localStorage.getItem('loggedInPatientId');
    if (!loggedInId) return;

    // Get patient's name from patients.json
    const patient = patients.find(p => p.id === loggedInId);
    setPatientName(patient?.name || 'Your');

    // Filter history for this patient
    const userHistory = history.filter(h => h.patientId === loggedInId);

    // Sort by date descending
    const sorted = [...userHistory].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    setHistoryRecords(sorted);
  }, []);

  return (
    <div className="appointment-history">
      <h2>{patientName}'s Appointment History</h2>

      {historyRecords.length === 0 ? (
        <p className="no-history">No history records found.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Treatment</th>
              <th>Doctor</th>
              <th>Notes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {historyRecords.map((record) => (
              <tr key={record.historyId}>
                <td>{record.date}</td>
                <td>{record.treatment}</td>
                <td>{record.doctor}</td>
                <td>{record.notes}</td>
                <td className={`status ${record.status}`}>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppointmentHistory;
