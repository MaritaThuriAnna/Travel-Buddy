import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { styled } from '@mui/system'; // Import styled from MUI

import {
    bookButtonStyle,
    containerStyle,
    destinationContainer,
    headerContainer,
    // bookingSectionStyle,
    // rowContainerStyle,
    selectAccommodationStyle,
    selectDatesStyle,
    selectDestinationStyle
} from './booking.styles';
import { buttonContainerStyle, logoStyle, siteNameStyle } from '../Components/Home.styles';
import SearchBar from '../Components/Searchbar';
import { Link, useParams } from 'react-router-dom';

const CustomDateRangePicker = styled(DateRangePicker)({
    width: '100%',
    '.rdrDefinedRangesWrapper': {
        display: 'none'
    }
});

interface Booking {
    bookingId: number;
    user: {
      userId: number;
    };
    destination: {  // Corrected from desinationId to destination
      desinationId: number;
    };
    accomodationId: number;
    checkIn: number;
    checkOut: number;
  }

interface Destination {
    destinationId: number;
    destinationName: string;
}

interface Accommodation {
    accomodationId: number;
    accomodationName: string;
    destination: {
        destinationId: number;
        destinationName: string;
    };

}

const Booking = (): JSX.Element => {
    const { userId } = useParams<{ userId: string }>();
    const [destinations, setDestinations] = useState([]);
    const [transformedDestinations, setTransformedDestinations] = useState([]);
    const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
    const [filteredAccommodations, setFilteredAccommodations] = useState<Accommodation[]>([]);
    const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const [destinationsResponse, accommodationsResponse] = await Promise.all([
                    fetch(`http://localhost:8080/Destination/ReadAll`),
                    fetch(`http://localhost:8080/Accomodation/ReadAll`),
                ]);

                if (!destinationsResponse.ok) {
                    throw new Error(`HTTP error! Status: ${destinationsResponse.status}`);
                }

                const destinationsData = await destinationsResponse.json();
                console.log('Fetched Destinations:', destinationsData);

                const transformedDestinationsData = destinationsData.map((destination: Destination) => ({
                    label: destination.destinationName,
                    value: destination.destinationId,
                }));
                setTransformedDestinations(transformedDestinationsData);

                if (!accommodationsResponse.ok) {
                    throw new Error(`HTTP error! Status: ${accommodationsResponse.status}`);
                }

                const accommodationsData = await accommodationsResponse.json();
                console.log('Fetched Accommodations:', accommodationsData);
                setAccommodations(accommodationsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDestinationChange = (selectedOption: any) => {
        // Handle the selected destination
        console.log('Selected Destination:', selectedOption);

        const filteredAccommodations = accommodations.filter(
            (accommodation) =>
                accommodation.destination.destinationId === selectedOption.value
        );
        console.log('Filtered Accommodations:', filteredAccommodations);

        // Reset filtered accommodations and selected accommodation when the destination changes
        setFilteredAccommodations(filteredAccommodations);
        setSelectedAccommodation(null);
    };

    const handleAccommodationChange = (selectedOption: any) => {
        // Handle the selected accommodation
        console.log('Selected Accommodation:', selectedOption);

        // Find the selected accommodation details from the filteredAccommodations array
        const selectedAccommodationDetails = filteredAccommodations.find(
            (accommodation) => accommodation.accomodationId === selectedOption.value
        );

        if (selectedAccommodationDetails) {
            setSelectedAccommodation(selectedAccommodationDetails);
        } else {
            console.log('Selected accommodation details not found.');
        }
    };

    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const handleDateChange = (ranges: any) => {
        const { startDate, endDate } = ranges.selection;

        console.log('Selected Dates:', {
            start: startDate.toLocaleDateString(),
            end: endDate.toLocaleDateString(),
        });

        setDateRange([ranges.selection]);
    };

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


    // const history = useHistory();

    const handleBookNow = async () => {
        if (!selectedAccommodation || !dateRange || dateRange.length === 0) {
            console.error('Invalid booking details');
            return;
        }

        const user_id = userId;

        const bookingData = {
            // Customize this based on your Booking class structure
            user_id,
            destinationId: selectedAccommodation.destination.destinationId,
            accommodationId: selectedAccommodation.accomodationId,
            checkIn: dateRange[0].startDate.toISOString(), // Convert to ISO string for consistency
            checkOut: dateRange[0].endDate.toISOString(),
        };

        try {
            const response = await fetch(`http://localhost:8080/Bookings/Insert`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            if (response.ok) {
                console.log('Booking successful');
            } else {
                console.error('Booking failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during booking:', error);
        }
    };


    return (
        <div>

            <div style={containerStyle}>

                <div style={buttonContainerStyle}>
                    <img src="../home_images/globe.png" alt="Logo" style={logoStyle} />
                    <div style={siteNameStyle}>WanderScape</div>
                </div>

                <div style={destinationContainer}>
                    <div style={selectDestinationStyle}>
                        <label>Select Destination:</label>
                        <Select
                            options={transformedDestinations}
                            onChange={handleDestinationChange}
                            isSearchable
                        />
                    </div>


                    <div style={selectAccommodationStyle}>
                        <label>Select Accommodation:</label>
                        <Select
                            options={filteredAccommodations.map((accommodation) => ({
                                label: accommodation.accomodationName,
                                value: accommodation.accomodationId,
                            }))}
                            isSearchable
                            onChange={handleAccommodationChange}
                        />
                    </div>

                    <div style={selectDatesStyle}>
                        <label>Select Dates:</label>
                        <CustomDateRangePicker
                            ranges={dateRange}
                            onChange={handleDateChange}
                        />
                    </div>
                </div>
            </div>
            <Link to={`/Booking/${userId}`}>
                <button style={bookButtonStyle}>Book a Trip</button>
            </Link>

        </div>

        // </div>
    );
};

export default Booking;
