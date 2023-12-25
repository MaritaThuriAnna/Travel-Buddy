// Profile.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { formInputStyle, formLabelStyle, profileContainerStyle, updateButtonStyle } from './Profile.styles';
import { buttonContainerStyle, buttonStyle, containerStyle, logoStyle, siteNameStyle } from '../Components/Home.styles';

interface User {
  userId: number;
  userName: string;
  userEmail: string;
  userPassword: string;
}

const Profile = (): JSX.Element => {

  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [editedUser, setEditedUser] = useState<User | null>(null);

  console.log("user id first: ", userId);

  useEffect(() => {

    // Fetch user info
    axios.get<User>(`http://localhost:8080/User/${userId}`)
      .then(response => {
        const userData = response.data;
        setUser(userData);
        setEditedUser(userData); // Set the edited user state
      })
      .catch(error => {
        console.error('Error fetching user data', error);
      });
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser!,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    axios.put('http://localhost:8080/User/Update', editedUser)
      .then(response => {
        console.log('User updated:', response.data);
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (

    <div>

      <div style={containerStyle}>

        <div style={buttonContainerStyle}>

          <img src="../home_images/globe.png" alt="Logo" style={logoStyle} />

          <div style={siteNameStyle}>WanderScape</div>

          <Link to="/Destinations">
            <button style={buttonStyle}>View Our Destinations</button>
          </Link>

          <Link to={`/Booking/${user.userId}`}>
            <button style={buttonStyle}>Book a Trip</button>
          </Link>

        </div>

      </div>

      <div style={profileContainerStyle}>
        <h1>Edit Profile</h1>
        <label style={formLabelStyle}>
          Name:
          <input type="text" name="userName" value={editedUser?.userName || ''} onChange={handleChange} style={formInputStyle} />
        </label>
        <br />
        <label style={formLabelStyle}>
          Email:
          <input type="email" name="userEmail" value={editedUser?.userEmail || ''} onChange={handleChange} style={formInputStyle} />
        </label>
        <br />
        <label style={formLabelStyle}>
          Password:
          <input type="password" name="userPassword" value={editedUser?.userPassword || ''} onChange={handleChange} style={formInputStyle} />
        </label>
        <br />
        <button onClick={handleUpdate} style={updateButtonStyle}>Update Profile</button>
      </div>
    </div>
  );
};



export default Profile;
