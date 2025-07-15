import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button.component';
import './EditProfile.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    confirmEmail: '',
    profileImage: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [passwordFields, setPasswordFields] = useState({
    newPassword: '',
    confirmNewPassword: ''
  });

  // Load stored user data
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setFormData(prev => ({
        ...prev,
        fullName: storedUser.fullName || '',
        username: storedUser.username || '',
        email: storedUser.email || '',
        profileImage: storedUser.profileImage || ''
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordFields(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert('Email and Confirm Email do not match!');
      return;
    }

    if (
      passwordFields.newPassword &&
      passwordFields.newPassword !== passwordFields.confirmNewPassword
    ) {
      alert('New Password and Confirm New Password do not match!');
      return;
    }

    const updatedUser = { ...formData };
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));

    alert('Profile updated successfully!');
    setIsEditing(false);
    setPasswordFields({ newPassword: '', confirmNewPassword: '' });
  };

  const handleEdit = () => {
    setIsEditing(true);
    setFormData(prev => ({ ...prev, confirmEmail: prev.email }));
  };

  const handleCancel = () => {
    setIsEditing(false);
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setFormData(prev => ({
        ...prev,
        fullName: storedUser.fullName || '',
        username: storedUser.username || '',
        email: storedUser.email || '',
        profileImage: storedUser.profileImage || ''
      }));
    }
    setPasswordFields({ newPassword: '', confirmNewPassword: '' });
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <h2>Patient Profile</h2>
        {!isEditing ? (
          <Button onClick={handleEdit} className="btn-edit">Edit Profile</Button>
        ) : (
          <div className="action-buttons">
            <Button onClick={handleCancel} className="btn-cancel">Cancel</Button>
            <Button onClick={handleSubmit} className="btn-save">Save Changes</Button>
          </div>
        )}
      </div>

      <div className="profile-details">
        <div className="avatar-section">
          <div
            className="profile-avatar"
            style={{
              backgroundImage: `url(${formData.profileImage || ''})`
            }}
          />
          {isEditing && (
            <label className="btn-upload">
              Change Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
            </label>
          )}
        </div>

        <div className="info-section">
          <div className="info-group">
            <label>Full Name:</label>
            {!isEditing ? (
              <span>{formData.fullName || 'N/A'}</span>
            ) : (
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            )}
          </div>

          <div className="info-group">
            <label>Username:</label>
            {!isEditing ? (
              <span>{formData.username || 'N/A'}</span>
            ) : (
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            )}
          </div>

          <div className="info-group">
            <label>Email:</label>
            {!isEditing ? (
              <span>{formData.email || 'N/A'}</span>
            ) : (
              <>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label className="sub-label">Confirm Email:</label>
                <input
                  type="email"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                />
              </>
            )}
          </div>

          {isEditing && (
            <>
              <div className="info-group">
                <label>New Password:</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordFields.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Leave blank to keep current"
                />
              </div>
              <div className="info-group">
                <label>Confirm New Password:</label>
                <input
                  type="password"
                  name="confirmNewPassword"
                  value={passwordFields.confirmNewPassword}
                  onChange={handlePasswordChange}
                  placeholder="Confirm new password"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
