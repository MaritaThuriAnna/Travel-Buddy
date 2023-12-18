// Home.tsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { containerStyle, buttonContainerStyle, buttonStyle, userStyleHeader, userStyleContainer, userStyle, titleStyle, siteNameStyle, logoStyle } from './Home.styles';
import axios from 'axios';

interface HomeProps {
  userId: number;
  userName: string;
  userEmail: string;
  bookings: Array<{
    bookingId: string;
    destinationName: string;
    checkIn: string;
    checkOut: string;
  }>;
}

interface Booking {
  bookingId: number;
  user: {
    userId: number;
  };
  destination: {  // Corrected from desinationId to destination
    desinationId: number;
    destinationName: string
  };
  accomodationId: number;
  checkIn: number;
  checkOut: number;
}


const Home = (): JSX.Element => {

  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<HomeProps | null>(null);

  useEffect(() => {
    // Fetch user information
    axios.get<HomeProps>(`http://localhost:8080/User/${userId}`)
      .then(response => {
        const userData = response.data;
        // const userID = response.data.userId;

        axios.get<Booking[]>(`http://localhost:8080/Bookings/ReadAll`)
          .then(bookingsResponse => {
            const userWithBookings: HomeProps = {
              userId: userData.userId,
              userName: userData.userName,
              userEmail: userData.userEmail,
              bookings: bookingsResponse.data.map(booking => ({
                bookingId: booking.bookingId.toString(),
                destinationName: booking.destination.destinationName,
                checkIn: new Date(booking.checkIn).toLocaleDateString(),
                checkOut: new Date(booking.checkOut).toLocaleDateString(),
              })),
            };
            setUser(userWithBookings);
          })
          .catch(bookingsError => console.error('Error fetching user bookings', bookingsError));
      })
      .catch(userError => console.error('Error fetching user data', userError));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }
  const id = user.userId;
  console.log("userId: ", id);
  return (
    <div >
      <div style={containerStyle}>
        <div style={buttonContainerStyle}>
          <img src="../home_images/globe.png" alt="Logo" style={logoStyle} />
          <div style={siteNameStyle}>WanderScape</div>
          <Link to="/Destinations">
            <button style={buttonStyle}>View Our Destinations</button>
          </Link>
          <Link to= '/Booking/{id}'>
            <button style={buttonStyle}>Book a Trip</button>
          </Link>
        </div>
        <h2 style={titleStyle}>Welcome to the Homepage</h2>
      </div>

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
                  <li key={index}>
                    
                     Booking ID: {booking.bookingId} Destination: {booking.destinationName} Check-in: {booking.checkIn ? new Date(booking.checkIn).toLocaleDateString() : 'N/A'} Check-out: {booking.checkOut} 

                  </li>
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
