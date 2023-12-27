import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import './DestinationDetail.css'; // Import your CSS file for styles
// import { containerStyle } from './destinations.styles';
import { buttonContainerStyle, buttonStyle, containerStyle, logoStyle, siteNameStyle } from '../Components/Home.styles';

interface DestinationDetailProps { }

interface Destination {
    destinationId: number;
    destinationName: string;
    destinationLanguage: string;
    destinationCurrency: string;
    destinationTimezone: string;
}

const DestinationDetail = (): JSX.Element => {
    const { destinationId } = useParams<{ destinationId: string }>();
    const [destination, setDestination] = useState<Destination | null>(null);

    useEffect(() => {
        axios
            .get<Destination>(`http://localhost:8080/Destination/${destinationId}`)
            .then(response => setDestination(response.data))
            .catch(error => console.error('Error fetching destination details', error));
    }, [destinationId]);

    if (!destination) {
        return <div className="loading-spinner" />; // Use a loading spinner
    }


    let destinationText1 = '';
    let destinationText2 = '';
    let destinationText3 = '';
    let destinationText4 = '';
    let destinationText5 = '';
    let destinationText6 = '';
    let destinationText7 = '';
    let destinationText8 = '';

    // Customize the text based on the destination
    switch (destination.destinationName) {
        case 'Paris, France':
            destinationText1 = `Paris, 
            often referred to as the "City of Love," 
            is a captivating destination 
            with a rich history, 
            breathtaking architecture,
            and a vibrant cultural scene`;
            destinationText2 = `Here's a glimpse of what Paris has to offer: `;
            destinationText3 = `Eiffel Tower`;
            destinationText4 = `The Eiffel Tower, one of the most iconic landmarks in the world, stands tall in the heart of Paris, France. Constructed in 1889 by Gustave Eiffel, the iron lattice tower offers breathtaking panoramic views of the city from its observation decks. Visitors can take an elevator or climb the stairs to reach the top, enjoying a stunning vista that includes the River Seine, the Champ de Mars, and the Trocadéro Gardens. Lit up beautifully at night, the Eiffel Tower is a symbol of romance and a must-visit attraction for anyone exploring Paris.`;
            destinationText5 = `Notre-Dame Cathedral`;
            destinationText6 = `Notre-Dame Cathedral, a masterpiece of French Gothic architecture, is a cultural and religious landmark situated on the Île de la Cité. Construction began in the 12th century, and the cathedral has witnessed centuries of history. Known for its impressive flying buttresses, intricate gargoyles, and stunning rose windows, Notre-Dame is a symbol of Parisian heritage. While the cathedral endured a devastating fire in 2019, ongoing restoration efforts are working to restore this historical gem to its former glory.`;
            destinationText7 = `Louvre Museum`;
            destinationText8 = `The Louvre Museum, housed in the Louvre Palace, is the largest art museum globally and a historic monument in Paris. Home to an extensive collection of art and artifacts, the Louvre showcases works from diverse cultures and time periods. Among its most famous exhibits are Leonardo da Vinci's "Mona Lisa," the ancient Greek statue "Venus de Milo," and the grand painting "Liberty Leading the People" by Eugène Delacroix. The Louvre's vast galleries span from ancient civilizations to the Renaissance, making it a captivating destination for art enthusiasts and history lovers alike.`;
            break;
        default:
            destinationText1 = 'Explore the beauty and charm of this destination!';
            break;
    }

    return (
        <div style={containerStyle}>
                <div style={buttonContainerStyle}>
                    <img src="../home_images/globe.png" alt="Logo" style={logoStyle} />
                    <div style={siteNameStyle}>WanderScape</div>
                </div>
            <div className="destination-card">
                <h2>{destination.destinationName}</h2>
                <p> {destinationText1}</p>
                <h2 className='glimpse'> {destinationText2}</h2>

                <h2 className='eiffel_name'>{destinationText3}</h2>
                <h2 className='eiffel_text'>{destinationText4}</h2>

                <h2 className='ntrdm_name'>{destinationText5}</h2>
                <h2 className='ntrdm_text'>{destinationText6}</h2>

                <h2 className='luvr_name'>{destinationText7}</h2>
                <h2 className='luvr_text'>{destinationText8}</h2>


                <img className='imgParis' src={'../detail_images/paris/paris.jpg'}></img>
                <img className='imgEiffel' src={"../detail_images/paris/eiffel.jpg"}></img>
                <img className='imgNtrdm' src={"../detail_images/paris/notre_dame.jpg"}></img>
                <img className='imgLuvr' src={"../detail_images/paris/louvre.jpg"}></img>

                <Link to={`/Destinations/${destinationId}/Accommodations`}>View Accommodations</Link>
                </div>

        </div>

    );
};

export default DestinationDetail;
