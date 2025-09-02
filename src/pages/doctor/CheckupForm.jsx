import React from 'react';
import './CheckupForm.styles.css'; // Import the new CSS file

const CheckupForm = () => {
    return (
        <div className="checkup-form-container">
            <h1 className="checkup-form-header">Patient Checkup Form</h1>
            <form className="checkup-form-card">
                <div className="form-group">
                    <label htmlFor="patientName">Patient Name</label>
                    <input type="text" id="patientName" placeholder="Enter patient's full name" />
                </div>
                <div className="form-group">
                    <label htmlFor="checkupDate">Date of Checkup</label>
                    <input type="date" id="checkupDate" />
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Observations & Notes</label>
                    <textarea id="notes" placeholder="Enter clinical notes, observations, and treatment plan..."></textarea>
                </div>
                <button type="submit" className="submit-btn">
                    Save Checkup
                </button>
            </form>
        </div>
    );
};

export default CheckupForm;