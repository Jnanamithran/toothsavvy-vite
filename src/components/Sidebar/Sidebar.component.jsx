import React, { useState } from 'react';
import { NavLink, Link, useLocation, Navigate } from 'react-router-dom';
import './Sidebar.styles.css';
import {
  FiActivity, FiUser, FiCalendar, FiFileText,
  FiSettings, FiClipboard, FiUsers, FiSearch,
  FiLogOut, FiRepeat, FiMenu, FiX
} from 'react-icons/fi';

const Sidebar = ({ role = 'patient' }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);
  const closeSidebar = () => setIsOpen(false);
  const routes = {
    patient: [
      { label: 'Dashboard', path: '/patient-dashboard', icon: <FiActivity /> },
      { label: 'Book Appointment', path: '/book-appointment', icon: <FiCalendar /> },
      { label: 'History', path: '/appointment-history', icon: <FiFileText /> },
      { label: 'Profile', path: '/profile', icon: <FiUser /> },
    ],
    doctor: [
      { label: 'Dashboard', path: '/doctor-dashboard', icon: <FiActivity /> },
      { label: 'Checkup Form', path: '/checkup-form', icon: <FiClipboard /> },
      { label: 'Manage Appointments', path: '/manage-appointments', icon: <FiCalendar /> },
      { label: 'Patient History', path: '/patient-history', icon: <FiFileText /> },
    ],
    admin: [
      { label: 'Dashboard', path: '/admin-dashboard', icon: <FiActivity /> },
      { label: 'Manage Doctor', path: '/manage-doctor', icon: <FiUser /> },
      { label: 'Manage Receptionist', path: '/manage-receptionist', icon: <FiUsers /> },
      { label: 'All Appointments', path: '/all-appointments', icon: <FiFileText /> },
    ],
    receptionist: [
      { label: 'Dashboard', path: '/receptionist-dashboard', icon: <FiActivity /> },
      { label: 'Book Appointment', path: '/receptionist-book', icon: <FiCalendar /> },
      { label: 'Search Patient', path: '/search-patient', icon: <FiSearch /> },
    ],
  };

  const showRescheduleIcon = location.pathname === '/reschedule';

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        <FiMenu />
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Close Button (only on small screens) */}
        <button className="sidebar-close" onClick={closeSidebar}>
          <FiX />
        </button>

        {/* Logo */}
        <Link to="/" className="logo">
          🦷
        </Link>

        {/* Nav Links */}
        <nav className="sidebar-links">
          {(routes[role] || []).map((route, i) => (
            <NavLink
              key={i}
              to={route.path}
              className={({ isActive }) =>
                `sidebar-item ${isActive ? 'active' : ''}`
              }
              onClick={closeSidebar}
            >
              <span className="sidebar-item-icon">{route.icon}</span>
              <span className="sidebar-label">{route.label}</span>
            </NavLink>
          ))}

          {showRescheduleIcon && (
            <NavLink
              to="/reschedule"
              className={({ isActive }) =>
                `sidebar-item ${isActive ? 'active' : ''}`
              }
              onClick={closeSidebar}
            >
              <span className="sidebar-item-icon"><FiRepeat /></span>
              <span className="sidebar-label">Reschedule</span>
            </NavLink>
          )}
        </nav>

        {/* Logout */}
        <div className="logout-button" title="Logout">
          <FiLogOut />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
