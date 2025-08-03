import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, Outlet } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.styles.css';

// Re-created Button component for a self-contained example
const Button = ({ children, className, onClick }) => (
  <button className={`btn ${className}`} onClick={onClick}>
    {children}
  </button>
);

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const patientId = localStorage.getItem('loggedInPatientId');
    setIsLoggedIn(!!patientId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInPatientId');
    setIsLoggedIn(false);
    setShowProfileDropdown(false);
    setIsMobileMenuOpen(false); // Close mobile menu on logout
    navigate('/');
  };

  const handleAppointmentClick = () => {
    setIsMobileMenuOpen(false); // Close menu on click
    if (isLoggedIn) {
      navigate('/book-appointment');
    } else {
      navigate('/signin');
    }
  };

  // This function ensures the mobile menu closes when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setShowProfileDropdown(false);
  };

  const handleProfileDropdownLinkClick = (path) => {
    handleLinkClick();
    navigate(path);
  }

  return (
    <>
      <nav className="navigation">
        <ScrollLink className="logo-container" to="home" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>
          ToothSavvy
        </ScrollLink>

        {/* This container holds the links that will collapse into the hamburger menu */}
        <div className={`nav-links-container ${isMobileMenuOpen ? 'active' : ''}`}>
          <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="nav-link" onClick={handleLinkClick}>
            About Us
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} offset={-80} className="nav-link" onClick={handleLinkClick}>
            Our Services
          </ScrollLink>
          <div className="nav-link" onClick={handleAppointmentClick}>
            Appointment
          </div>
           {/* These auth buttons are only for the mobile slide-out menu */}
           {!isLoggedIn && (
             <div className="mobile-auth-buttons">
                <RouterLink className="nav-link" to="/signin" onClick={handleLinkClick}>
                    <Button className="sign-in">Sign In</Button>
                </RouterLink>
                <RouterLink className="nav-link" to="/signup" onClick={handleLinkClick}>
                    <Button className="sign-up">Sign Up</Button>
                </RouterLink>
             </div>
           )}
        </div>

        {/* This container holds actions that are always visible or have separate responsive rules */}
        <div className="nav-actions">
           {isLoggedIn ? (
            <div className="profile-dropdown">
              <div className="profile-icon" onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
                👤
              </div>
              {showProfileDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-item" onClick={() => handleProfileDropdownLinkClick('/profile')}>
                    Profile
                  </div>
                  <div className="dropdown-item" onClick={() => handleProfileDropdownLinkClick('/book-appointment')}>
                    Appointments
                  </div>
                  <div className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              )}
            </div>
           ) : (
             <div className="desktop-auth-buttons">
                <RouterLink className="nav-link" to="/signin">
                    <Button className="sign-in">Sign In</Button>
                </RouterLink>
                <RouterLink className="nav-link" to="/signup">
                    <Button className="sign-up">Sign Up</Button>
                </RouterLink>
             </div>
           )}
          <div className="hamburger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
