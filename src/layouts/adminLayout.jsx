// src/layouts/AdminLayout.jsx
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar.component';
import { Outlet } from 'react-router-dom';
import '../pages/admin/Dashboard.css'; // Optional styling

const AdminLayout = () => {
  return (
    <div className="profile-layout">
      <Sidebar role="admin" />
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
