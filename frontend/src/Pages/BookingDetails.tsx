// BookingDetails.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface BookingDetailsProps {
  bookingId: string;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ bookingId }) => {
  const [bookingDetails, setBookingDetails] = useState<any | null>(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Bookings/Details/${bookingId}`);
        setBookingDetails(response.data);
      } catch (error) {
        console.error('Error fetching booking details', error);
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  if (!bookingDetails) {
    return <div>Error fetching details</div>;
  }

  return (
    <div>
      {/* <h2>Booking Details</h2> */}
      <p>Booking ID: {bookingDetails.bookingId}</p>
      <p>User: {bookingDetails.user.userName}</p>
      <p>Destination: {bookingDetails.destination.destinationName}</p>
      <p>Accommodation: {bookingDetails.accommodation.accommodationName}</p>
      <p>Check-In: {bookingDetails.checkIn}</p>
      <p>Check-Out: {bookingDetails.checkOut}</p>
    </div>
  );
};

export default BookingDetails;
