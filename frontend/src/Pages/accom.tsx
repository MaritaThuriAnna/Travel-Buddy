import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Accom {
    accomodationId: number;
    accomodationName: string;
}

export const Accomodations = (): JSX.Element => {
    const { destinationId } = useParams<{ destinationId: string }>();
    const [accommodations, setAccommodations] = useState<Accom[]>([]);

    useEffect(() => {
        axios.get<Accom[]>(`http://localhost:8080/Destinations/${destinationId}/Accommodations`)
            .then(response => setAccommodations(response.data))
            .catch(error => console.error('Error fetching accommodations', error));
    }, [destinationId]);

    return (
        <div>
            <h2>Accommodations for this destination</h2>
            <ul>
                {accommodations.map(accommodation => (
                    <li key={accommodation.accomodationId}>{accommodation.accomodationName}</li>
                ))}
            </ul>
        </div>
    );
};