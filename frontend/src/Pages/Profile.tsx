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

interface Booking {
  bookingId: number;
  userId: number;
  destinationId: number;
  checkIn: string;
  checkOut: string;
}

const Profile = (): JSX.Element => {

  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [editedUser, setEditedUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [destinationNames, setDestinationNames] = useState<{ [key: number]: string }>({});

  console.log("user id first: ", userId);

  useEffect(() => {

    axios.get<User>(`http://localhost:8080/User/${userId}`)
      .then(response => {
        const userData = response.data;
        setUser(userData);
        setEditedUser(userData);
      })
      .catch(error => {
        console.error('Error fetching user data', error);
      });

    axios.get<Booking[]>(`http://localhost:8080/Bookings/FindByUserId/${userId}`)
      .then(response => {
        const userBookings = response.data;
        setBookings(userBookings);
      })
      .catch(error => {
        console.error('Error fetching user bookings', error);
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
    axios
      .put('http://localhost:8080/User/Update', editedUser)
      .then(response => {
        console.log('User updated:', response.data);
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  const handleDeleteBooking = (bookingId: number) => {
    axios
      .delete(`http://localhost:8080/Bookings/Delete/${bookingId}`)
      .then(() => {
        // After successful deletion, refetch bookings
        axios.get<Booking[]>(`http://localhost:8080/Bookings/FindByUserId/${userId}`)
          .then(response => {
            const userBookings = response.data;
            setBookings(userBookings);
          })
          .catch(error => {
            console.error('Error fetching user bookings', error);
          });
      })
      .catch(error => {
        console.error('Error deleting booking:', error);
      });
  };

  useEffect(() => {
    const destinationIds = bookings
      .map((booking) => booking.destinationId)
      .filter((destinationId) => destinationId !== undefined); 
  
    console.log('Destination IDs:', destinationIds);
  
    destinationIds.forEach((destinationId) => {
      axios
        .get(`http://localhost:8080/Destination/${destinationId}`)
        .then((response) => {
          const destinationName = response.data.destinationName;
          console.log(`Destination Name for ID ${destinationId}:`, destinationName);
          setDestinationNames((prevNames) => ({
            ...prevNames,
            [destinationId]: destinationName,
          }));
        })
        .catch((error) => {
          console.error(`Error fetching destination name for ID ${destinationId}`, error);
        });
    });
  }, [bookings]);
  
  
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

        <div>
          <h2>Your Bookings</h2>
          {bookings.map((booking) => (
            <div key={booking.bookingId}>
              <p>Destination: {destinationNames[booking.destinationId]}</p>
              <p>Booking ID: {booking.bookingId}</p>
              <p>Booking Date: {booking.checkIn} - {booking.checkOut}</p>
              <button onClick={() => handleDeleteBooking(booking.bookingId)}>
                Delete Booking
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Profile;
