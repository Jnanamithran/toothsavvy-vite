import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar.component';

const DoctorLayout = () => {
  return (
    <div className="doctor-layout">
      {/* The Sidebar will now show doctor-specific links */}
      <Sidebar role="doctor" />

      <main className="doctor-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DoctorLayout;
