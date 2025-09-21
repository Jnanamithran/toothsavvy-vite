import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import doctors from '../../data/doctors.json'; // Import the doctors JSON file
import './DoctorLogin.styles.css';

const DoctorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if a doctor is already logged in
    const loggedInDoctorId = localStorage.getItem('loggedInDoctorId');
    if (loggedInDoctorId) {
      navigate('/doctor-dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Simulate API call delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));

      // Find the doctor in the local JSON data
      const doctor = doctors.find(
        (d) => d.email === email && d.password === password
      );

      if (doctor) {
        console.log('Doctor login successful.');
        localStorage.setItem('loggedInDoctorId', doctor.id); // Store doctor ID
        navigate('/doctor-dashboard');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="doctor-login-container">
      <div className="doctor-login-card">
        <div className="doctor-login-header">
          <h1>Doctor Portal</h1>
          <p>Please sign in to continue</p>
        </div>
        <form onSubmit={handleLogin} className="doctor-login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="patient-login-link">
          <p>Are you a patient? <Link to="/signin">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
