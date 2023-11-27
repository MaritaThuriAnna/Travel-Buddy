//Loin.Styles.ts:
import React from "react";

export const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2em', // Set your desired font size
    fontFamily: 'sans-serif', // Set your desired font family
    color: "#5C90A0",
}

export const parentDivStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: '50%', // Use percentage value
    transform: 'translateX(-50%)', // Center the element horizontally
}

export const loginButtonStyle: React.CSSProperties = {
    position: 'relative',
    alignContent: 'center',
    justifyContent: 'center',
    left: 55,
    top: 30,
    transform: 'translateX(-50%)', // Center the element horizontally
    marginTop: 10,
}