// Home.styles.ts
import React from 'react';

export const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '100vh',
  backgroundColor: 'white',
  padding: '15px',
};

export const titleStyle: React.CSSProperties = {
  fontSize: '2em',
  fontFamily: 'Playfair Display',
  color: 'black',
  fontWeight: 'bold',
  marginBottom: '0px',
  textAlign: 'center', // Center text for better responsiveness
};

export const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'black',
  padding: '5px',
  borderRadius: '10px',
  width: '100%',
  height: '70px',
  marginBottom: '10px', // Add margin at the bottom for spacing
};

export const siteNameStyle: React.CSSProperties = {
  color: 'white',
  fontFamily: 'Playfair Display',
  fontSize: '1.5em',
  flexGrow: 1,
};

export const logoStyle: React.CSSProperties = {
  width: '65px',
  height: '50px',
  marginRight: '10px',
};

export const buttonStyle: React.CSSProperties = {
  margin: '5px',
  padding: '10px',
  backgroundColor: 'white',
  color: 'black',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontFamily: 'Playfair Display',
};

export const userStyleHeader: React.CSSProperties = {
  fontSize: '20px',
  fontFamily: 'Playfair Display',
  color: 'white',
  fontWeight: 'bold',
  marginBottom: '10px',
};

export const userStyle: React.CSSProperties = {
  marginTop: '10px',
  fontSize: '15px',
  fontFamily: 'Playfair Display',
  color: 'white',
  fontWeight: 'bold',
  marginBottom: '20px',
};

export const userStyleContainer: React.CSSProperties = {
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  height: '350px',
  top: '50px',
  transform: 'translateY(-50%)',
  margin: 'auto 10px', // Add margin for spacing
  left: '10px',
  backgroundColor: 'black',
  padding: '10px',
  borderRadius: '10px',
  alignItems: 'center',
};



// @media(max-width: 600px) {
//   export const buttonContainerStyle: React.CSSProperties = {
//     flexDirection: 'column', // Change to column layout for small screens
//     height: 'auto', // Adjust height to fit content
//   };

//   export const userStyleContainer: React.CSSProperties = {
//     width: '90%', // Adjust width for better responsiveness
//     left: '5%', // Center horizontally on small screens
//   };
// }
