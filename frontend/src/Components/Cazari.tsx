// CazariPage.tsx

import React from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  accommodations: string;
}

const Cazari = ({ accommodations }: Props) => {
  const location = useLocation();
  const { selectedAccommodation, dateRange } = location.state || {};


  return (
    <div>
      {/* <h2>Available Accommodations</h2>
      {accommodations.map((accommodation) => (
        <div key={accommodation.accomodationId}>
          <h3>{accommodation.accomodationName}</h3>
          <p>Destination: {accommodation.destination.destinationName}</p>
          <button onClick={() => handleBooking(accommodation)}>Book Now</button>
        </div> */}
      {/* ))} */}
    </div>
  );
};

export default Cazari;
