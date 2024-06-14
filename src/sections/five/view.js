// @mui
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import './style.css'
import PP from './flower.jpg'
// ----------------------------------------------------------------------

export default function FiveView() {
  const settings = useSettingsContext();
  const [user, setUser] = useState({
    fullName: 'Lucian Obrien',
    email: 'ashlynn_ohara62@gmail.com',
    phone: '904-966-2836',
    country: 'United Arab Emirates',
    state: 'Virginia',
    city: 'Rancho Cordova',
    address: '908 Jack Locks',
    zip: '85807',
    company: 'Gleichner, Mueller and Tromp',
    role: 'Data Analyst',
    banned: true,
    emailVerified: true,
    profilePic: 'flower.jpg'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setUser({ ...user, [name]: checked });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser({ ...user, profilePic: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteUser = () => {
    console.log('User deleted');
  };

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4" sx={{ mb: 4 }}>Page Five</Typography>

      <div className="user-edit">
        <h2>Edit User</h2>
        <div className="form-container">
          <div className="form-section">
            <form>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" value={user.fullName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" value={user.phone} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country:</label>
                <select id="country" name="country" value={user.country} onChange={handleInputChange}>
                  {/* Add more options as needed */}
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="state">State/Region:</label>
                <input type="text" id="state" name="state" value={user.state} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value={user.city} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={user.address} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip/Code:</label>
                <input type="text" id="zip" name="zip" value={user.zip} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company" value={user.company} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role:</label>
                <input type="text" id="role" name="role" value={user.role} onChange={handleInputChange} />
              </div>
              <div className="form-group toggles">
                <div>
                  <label htmlFor="banned">Banned:</label>
                  <input type="checkbox" id="banned" name="banned" checked={user.banned} onChange={handleToggleChange} />
                </div>
                <div>
                  <label htmlFor="emailVerified">Email Verified:</label>
                  <input type="checkbox" id="emailVerified" name="emailVerified" checked={user.emailVerified} onChange={handleToggleChange} />
                </div>
              </div>
              <div className="buttons">
                <button type="button" onClick={handleDeleteUser} className="delete-button">Delete User</button>
                <button type="submit" className="save-button">Save Changes</button>
              </div>
            </form>
          </div>
          <div className="profile-pic-section">
            <img src={PP} alt="Profile" />
            <input type="file" accept=".jpeg, .jpg, .png, .gif" onChange={handleImageUpload} />
            <p>Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
