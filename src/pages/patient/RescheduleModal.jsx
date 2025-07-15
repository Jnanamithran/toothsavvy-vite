import React from 'react';

const RescheduleModal = ({ appointment }) => {
  if (!appointment) {
    return (
      <div className="modal">
        <p>No appointment selected for rescheduling.</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment rescheduled!');
    // Add logic to update appointment data here
  };

  return (
    <div className="modal">
      <h2>Reschedule Appointment</h2>
      <p><strong>Current:</strong> {appointment.date} @ {appointment.time}</p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>New Date:</label><br />
          <input type="date" required />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>New Time:</label><br />
          <input type="time" required />
        </div>
        <button type="submit">Confirm Reschedule</button>
      </form>
    </div>
  );
};

export default RescheduleModal;
