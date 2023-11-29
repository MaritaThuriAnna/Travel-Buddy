import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { buttonTextOverlayStyle, containerStyle, destButtonStyle, forImgStyle, textStyle } from './destinations.styles';
import { Link } from 'react-router-dom';

interface Destination {
  destinationId: number;
  destinationName: string;

}

export const Destinations = (): JSX.Element => {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    axios.get<Destination[]>("http://localhost:8080/Destination/ReadAll")
      .then(response => setDestinations(response.data))
      .catch(error => console.error('Error fetching destinations', error));
  }, []);

  function generateImageUrl(destinationName: string) {
    const imageUrl = `../destination_images/${destinationName}.jpg`;
    console.log('Generated image URL:', imageUrl);
    return imageUrl;
  }

  return (
    <div>
      <h2 style={textStyle}>Choose your next destination!</h2>
      <div style={containerStyle}>
        {destinations.map(destination => {
          const image_Url = generateImageUrl(destination.destinationName);
          return (
            <div key={destination.destinationId}>
              <Link to={`/Destinations/${destination.destinationId}`}>
              <button style={destButtonStyle}>
                {/* <div style={forImgStyle}></div> */}
                  <img src={image_Url} />
                  <div style={buttonTextOverlayStyle}>
                    {destination.destinationName}
                  </div>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
