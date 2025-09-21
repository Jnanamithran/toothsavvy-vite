import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar.component';
import './Layout.css';

const DoctorLayout = () => {
  return (
    <div className="layout-container">
      <Sidebar role="doctor" />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DoctorLayout;
