import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
interface DestinationDetailProps {}

interface Destination {
    destinationId: number;
    destinationName: string;
    destinationLanguage: string;
    destinationCurrency: string;
    destinationTimezone: string;
}


const DestinationDetail = (): JSX.Element => {
    const { destinationId } = useParams<{ destinationId: string }>();
    //const {}
    const [destination, setDestination] = useState<Destination | null>(null);

    useEffect(() => {
        axios.get<Destination>(`http://localhost:8080/Destination/${destinationId}`)
            .then(response => setDestination(response.data))
            .catch(error => console.error('Error fetching destination details', error));
    }, [destinationId]);

    if (!destination) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{destination.destinationName}</h2>
            <p>
                <a>{destination.destinationLanguage }</a> |
                <a>{destination.destinationCurrency }</a> |
                <a>{destination.destinationTimezone }</a>
            </p>
            <Link to={`/Destinations/${destinationId}/Accommodations`}>View Accommodations</Link>
            <br />
            <Link to={`/Destinations/${destinationId}/Attractions`}>View Attractions</Link>
        </div>
    );
};

export default DestinationDetail;