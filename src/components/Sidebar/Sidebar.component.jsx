// Sidebar.component.jsx
import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Sidebar.styles.css';
import {
  FiActivity, FiUser, FiCalendar, FiFileText,
  FiSettings, FiClipboard, FiUsers, FiSearch,
  FiLogOut, FiRepeat
} from 'react-icons/fi';

const Sidebar = ({ role = 'patient' }) => {
  const location = useLocation();

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

  // Conditionally show reschedule icon only on /reschedule path
  const showRescheduleIcon = location.pathname === '/reschedule';

  return (
    <aside className="sidebar">
      {/* Logo */}
      <Link to="/" className="logo" title="Go to Home">
        🦷
      </Link>

      {/* Navigation Links */}
      <nav className="sidebar-links">
        {(routes[role] || []).map((route, index) => (
          <NavLink
            key={index}
            to={route.path}
            className={({ isActive }) =>
              `sidebar-icon ${isActive ? 'active' : ''}`
            }
            title={route.label}
          >
            {route.icon}
          </NavLink>
        ))}

        {/* Reschedule icon only if on /reschedule */}
        {showRescheduleIcon && (
          <NavLink
            to="/reschedule"
            className={({ isActive }) =>
              `sidebar-icon ${isActive ? 'active' : ''}`
            }
            title="Reschedule Appointment"
          >
            <FiRepeat />
          </NavLink>
        )}
      </nav>

      {/* Logout Icon at the Bottom */}
      <div className="logout-button" title="Logout">
        <FiLogOut />
      </div>
    </aside>
  );
};

export default Sidebar;