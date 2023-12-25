//Loin.Styles.ts:
import React from "react";

export const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px', // Set your desired font size
    fontFamily: 'Playfair Display',
    color: 'black',
}

export const parentDivStyle: React.CSSProperties = {
    display: 'flex',
    margin: '0px auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '350px',
    height: '400px',
    // margin: '0 auto',
    padding: '0px',
    // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent pink

  };

export const loginButtonStyle: React.CSSProperties = {
    position: 'relative',
    alignContent: 'center',
    justifyContent: 'center',
    left: 125,
    right: 125,
    top: 55,
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
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'black',
  padding: '5px',
  borderRadius: '10px',
  width: '100%',
  height: '70px',
  marginBottom: '10px', //
  };