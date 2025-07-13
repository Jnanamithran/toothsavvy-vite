import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar.component';

const PatientLayout = () => {
  return (
    <div className="patient-layout">
      <Sidebar />

      <main className="patient-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default PatientLayout;
