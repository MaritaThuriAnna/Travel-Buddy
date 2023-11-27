import React from "react";

export const textStyle: React.CSSProperties ={
    textAlign: 'center',
    color : "palevioletred",
    outline : "black"
}

export const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px', // Adjust the maximum width as needed
    margin: '0 auto', // Center the container
  };

  export const destButtonStyle: React.CSSProperties = {
    width: '100%',
    aspectRatio: '2 / 1',
    borderRadius: '10px', 
    margin: '10px 0', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };