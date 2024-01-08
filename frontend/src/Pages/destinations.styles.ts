import React from "react";

export const textStyle: React.CSSProperties = {
  textAlign: 'center',
  color: "white",
  fontFamily: 'Playfair Display',
  // top: '-50px',
  fontSize: '30px',
  flexGrow: 1,
}

export const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const destButtonContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

export const destButtonStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '450px',
  height: '450px',
  margin: '10px',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
};

export const forImgStyle: React.CSSProperties = {
  // position: 'absolute',
  // top: 0,
  // right: 0,
  // bottom: 0,
  // left: 0,
  objectFit: 'cover',
  width: '100%',
  height: '100%px', 
  backgroundColor: 'rgba(0, 0, 0, 0.5)',

}

export const buttonTextOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  color:'white',
  
  left: '50%',
  transform:  'translate(-50%, -50%)',
  textAlign: 'center',
  fontSize: '50px', 
  fontFamily: 'Playfair Display',
};