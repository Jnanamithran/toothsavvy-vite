import './Navbar.styles.css';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, Outlet } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Button from '../Button/Button.component';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // Check login status on mount
  useEffect(() => {
    const patientId = localStorage.getItem('loggedInPatientId');
    setIsLoggedIn(!!patientId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInPatientId');
    setIsLoggedIn(false); // Update state
    navigate('/'); // Redirect to home
  };

  return (
    <>
      <nav className="navigation">
        <ScrollLink className="logo-container" to="home" smooth={true} duration={500} offset={-80}>
          ToothSavvy
        </ScrollLink>

        <div className="nav-links-container">
          <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="nav-link">
            About Us
          </ScrollLink>

          <ScrollLink to="services" smooth={true} duration={500} offset={-80} className="nav-link">
            Our Services
          </ScrollLink>

          <ScrollLink to="appointment" smooth={true} duration={500} offset={-80} className="nav-link">
            Appointment
          </ScrollLink>

          {isLoggedIn ? (
            <div className="profile-dropdown">
              <div className="profile-icon" onClick={() => setShowDropdown(!showDropdown)}>
                👤
              </div>
              {showDropdown && (
                <div className="dropdown-menu">
                  <RouterLink to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                    Profile
                  </RouterLink>
                  <RouterLink to="/appointment-history" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                    Appointments
                  </RouterLink>
                  <div className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <RouterLink className="nav-link" to="/signin">
                <Button className="sign-in">Sign In</Button>
              </RouterLink>
              <RouterLink className="nav-link" to="/signup">
                <Button className="sign-up">Sign Up</Button>
              </RouterLink>
            </>
          )}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
