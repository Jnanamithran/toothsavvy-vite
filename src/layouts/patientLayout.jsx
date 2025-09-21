import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar.component';
import './Layout.css';

const PatientLayout = () => {
  return (
    <div className="layout-container">
      <Sidebar role="patient" />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default PatientLayout;
