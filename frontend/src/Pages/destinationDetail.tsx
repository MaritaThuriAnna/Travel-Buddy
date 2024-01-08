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
        return <div className="loading-spinner" />; 
    }


    console.log('Destination Index:', destinationId);

    let Text1 = '';
    let Text2 = '';
    let Text3 = '';
    let Text4 = '';
    let Text5 = '';
    let Text6 = '';
    let Text7 = '';
    let Text8 = '';

    switch (destination.destinationName) {
        case 'Paris, France':
            Text1 = `Paris, 
            often referred to as the "City of Love," 
            is a captivating destination 
            with a rich history, 
            breathtaking architecture,
            and a vibrant cultural scene`;
            Text2 = `Here's a glimpse of what Paris has to offer: `;
            Text3 = `Eiffel Tower`;
            Text4 = `The Eiffel Tower, one of the most iconic landmarks in the world, stands tall in the heart of Paris, France. Constructed in 1889 by Gustave Eiffel, the iron lattice tower offers breathtaking panoramic views of the city from its observation decks. Visitors can take an elevator or climb the stairs to reach the top, enjoying a stunning vista that includes the River Seine, the Champ de Mars, and the Trocadéro Gardens. Lit up beautifully at night, the Eiffel Tower is a symbol of romance and a must-visit attraction for anyone exploring Paris.`;
            Text5 = `Notre-Dame Cathedral`;
            Text6 = `Notre-Dame Cathedral, a masterpiece of French Gothic architecture, is a cultural and religious landmark situated on the Île de la Cité. Construction began in the 12th century, and the cathedral has witnessed centuries of history. Known for its impressive flying buttresses, intricate gargoyles, and stunning rose windows, Notre-Dame is a symbol of Parisian heritage. While the cathedral endured a devastating fire in 2019, ongoing restoration efforts are working to restore this historical gem to its former glory.`;
            Text7 = `Louvre Museum`;
            Text8 = `The Louvre Museum, housed in the Louvre Palace, is the largest art museum globally and a historic monument in Paris. Home to an extensive collection of art and artifacts, the Louvre showcases works from diverse cultures and time periods. Among its most famous exhibits are Leonardo da Vinci's "Mona Lisa," the ancient Greek statue "Venus de Milo," and the grand painting "Liberty Leading the People" by Eugène Delacroix. The Louvre's vast galleries span from ancient civilizations to the Renaissance, making it a captivating destination for art enthusiasts and history lovers alike.`;
            break;
        case 'New York, USA':
            Text1 = `New York, 
            known as "The Big Apple," 
            is a bustling metropolis 
            with iconic landmarks, 
            world-class entertainment,
            and diverse neighborhoods`;
            Text2 = `Here's a glimpse of what New York has to offer: `;
            Text3 = `Empire State Building`;
            Text4 = `The Empire State Building, an Art Deco masterpiece, is a symbol of New York City's skyline. Completed in 1931, this iconic skyscraper stands at 1,454 feet tall and offers stunning views of the city from its observation decks. Visitors can enjoy breathtaking panoramas, especially during sunset when the city lights up. The Empire State Building is a must-visit for those seeking a quintessential New York experience.`;
            Text5 = `Central Park`;
            Text6 = `Central Park, a sprawling oasis in the heart of Manhattan, is a haven for nature lovers and urban explorers. Designed by Frederick Law Olmsted and Calvert Vaux, the park features scenic landscapes, walking trails, and recreational activities. Visitors can paddle across the park's lakes, explore the Bethesda Terrace and Fountain, or simply relax amid the greenery. Central Park offers a serene escape from the bustling city streets.`;
            Text7 = `Statue of Liberty`;
            Text8 = `The Statue of Liberty, a symbol of freedom and democracy, stands proudly on Liberty Island in New York Harbor. Gifted by France to the United States in 1886, the statue represents hope and the pursuit of liberty. Visitors can take a ferry to Liberty Island, explore the museum, and climb to the crown for panoramic views of the city and the harbor. The Statue of Liberty is an enduring symbol of New York and the United States.`;
            break;
        case 'London, United Kingdom':
            Text1 = `London, 
                    a city rich in history and culture, 
                    offers a unique blend of tradition and modernity`;
            Text2 = `Here's a glimpse of what London has to offer: `;
            Text3 = `Big Ben`;
            Text4 = `Big Ben, officially known as the Elizabeth Tower, is an iconic symbol of London and the Houses of Parliament. Standing on the banks of the River Thames, this historic clock tower is a masterpiece of Victorian architecture. Visitors can admire Big Ben from Westminster Bridge and capture breathtaking views of the cityscape. The chimes of Big Ben are a distinctive sound of London and a must-see for tourists.`;
            Text5 = `The British Museum`;
            Text6 = `The British Museum, located in the heart of London, houses a vast collection of world art and artifacts. With a history dating back to 1753, the museum showcases treasures from various civilizations, including the Rosetta Stone and the Elgin Marbles. Visitors can explore the museum's galleries and delve into the fascinating stories of human history and culture.`;
            Text7 = `Tower Bridge`;
            Text8 = `Tower Bridge, an iconic bascule and suspension bridge, spans the River Thames and is a symbol of London's engineering prowess. Built in the late 19th century, Tower Bridge offers panoramic views of the city and the Tower of London. Visitors can walk across the high-level walkways or experience the glass-floored walkway for a thrilling perspective of the bridge and the river below.`;
            break;
        case 'Tokyo, Japan':
            Text1 = `Tokyo, 
            a dynamic metropolis, 
            seamlessly blends tradition and modernity`;
            Text2 = `Here's a glimpse of what Tokyo has to offer: `;
            Text3 = `Tokyo Tower`;
            Text4 = `Tokyo Tower, inspired by the Eiffel Tower, is a prominent landmark in Tokyo's skyline. Offering panoramic views of the city, this communications and observation tower is illuminated beautifully at night. Visitors can ascend the tower for breathtaking views of Tokyo's urban landscape and iconic landmarks.`;
            Text5 = `Senso-ji Temple`;
            Text6 = `Senso-ji Temple, located in Asakusa, is Tokyo's oldest temple and a symbol of the city's cultural heritage. The Thunder Gate, Nakamise-dori, and the main hall provide a captivating journey into traditional Japanese architecture and spirituality. Asakusa is a vibrant district with shopping streets and cultural experiences.`;
            Text7 = `Shibuya Crossing`;
            Text8 = `Shibuya Crossing, one of the busiest pedestrian crossings in the world, is a Tokyo landmark. Located outside Shibuya Station, this bustling intersection is surrounded by neon lights and giant video screens. Experience the energy of Shibuya Crossing and explore the vibrant Shibuya district with its shops, restaurants, and entertainment.`;
            break;
        case 'Sydney, Australia':
            Text1 = `Sydney, 
            a vibrant city with a stunning harbor, 
            offers a perfect blend of urban and natural attractions`;
            Text2 = `Here's a glimpse of what Sydney has to offer: `;
            Text3 = `Sydney Opera House`;
            Text4 = `Sydney Opera House, a UNESCO World Heritage Site, is an architectural marvel that graces the harbor. Designed by Jørn Utzon, the iconic sails of the opera house are a symbol of Sydney. Visitors can take guided tours, attend performances, and enjoy panoramic views of the harbor. The Opera House is a must-visit for lovers of architecture and the arts.`;
            Text5 = `Bondi Beach`;
            Text6 = `Bondi Beach, famous for its golden sands and surf culture, is a popular destination for beach lovers. Located just a short drive from Sydney's central business district, Bondi offers a laid-back atmosphere, oceanfront cafes, and the opportunity to catch some waves. Take a coastal walk or relax on the beach to soak in the sun and the vibrant energy of Bondi.`;
            Text7 = `Taronga Zoo`;
            Text8 = `Taronga Zoo, with its stunning harbor location, is home to a diverse range of wildlife from Australia and around the world. Visitors can enjoy close encounters with animals, attend animal shows, and take in breathtaking views of Sydney Harbor. The zoo is committed to conservation and education, making it an enjoyable and informative experience for visitors of all ages.`;
            break;
        case 'Cluj-Napoca, Romania':
            Text1 = `Cluj-Napoca, 
            a charming city in Romania, 
            boasts a rich cultural heritage and picturesque landscapes`;
            Text2 = `Here's a glimpse of what Cluj-Napoca has to offer: `;
            Text3 = `Cluj-Napoca Botanical Garden`;
            Text4 = `Cluj-Napoca Botanical Garden, founded in 1872, is a lush oasis in the heart of the city. Home to a diverse collection of plant species, the garden provides a peaceful retreat for nature lovers. Visitors can explore themed gardens, greenhouses, and enjoy the tranquility of this botanical haven.`;
            Text5 = `St. Michael's Church`;
            Text6 = `St. Michael's Church, a Gothic masterpiece, dominates the city's skyline. Built in the 14th century, the church is known for its stunning architecture and impressive stained glass windows. Visitors can admire the intricate details of the church's interior and climb the tower for panoramic views of Cluj-Napoca.`;
            Text7 = `Central Park Cluj`;
            Text8 = `Central Park Cluj, a beloved urban park, offers a place of recreation and leisure for locals and visitors alike. With scenic pathways, a lake, and recreational facilities, the park is an ideal spot for a leisurely stroll or a relaxing day outdoors. Central Park Cluj provides a green oasis in the heart of the city.`;
            break;
        default:
            Text1 = 'Explore the beauty and charm of this destination!';
            break;
    }


    const imageSources: {
        [key: number]: {
            main: string;
            img1: string;
            img2: string;
            img3: string;
        };
    } = {
        1: {
            main: "../detail_images/paris/paris.jpg",
            img1: '../detail_images/paris/eiffel.jpg',
            img2: '../detail_images/paris/notre_dame.jpg',
            img3: '../detail_images/paris/louvre.jpg',
        },
        2: {
            main: "../detail_images/new_york/ny.jpg",
            img1: '../detail_images/new_york/empire.jpg',
            img2: '../detail_images/new_york/central.jpg',
            img3: '../detail_images/new_york/statue.jpg',
        },
        3: {
            main: "../detail_images/london/ldn.jpg",
            img1: '../detail_images/london/ben.jpg',
            img2: '../detail_images/london/museum.jpg',
            img3: '../detail_images/london/bridge.jpg',
        },
        4: {
            main: "../detail_images/tokyo/tokyo.jpg",
            img1: '../detail_images/tokyo/tower.jpg',
            img2: '../detail_images/tokyo/temple.jpg',
            img3: '../detail_images/tokyo/crossing.jpg',
        },
        5: {
            main: "../detail_images/sydney/sdn.jpg",
            img1: '../detail_images/sydney/opera.jpg',
            img2: '../detail_images/sydney/beach.jpg',
            img3: '../detail_images/sydney/zoo.jpg',
        },
        6: {
            main: "../detail_images/cluj/cluj.jpg",
            img1: '../detail_images/cluj/garden.jpg',
            img2: '../detail_images/cluj/church.jpg',
            img3: '../detail_images/cluj/park.jpg',
        },
    };

    //look up table cu mapping :3
    const destinationIndexMap: Record<string, number> = {
        'Paris, France': 1,
        'New York, USA': 2,
        'London, United Kingdom': 3,
        'Tokyo, Japan': 4,
        'Sydney, Australia': 5,
        'Cluj-Napoca, Romania': 6,
    };

    const destinationIndex = destinationIndexMap[destination.destinationName] || 0;


    return (
        <div style={containerStyle}>
            <div style={buttonContainerStyle}>
                <img src="../home_images/globe.png" alt="Logo" style={logoStyle} />
                <div style={siteNameStyle}>WanderScape</div>
            </div>
            <div className="destination-card">
                <h2>{destination.destinationName}</h2>

                <p> {Text1}</p>
                <h2 className='glimpse'> {Text2}</h2>

                <h2 className='img1_name'>{Text3}</h2>
                <h2 className='img1_text'>{Text4}</h2>

                <h2 className='img2_name'>{Text5}</h2>
                <h2 className='img2_text'>{Text6}</h2>

                <h2 className='img3_name'>{Text7}</h2>
                <h2 className='img3_text'>{Text8}</h2>

                <img className={`imgMain`} src={imageSources[destinationIndex].main} alt={`Main Image for ${destination.destinationName}`} />
                <img className={`img1`} src={imageSources[destinationIndex].img1} alt={`Image 1 for ${destination.destinationName}`} />
                <img className={`img2`} src={imageSources[destinationIndex].img2} alt={`Image 2 for ${destination.destinationName}`} />
                <img className={`img3`} src={imageSources[destinationIndex].img3} alt={`Image 3 for ${destination.destinationName}`} />


                <Link to={`/Destinations/${destinationId}/Accommodations`}>View Accommodations</Link>
            </div>

        </div>

    );
};

export default DestinationDetail;
