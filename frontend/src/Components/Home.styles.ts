// Home.styles.ts
import React from 'react';

export const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start', // Align items at the top
  height: '100vh', // Set the height to the viewport height
  backgroundColor: 'white',
  // padding: '20px',
};

export const titleStyle: React.CSSProperties = {
  display: 'flex',
  position: 'fixed',
  top: '20%',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '2em',
  fontFamily: 'Playfair Display',
  color: 'black',
  fontWeight: 'bold',
  marginBottom: '20px',
};

export const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row', // Change 'row-reverse' to 'row'
  alignItems: 'center',
  justifyContent: 'space-between', // Align items at the top and space between
  backgroundColor: 'black',
  padding: '10px',
  borderRadius: '10px',
  width: '100%',
  height: '70px',
  marginRight: '20 px',
};

export const siteNameStyle: React.CSSProperties = {
  color: 'white',
  fontFamily: 'Playfair Display',
  fontSize: '1.5em',
  flexGrow: 1, 
  //marginLeft: '20px', // Adjust margin as needed
};

export const logoStyle: React.CSSProperties = {
  width: '65px', // Adjust the width of the logo
  height: '50px', // Adjust the height of the logo
  marginRight: '10px', // Adjust margin as needed
};

export const buttonStyle: React.CSSProperties = {
  margin: '5px',
  // marginLeft: '20px', // Adjust margin as needed
  padding: '10px', // Adjust padding as needed
  backgroundColor: 'white', // White background for the buttons
  color: 'black', // Black text color
  border: 'none', // Remove button border
  borderRadius: '5px', // Add border-radius for rounded corners
  cursor: 'pointer', // Show pointer cursor on hover
  fontFamily: 'Playfair Display',
};

export const userStyleHeader: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '20px',
  fontFamily: 'Playfair Display',
  color: 'white',
  fontWeight: 'bold',
  marginBottom: '10px',
};

export const userStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  fontSize: '15px',
  fontFamily: 'Playfair Display',
  color: 'white',
  fontWeight: 'bold',
  marginBottom: '10px',
};

export const userStyleContainer: React.CSSProperties = {
  width: '300px',
  height: '350px', // Set the height as needed
  position: 'fixed',
  display: 'box',
  top: '50%', // Center vertically
  transform: 'translateY(-50%)', // Center vertically
  left: '20px', // Adjust the left margin as needed
  backgroundColor: 'black',
  padding: '10px',
  borderRadius: '10px',
};