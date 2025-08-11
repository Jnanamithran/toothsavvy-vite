import React from 'react';
import appointments from '../../data/appointments.json';
import patients from '../../data/patients.json';
import './Dashboard.styles.css'; // Import the new CSS file

const DoctorDashboard = () => {
    // Basic stats calculation
    const today = new Date().toISOString().slice(0, 10);
    const upcomingAppointments = appointments.filter(
        (appt) => appt.date === today && appt.status === 'Confirmed'
    ).length;
    const totalPatients = patients.length;

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-header">Doctor's Dashboard</h1>
            <div className="stats-grid">
                {/* Today's Appointments Card */}
                <div className="stat-card">
                    <h2 className="stat-card-title">Today's Appointments</h2>
                    <p className="stat-card-value blue">{upcomingAppointments}</p>
                </div>

                {/* Total Patients Card */}
                <div className="stat-card">
                    <h2 className="stat-card-title">Total Patients</h2>
                    <p className="stat-card-value green">{totalPatients}</p>
                </div>

                {/* Pending Checkups Card */}
                <div className="stat-card">
                    <h2 className="stat-card-title">Pending Checkups</h2>
                    <p className="stat-card-value yellow">3</p>
                </div>
            </div>
            {/* You can add more dashboard widgets here */}
        </div>
    );
};

export default DoctorDashboard;
