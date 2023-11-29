import React from "react";

export const textStyle: React.CSSProperties = {
  textAlign: 'center',
  color: "black",
  fontFamily: 'Playfair Display',
  fontSize: '50px',
}

export const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '100px', // Adjust the maximum width as needed
  margin: '0 auto', // Center the container
};

export const destButtonStyle: React.CSSProperties = {
  position: 'relative',
  width: '930px',
  height: '473px',  // Make the button take up 100% of the container width
  // aspectRatio: '2 / 1',
  borderRadius: '0px',
  border: 'none',
  margin: '10px 10px',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
  backgroundColor: 'none'
};

export const forImgStyle: React.CSSProperties = {
  position: 'absolute', // Set position to absolute
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%px', // Set the overlay's height to 100% of the button
  backgroundColor: 'rgba(0, 0, 0, 0.4)',

}

export const buttonTextOverlayStyle: React.CSSProperties = {
  position: 'relative', // Add absolute positioning to the text
  top: '-50%', // Adjust this value to vertically center the text
  left: '50%', // Adjust this value to horizontally center the text
  transform: 'translate(-50%, -50%)', // Center the text both vertically and horizontally
  color: 'white', // Set the text color
  textAlign: 'center', // Center the text within the button
  fontSize: '50px',
  fontFamily: 'Playfair Display',
};