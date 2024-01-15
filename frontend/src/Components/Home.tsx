// Home.tsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { containerStyle, buttonContainerStyle, squareContainerRowStyle, buttonStyle, userStyleHeader, userStyleContainer, userStyle, titleStyle, siteNameStyle, logoStyle, profileButtonStyle, promoImgStyle, promoImgContainer, promoImgOverlayStyle, leftArrowContainerStyle, hoverStyle, arrowStyle, squareContainerHoveredStyle, squareContainerHoverStyle, squareTextOverlayHoveredStyle, squareImageHoveredStyle, squareTextOverlayStyle, squareImageStyle, darkOverlayStyle, scrollBoxStyle, scrollListStyle } from './Home.styles';
import axios from 'axios';

interface HomeProps {
  userId: number;
  userName: string;
  userEmail: string;
  bookings: string;
}

interface Booking {
  bookingId: number;
  // userId: number;
  checkIn: number;
  checkOut: number;
}



const Home = (): JSX.Element => {

  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<HomeProps | null>({
    userId: 0, 
    userName: '',
    userEmail: '',
    bookings: '',
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLeftArrowHovered, setIsLeftArrowHovered] = useState(false);
  const [isSquareHovered, setIsSquareHovered] = useState(false)

  const [bookings, setBookings] = useState<Booking[]>([]);

  console.log("user id first: ", userId);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const userDataResponse = await axios.get<HomeProps>(`http://localhost:8080/User/${userId}`);
        if (!userDataResponse.data) {
          console.error('User data not found');
          return;
        }
        const userData = userDataResponse.data;
        const userWithBookings: HomeProps = {
          userId: userData.userId,
          userName: userData.userName,
          userEmail: userData.userEmail,
          bookings: userData.bookings
        };
        setUser(userWithBookings);

        const bookingsResponse = await axios.get<Booking[]>(`http://localhost:8080/Bookings/FindByUserId/${userId}`);
        if (!bookingsResponse.data) {
          console.error('Bookings not found');
          return;
        }

        const userBookings: Booking[] = bookingsResponse.data.map((booking) => ({
          bookingId: booking.bookingId,
          // userId: booking.userId,
          checkIn: booking.checkIn,
          checkOut: booking.checkOut,
        }));

        setBookings(userBookings);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }
  const id = user.userId;
  console.log("userId: ", id);

  const images = ["../home_images/mountains2.jpg", "../home_images/under_sea_level.jpg", "../home_images/fin photo2.jpg"];
  const texts = ["wether you prefer the view from the top", "or from under the sea level", "we will find the perfect adventure for you"];

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



      <div>
        {user && (
          <div style={userStyleContainer}>
            <h3 style={userStyleHeader}>User Info:</h3>
            <p style={userStyle}>User Name: {user.userName}</p>
            <p style={userStyle}>Email: {user.userEmail}</p>

            {bookings.length > 0 ? (
              <div >
                <h3 style={userStyle}>Upcoming Trips:</h3>
                <div style={scrollBoxStyle}>
                  <ul style={scrollListStyle}>
                    {bookings.map((booking) => (
                      <li key={booking.bookingId} style={userStyle}>
                        <p style={userStyle}>Booking ID: {booking.bookingId}</p>
                        <p style={userStyle}>Check-In: {booking.checkIn}</p>
                        <p style={userStyle}>Check-Out: {booking.checkOut}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p style={userStyle}>No bookings found.</p>
            )}
            <Link to={`/Profile/${user.userId}`}>
            <button style={profileButtonStyle}>Edit Profile</button>
          </Link>
          </div>
        )}


      </div>
      );

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