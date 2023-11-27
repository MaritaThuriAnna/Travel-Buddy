import React from "react";

export const containerStyle : React.CSSProperties ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Set the height to the viewport height
    backgroundColor: '#E9E1CF',
    padding: '20px',
    
    //border: '2px solid #333', // Border around the colored square
    //borderRadius: '10px', // Border radius for rounded corners
}

export const headingStyle : React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '2em', // Set your desired font size
    fontFamily: 'Arial, sans-serif', // Set your desired font family
    color : "#5C90A0",
    fontWeight: 'bold', // Set font weight if needed
    marginBottom: '20px', // Add margin at the bottom for spacing
  }