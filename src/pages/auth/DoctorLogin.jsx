import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import doctors from '../../data/doctors.json'; // Import the doctor data
import './DoctorLogin.styles.css'; // Import the new CSS

const DoctorLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        // Find the doctor by email from the imported JSON
        const doctor = doctors.find(doc => doc.email.toLowerCase() === email.toLowerCase());

        // Check if doctor exists and password is correct
        if (doctor && doctor.password === password) {
            // On successful login, save the doctor's ID to localStorage
            localStorage.setItem('loggedInDoctorId', doctor.id);
            navigate('/doctor-dashboard');
        } else {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="doctor-login-container">
            <div className="doctor-login-card">
                <div className="doctor-login-header">
                    <h1>Doctor Portal Login</h1>
                    <p>Welcome back, Doctor.</p>
                </div>
                <form onSubmit={handleLogin} className="doctor-login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g., doctor@clinic.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="submit-btn">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DoctorLogin;
