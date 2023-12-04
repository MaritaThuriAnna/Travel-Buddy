//Loin.Styles.ts:
import React from "react";

export const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '25px', // Set your desired font size
    fontFamily: 'Playfair Display',
    color: 'black',
}

export const parentDivStyle: React.CSSProperties = {
    display: 'flex',
    margin: '20px auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '350px',
    height: '400px',
    // margin: '0 auto',
    padding: '20px',
    // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent pink

  };
  

export const loginButtonStyle: React.CSSProperties = {
    position: 'relative',
    alignContent: 'center',
    justifyContent: 'center',
    left: 125,
    right: 125,
    top: 75,
    bottom: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    transform: 'translateX(-50%)', // Center the element horizontally
    marginTop: '10px',
    fontFamily: 'Playfair Display',
    color: 'white',
    backgroundColor: 'black',
    padding: '10px',
    width: '70%', // Make the button fill the container's width
};


export const headerContainerStyle: React.CSSProperties = {
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