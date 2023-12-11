import React from 'react';
import Select from 'react-select';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { styled } from '@mui/system';

export const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100vh',
    backgroundColor: 'white',
    padding: '15px',
    marginTop: '10px', // Add marginTop to push the container down
  };

export const bookingSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the booking components horizontally
    width: '100%', // Adjust the width as needed
};

export const headerContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: '10px',
    borderRadius: '10px',
    width: '100%',
    height: '100px',
    marginBottom: '10px', // Adjust the marginBottom as needed
    maxWidth: '1000px', // Set the maxWidth for consistency
  };

  export const destinationContainer: React.CSSProperties = {
    // maxWidth: '1000px', // Set the same maxWidth for consistency
    width: '100%', // Use percentage for responsiveness
    // height: '100px',
    display: 'flex',
    margin: 'auto',
    left: '10px',
    backgroundColor: 'black',
    padding: '10px',
    borderRadius: '10px',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: '10px',
  };

export const selectDestinationStyle: React.CSSProperties = {
    width: '33%', // Adjust the width as needed
    marginBottom: '10px',
    color: 'black', // Set text color to black
};

export const selectAccommodationStyle: React.CSSProperties = {
    width: '33%', // Adjust the width as needed
    marginBottom: '10px',
    color: 'black', // Set text color to black
};

export const selectDatesStyle: React.CSSProperties = {
    width: '33%', // Adjust the width as needed
    // marginBottom: '10px',
};

export const bookButtonStyle: React.CSSProperties = {
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Playfair Display',
    display: 'flex',
    justifyContent: 'center', // Center the text horizontally
    alignItems: 'center', // Center the text vertically
    margin: 'auto',
    height: '40px',
    width: '200px',
  };
  
