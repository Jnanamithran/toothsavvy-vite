import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import patients from '../../data/patients.json';
import './LoginRegister.css';

// 👇 Add these imports
import signinImage from '../../assets/signin.jpg';
import signupImage from '../../assets/signup.jpg';

const LoginRegister = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLogin = location.pathname === '/signin';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      const existingPatient = patients.find(
        (p) => p.email === formData.email && p.password === formData.password
      );
      if (existingPatient) {
        localStorage.setItem('loggedInPatientId', existingPatient.id);
        navigate('/patient-dashboard');
      } else {
        setError('Invalid email or password');
      }
    } else {
      const alreadyExists = patients.find((p) => p.email === formData.email);
      if (alreadyExists) {
        setError('Email already registered');
      } else {
        const newPatient = {
          id: Date.now().toString(),
          ...formData,
        };
        localStorage.setItem('loggedInPatientId', newPatient.id);
        localStorage.setItem('newPatient', JSON.stringify(newPatient));
        navigate('/patient-dashboard');
      }
    }
  };

  return (
    <div className="login-register-container">
      <div className="image-side">
        <img
          src={isLogin ? signinImage : signupImage}
          alt={isLogin ? 'Login' : 'Register'}
        />
        <div className="overlay-content">
          <h1>Welcome to HealthCare</h1>
          <p>Secure patient portal for managing your health journey with ease and confidence.</p>
        </div>
      </div>
      <div className="form-side">
        <div className="form-container">
          <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
          </form>
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <a href={isLogin ? '/signup' : '/signin'}>
              {isLogin ? 'Sign up' : 'Sign in'}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
