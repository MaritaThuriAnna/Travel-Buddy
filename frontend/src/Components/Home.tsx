// Home.tsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { containerStyle, buttonContainerStyle, squareContainerRowStyle, buttonStyle, userStyleHeader, userStyleContainer, userStyle, titleStyle, siteNameStyle, logoStyle, profileButtonStyle, promoImgStyle, promoImgContainer, promoImgOverlayStyle, leftArrowContainerStyle, hoverStyle, arrowStyle, squareContainerHoveredStyle, squareContainerHoverStyle, squareTextOverlayHoveredStyle, squareImageHoveredStyle, squareTextOverlayStyle, squareImageStyle, darkOverlayStyle } from './Home.styles';
import axios from 'axios';
import { buttonTextOverlayStyle, textStyle } from '../Pages/destinations.styles';
import BookingDetails from '../Pages/BookingDetails';

interface HomeProps {
  userId: number;
  userName: string;
  userEmail: string;
  bookings: string[];
}

interface Booking {
  bookingId: number;
  user: {
    userId: number;
  };
  destination: {  // Corrected from desinationId to destination
    desinationId: number;
    destinationName: string
  };
  accomodationId: number;
  checkIn: number;
  checkOut: number;
}


const Home = (): JSX.Element => {

  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<HomeProps | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLeftArrowHovered, setIsLeftArrowHovered] = useState(false);
  const [isSquareHovered, setIsSquareHovered] = useState(false)

  console.log("user id first: ", userId);

  useEffect(() => {
    // Fetch user information
    axios.get<HomeProps>(`http://localhost:8080/User/${userId}`)
      .then(response => {
        const userData = response.data;
        const userID = response.data.userId;

        axios.get<Booking[]>(`http://localhost:8080/Bookings/ReadAll`)
          .then(bookingsResponse => {
            const userWithBookings: HomeProps = {
              userId: userData.userId,
              userName: userData.userName,
              userEmail: userData.userEmail,
              bookings: bookingsResponse.data.map(booking => booking.bookingId.toString()), // Adjust based on your actual booking properties
            };
            setUser(userWithBookings);
          })
          .catch(bookingsError => console.error('Error fetching user bookings', bookingsError));
      })
      .catch(userError => console.error('Error fetching user data', userError));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }
  const id = user.userId;
  console.log("userId: ", id);

  const images = ["../home_images/mountains2.jpg", "../home_images/under_sea_level.jpg", "../home_images/fin photo2.jpg"];
  const texts = ["wether you prefer the view from the top", "or from under the sea level", "we will find the perfect adventure for you"]; // Add corresponding text for each image

  const handleArrowClick = (direction: 'next' | 'prev') => {
    const newIndex = direction === 'next' ? (currentImageIndex + 1) % images.length : (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div >

      <div style={containerStyle}>

        <div style={buttonContainerStyle}>

          <img src="../home_images/globe.png" alt="Logo" style={logoStyle} />

          <div style={siteNameStyle}>WanderScape</div>

          <Link to="/Destinations">
            <button style={buttonStyle}>View Our Destinations</button>
          </Link>

          <Link to={`/Booking/${user.userId}`}>
            <button style={buttonStyle}>Book a Trip</button>
          </Link>

        </div>

      </div>

      <div style={promoImgContainer}>
        <img src={images[currentImageIndex]} style={promoImgStyle} />
        <div style={promoImgOverlayStyle}>{texts[currentImageIndex]}</div>

        <div
          style={{ ...leftArrowContainerStyle, ...(isLeftArrowHovered ? hoverStyle : {}) }}
          onMouseEnter={() => setIsLeftArrowHovered(true)}
          onMouseLeave={() => setIsLeftArrowHovered(false)}
          onClick={() => handleArrowClick('prev')}
        >
          <div style={arrowStyle}>{'<'}</div>
        </div>

        <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}>
          <div style={{ fontSize: '2em', color: 'white' }} onClick={() => handleArrowClick('next')}>{'>'}</div>
        </div>

      </div>



      {user && (
        <div style={userStyleContainer}>
          <h3 style={userStyleHeader}>Your Info</h3>
          {/* <p style={userStyle}>ID: {user.userId}</p> */}
          <p style={userStyle}>User Name: {user.userName}</p>
          <p style={userStyle}>Email: {user.userEmail}</p>
          {/* {user.bookings && user.bookings.length > 0 ? (
            <div>
              <p style={userStyle}>Upcoming trips:</p>
              <ul style={userStyle}>
                {user.bookings.map((booking, index) => (
                  <li key={index}>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p style={userStyle}>You haven't booked anything yet.</p>
          )} */}
          
          <Link to={`/Profile/${user.userId}`}>
            <button style={profileButtonStyle}>Edit Profile</button>
          </Link>

        </div>
      )}

      <div style={squareContainerRowStyle}>
        <div
          style={isSquareHovered ? squareContainerHoveredStyle : squareContainerHoverStyle}
          onMouseEnter={() => setIsSquareHovered(true)}
          onMouseLeave={() => setIsSquareHovered(false)}
        >
          <img src="../home_images/couples beach.jpg" alt="Image 1" style={isSquareHovered ? squareImageHoveredStyle : squareImageStyle} />
          {isSquareHovered && <div style={darkOverlayStyle}></div>}
          <div style={isSquareHovered ? squareTextOverlayHoveredStyle : squareTextOverlayStyle}>Romantic Resort Getaway</div>
          
        </div>

        <div
          style={isSquareHovered ? squareContainerHoveredStyle : squareContainerHoverStyle}
          onMouseEnter={() => setIsSquareHovered(true)}
          onMouseLeave={() => setIsSquareHovered(false)}
        >
          <img src="../home_images/family camping.jpg" alt="Image 2" style={isSquareHovered ? squareImageHoveredStyle : squareImageStyle} />
          {isSquareHovered && <div style={darkOverlayStyle}></div>}
          <div style={isSquareHovered ? squareTextOverlayHoveredStyle : squareTextOverlayStyle}>Family Camping Trip</div>
        </div>

        <div
          style={isSquareHovered ? squareContainerHoveredStyle : squareContainerHoverStyle}
          onMouseEnter={() => setIsSquareHovered(true)}
          onMouseLeave={() => setIsSquareHovered(false)}
        >
          <img src="../home_images/solo ski.jpg" alt="Image 2" style={isSquareHovered ? squareImageHoveredStyle : squareImageStyle} />
          {isSquareHovered && <div style={darkOverlayStyle}></div>}
          <div style={isSquareHovered ? squareTextOverlayHoveredStyle : squareTextOverlayStyle}>Solo Ski Adventure</div>
        </div>

      </div>

    </div>
  );
};

export default Home;
