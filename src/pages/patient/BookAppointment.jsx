import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import appointments from '../../data/appointments.json';
import patients from '../../data/patients.json';
import Button from '../../components/Button/Button.component';
import './BookAppointment.css';

const BookAppointment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    date: '',
    time: '',
    type: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  // Autofill patient data when component loads
  useEffect(() => {
    const loggedInId = localStorage.getItem('loggedInPatientId');
    if (!loggedInId) return;

    const currentPatient = patients.find(p => p.id === loggedInId);
    if (currentPatient) {
      setFormData(prev => ({
        ...prev,
        name: currentPatient.name || '',
        age: currentPatient.age || '',
        gender: currentPatient.gender || ''
      }));
    }
  }, []);

  // Handles input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedInId = localStorage.getItem('loggedInPatientId');
    if (!loggedInId) return;

    const newAppointment = {
      appointmentId: `a-${Date.now()}`,
      patientId: loggedInId,
      doctor: 'Assigned Later',
      date: formData.date,
      time: formData.time,
      type: formData.type,
      status: 'upcoming',
      name: formData.name,
      age: formData.age,
      gender: formData.gender
    };

    const updatedAppointments = [...appointments, newAppointment];
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

    setShowSuccess(true);
    setTimeout(() => {
      navigate('/patient-dashboard');
    }, 3000);
  };

  return (
    <div className="book-appointment full-screen">
      <h2>Book Your Appointment</h2>

      {showSuccess && (
        <div className="success-message">
          ✅ Your appointment has been booked!
        </div>
      )}

      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Treatment Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            placeholder="e.g. Cleaning, Root Canal"
          />
        </div>

        <Button type="submit">Book Appointment</Button>
      </form>
    </div>
  );
};

export default BookAppointment;
