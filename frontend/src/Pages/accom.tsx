import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { buttonContainerStyle, containerStyle, logoStyle, siteNameStyle } from '../Components/Home.styles';
import './AccomStyles.css';
const Accommodations = () => {
    const { destinationId } = useParams<{ destinationId: string | undefined }>();
    const [accommodations, setAccommodations] = useState<any[]>([]); 

    console.log(destinationId);

    useEffect(() => {
        if (destinationId) {
            axios
                .get(`http://localhost:8080/Accomodation/${destinationId}`)
                .then(response => setAccommodations(response.data))
                .catch(error => console.error('Error fetching accommodations', error));
        }
    }, [destinationId]);

    if (!accommodations.length) {
        return <div className="loading-spinner" />;
    }

    const imageSources: {
        [key: number]: {
            img1: string;
            img2: string;
        };
    } = {
        1: {
            img1: '/accomm_images/budget_inn.jpg',
            img2: '/accomm_images/cozy_hostel.jpg',
        },
    };

    const destinationIndexMap: Record<string, number> = {
        '3': 1,
        // 'New York, USA': 2,
        // 'London, United Kingdom': 3,
        // 'Tokyo, Japan': 4,
        // 'Sydney, Australia': 5,
        // 'Cluj-Napoca, Romania': 6,
    };

    let accomodationName = '';
    let accomodationType = '';
    let accomodationPrice = '';
    

    console.log("Available destination keys:", Object.keys(destinationIndexMap));
    const destinationIndex = destinationIndexMap[destinationId || ''] || 0;
    console.log("dest index:", destinationIndex);

    return (
        <div style={containerStyle}>
            <div style={buttonContainerStyle}>
                <img src="/home_images/globe.png" alt="Logo" style={logoStyle} />
                <div style={siteNameStyle}>WanderScape</div>
            </div>
            <div className='accom_card'>
                {/* <h2>Accommodations in {destinationId}</h2> */}

                <ul>
                    {accommodations.map((accommodation, index) => (
                        

                        <div key={accommodation.accomodationId}>
                            <div className="rectangle"></div>
                                <img className={`img1`} src={imageSources[destinationIndex].img1} />
                                <img className={`img2`} src={imageSources[destinationIndex].img2} />
                                <div className="accom_name">{accommodation.accomodationName}</div>
                                <div className="accom_type">Type: {accommodation.accomodationType}</div>
                                <div className="price">Price per Night: ${accommodation.accomodationPricePerNight}</div>
                            
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Accommodations;
