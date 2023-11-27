// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { containerStyle, headingStyle } from './Home.styles';

const Home = (): JSX.Element => {
  return (
    <div style={containerStyle }>
      <h2 style={headingStyle}>Welcome to the Homepage</h2>
      <Link to="/Destinations">View Destinations</Link>
      <br />
      <Link to="/Accommodations">View Accommodations</Link>
      <br />
      <Link to="/Attractions">View Attractions</Link>
      <br />
      <Link to="/Booking">Book a Reservation</Link>
    </div>
  );
};

export default Home;
