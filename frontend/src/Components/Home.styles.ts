import React from 'react';

export const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'flex-start',
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
  textAlign: 'center', 
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
  marginBottom: '10px', 
};
export const profileButtonStyle: React.CSSProperties = {
  position: 'relative',
  alignContent: 'center',
  justifyContent: 'center',
  bottom: '10px',
  cursor: 'pointer',
  borderRadius: '5px',
  marginTop: '10px',
  fontFamily: 'Playfair Display',
  color: 'white',
  backgroundColor: 'black',
  padding: '10px',
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
  fontSize: '35px',
  fontFamily: 'Playfair Display',
  color: 'black',
  fontWeight: 'bold',
  marginBottom: '10px',
};

export const userStyle: React.CSSProperties = {
  marginTop: '10px',
  fontSize: '15px',
  fontFamily: 'Playfair Display',
  color: 'black',
  fontWeight: 'bold',
  marginBottom: '20px',
};

export const userStyleContainer: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  position:'relative',
  height: '350px',
  // transform: 'translateXY(-50%)',
  margin: 'auto 10px',
  // left: '460px',
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '10px',
  alignItems: 'center',
  top: '-230px',
  justifyContent:'center'
};

export const promoImgContainer : React.CSSProperties ={
  height: '40%',
  left: '5px',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  // backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
  backgroundColor: 'none',
  position: 'absolute',
  top: '120px',
  width: '99%',
  padding: '5px',
}

export const promoImgStyle: React.CSSProperties ={
  position: 'absolute', 
  width: '99%',
  height: '100%', 

}

export const promoImgOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
  fontFamily: 'Playfair Display',
  fontSize: '43px',
  fontWeight: 'bold',
};

export const arrowContainerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  cursor: 'pointer',
};

export const leftArrowContainerStyle: React.CSSProperties = {
  ...arrowContainerStyle,
  left: '10px',
  transform: 'translateY(-50%)',
};



export const rightArrowContainerStyle: React.CSSProperties = {
  ...arrowContainerStyle,
  right: '10px',
  transform: 'translateY(-50%)',
};

export const arrowStyle: React.CSSProperties = {
  fontSize: '2em',
  color: 'white',
  transition: 'color 0.3s', 
};

export const hoverStyle: React.CSSProperties = {
  color: 'rgba(255, 255, 255, 0.8)',
};

export const indicatorContainerStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
};

export const indicatorStyle: React.CSSProperties = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  margin: '0 5px',
  backgroundColor: 'white',
  cursor: 'pointer',
};

export const squareContainerRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center', 
  flexWrap: 'wrap',
  alignItems: 'flex-start', 
  top: '-200px',
  position: 'relative',
  cursor: 'pointer',
};

export const squareContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '300px',
  height: '300px',
  margin: '10px',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export const darkOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  pointerEvents: 'none', 
};

export const squareImageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out',
};

export const squareTextOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  // right: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'right',
  opacity: 1,
  transition: 'opacity 0.3s ease-in-out',
  color:'white',
  fontFamily: 'Playfair Display',
  fontSize: '50px',
};

export const squareContainerHoverStyle: React.CSSProperties = {
  ...squareContainerStyle,
};

export const squareContainerHoveredStyle: React.CSSProperties = {
  ...squareContainerStyle,
  backgroundColor: 'rgba(0, 0, 0, 0.3)', 
};

export const squareImageHoveredStyle: React.CSSProperties = {
  ...squareImageStyle,
  transform: 'scale(1.1)', 
};

export const squareTextOverlayHoveredStyle: React.CSSProperties = {
  ...squareTextOverlayStyle,
  opacity: 5, 
  color:'white',
  fontFamily: 'Playfair Display',
  fontSize: '50px',
};
