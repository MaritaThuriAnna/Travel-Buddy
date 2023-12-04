// Home.tsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { containerStyle, buttonContainerStyle, buttonStyle, userStyleHeader, userStyleContainer, userStyle, titleStyle, siteNameStyle, logoStyle } from './Home.styles';
import axios from 'axios';

interface HomeProps{
  userId: number;
  userName : string;
  userEmail : string;
  bookings: string[];
}

const Home = (): JSX.Element => {

  const { userId  } = useParams<{ userId : string }>();
  const [user, setUser] = useState<HomeProps | null>(null);
  
  useEffect(() => {
    axios.get<HomeProps>(`http://localhost:8080/User/${userId}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user data', error));
      console.log(userId);
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
}

  return (
    <div style={containerStyle}>
      <div style={buttonContainerStyle}>
      <img src="../home_images/globe.png" alt="Logo" style={logoStyle} />
      <div style={siteNameStyle}>WanderScape</div>
        <Link to="/Destinations">
          <button style={buttonStyle}>View Our Destinations</button>
        </Link>
        <Link to="/Booking">
          <button style={buttonStyle}>Book a Trip</button>
        </Link>
      </div>
      <h2 style={titleStyle}>Welcome to the Homepage</h2>

      {user && (
        <div style={userStyleContainer}>
          <h3 style={userStyleHeader}>Your Profile</h3>
          {/* <p style={userStyle}>ID: {user.userId}</p> */}
          <p style={userStyle}>User Name: {user.userName}</p>
          <p style={userStyle}>Email: {user.userEmail}</p>
          {user.bookings && user.bookings.length > 0 ? (
            <div>
              <p style={userStyle}>Your Bookings:</p>
              <ul style={userStyle}>
                {user.bookings.map((booking, index) => (
                  <li key={index}>{booking}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p style={userStyle}>You haven't booked anything yet.</p>
          )}  
         </div>
       )}  

    </div>
  );
};

export default Home;
