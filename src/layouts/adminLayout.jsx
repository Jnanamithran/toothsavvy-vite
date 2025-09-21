// src/layouts/AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar.component';
import './Layout.css';

const AdminLayout = () => {
  return (
    <div className="layout-container">
      <Sidebar role="admin" />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
