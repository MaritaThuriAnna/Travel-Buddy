import React, { useEffect, useState } from "react";
import axios from "axios";

interface Attraction {
    attractionId: number;
    destinationId: number;
    attractionName: string;
    attractionType: string;
    attractionOpenHours: string;
    attractionTickets: number;
}

interface Destination {
    destinationId: number;
    destinationName: string;
    destinationLanguage: string;
    destinationCurrency: string;
    destinationTimezone: string;
}

export const AttractionAdmin = (): JSX.Element => {

    const [attractions, setAttractions] = useState<Attraction[]>([]);
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [newAttraction, setNewAttraction] = useState<Attraction>({
        attractionId: 0,
        destinationId: 0,
        attractionName: "",
        attractionType: "",
        attractionOpenHours: "",
        attractionTickets: 0.0,
    });

    const [updateAttraction, setUpdateAttraction] = useState({
        attractionId: 0,
        destinationId: 0,
        attractionName: "",
        attractionType: "",
        attractionOpenHours: "",
        attractionTickets: 0.0,
    });

    const [deleteAttraction, setDeleteAttraction] = useState({
        attractionId: 0,
        destinationId: 0,
        attractionName: "",
        attractionType: "",
        attractionOpenHours: "",
        attractionTickets: 0.0,
    });

    const [insertError, setInsertError] = useState("");
    const [updateError, setUpdateError] = useState("");
    const [deleteError, setDeleteError] = useState("");

    useEffect(() => {
        fetchAttractions();
        fetchDestinations();
    }, []);

    const fetchAttractions = () => {
        axios
            .get("http://localhost:8080/Attraction/ReadAll")
            .then((response) => setAttractions(response.data))
            .catch((error) => console.error("Error fetching attractions:", error));
    };

    const fetchDestinations = () => {
        axios
            .get("http://localhost:8080/Destination/ReadAll")
            .then((response) => setDestinations(response.data))
            .catch((error) => console.error("Error fetching destinations:", error));
    };

    //INSERT
    const handleInsert = () => {
        if (
            newAttraction.destinationId === 0 ||
            !newAttraction.attractionName ||
            !newAttraction.attractionType ||
            !newAttraction.attractionOpenHours ||
            newAttraction.attractionTickets === 0.0
        ) {
            setInsertError("All fields are required for insertion.");
            console.log("Error message set:", insertError);
            return;
        }

        const selectedDestination = destinations.find(
            (destination) => destination.destinationId === newAttraction.destinationId
        );

        if (!selectedDestination) {
            console.error("Selected destination not found.");
            return;
        }

        const dataToSend = {
            destination: {
                destinationId: selectedDestination.destinationId,
            },
            attractionName: newAttraction.attractionName,
            attractionType: newAttraction.attractionType,
            attractionOpenHours: newAttraction.attractionOpenHours,
            attractionTickets: newAttraction.attractionTickets,
        };
        console.log("destination: ", selectedDestination, selectedDestination.destinationId)

        axios
            .post("http://localhost:8080/Attraction/Insert", dataToSend)
            .then(() => {
                fetchAttractions();
                setNewAttraction({
                    attractionId: 0,
                    destinationId: 0,
                    attractionName: "",
                    attractionType: "",
                    attractionOpenHours: "",
                    attractionTickets: 0.0,
                });
                setInsertError("");
                console.log("Attraction insertion completed successfully!");
            })
            .catch((error) =>
                console.error("Error inserting attraction:", error)
            );
    };

    const handleAttrSelection = (name: string) => {
        const selectedAttr = attractions.find(
            (attraction: Attraction) => attraction.attractionName === name
        );
        if (selectedAttr) {
            setUpdateAttraction(selectedAttr);
        }
    };

    //UPDATE
    const handleUpdate = () => {
        if (!updateAttraction.attractionId) {
            setUpdateError("All fields are required for updating.");
            // console.log("Error message set:", insertError);
            return;
        }

        const selectedDestination = destinations.find(
            (destination) => destination.destinationId === updateAttraction.destinationId
        );

        if (!selectedDestination) {
            console.error("Selected destination not found.");
            return;
        }

        const dataToSend = {
            attractionId: updateAttraction.attractionId,
            destination: {
                destinationId: selectedDestination.destinationId,
            },
            attractionName: updateAttraction.attractionName,
            attractionType: updateAttraction.attractionType,
            attractionOpenHours: updateAttraction.attractionOpenHours,
            attractionTickets: updateAttraction.attractionTickets,
        };

        axios
            .put("http://localhost:8080/Attraction/Update", dataToSend)
            .then(() => {
                fetchAttractions();
                setUpdateAttraction({
                    attractionId: 0,
                    destinationId: 0,
                    attractionName: "",
                    attractionType: "",
                    attractionOpenHours: "",
                    attractionTickets: 0.0,
                });
                setUpdateError("");
                console.log("Attraction update completed successfully!");
            })
            .catch((error) =>
                console.error("Error updating attraction:", error)
            );
    };

    const handleAttrSelectionForDelete = (name: string) => {
        const selectedAttr = attractions.find(
            (attraction: Attraction) => attraction.attractionName === name
        );
        if (selectedAttr) {
            setDeleteAttraction(selectedAttr);
        }
    };

    const handleDelete = () => {
        if (!deleteAttraction.attractionId) {
            setDeleteError("All fields are required for updating.");
            // console.log("Error message set:", insertError);
            return;
        }

        axios
            .delete(`http://localhost:8080/Attraction/Delete/${deleteAttraction.attractionId}`)
            .then(() => {
                fetchAttractions();
                setDeleteAttraction({
                    attractionId: 0,
                    destinationId: 0,
                    attractionName: "",
                    attractionType: "",
                    attractionOpenHours: "",
                    attractionTickets: 0.0,
                });
                setDeleteError(""); // Clear error message on successful delete
            })
            .catch((error) => console.error("Error deleting destination:", error));
    };

    return (
        <div>
            <h1>Attractions Administrative Page</h1>
       
            <h2>Add Attraction</h2>
            {insertError && <p style={{ color: "red" }}>{insertError}</p>}
            <form>
                <div>
                    <label>Destination: </label>
                    <select
                        value={newAttraction.destinationId}
                        onChange={(e) =>
                            setNewAttraction({
                                ...newAttraction,
                                destinationId: e.target.value ? parseInt(e.target.value, 10) : 0,
                            })
                        }
                    >
                        <option value="">Select Destination</option>
                        {destinations.map((destination: Destination) => (
                            <option key={destination.destinationId} value={destination.destinationId}>
                                {destination.destinationName}
                            </option>
                        ))}

                    </select>
                </div>
                <div>
                    <label>Attraction Name: </label>
                    <input
                        type="text"
                        value={newAttraction.attractionName}
                        onChange={(e) =>
                            setNewAttraction({
                                ...newAttraction,
                                attractionName: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Attraction Type: </label>
                    <input
                        type="text"
                        value={newAttraction.attractionType}
                        onChange={(e) =>
                            setNewAttraction({
                                ...newAttraction,
                                attractionType: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Attraction Open Hours:   </label>
                    <input
                        type="text"
                        value={newAttraction.attractionOpenHours}
                        onChange={(e) =>
                            setNewAttraction({
                                ...newAttraction,
                                attractionOpenHours: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Attraction Tickets:  </label>
                    <input
                        type="text"
                        value={newAttraction.attractionTickets}
                        onChange={(e) =>
                            setNewAttraction({
                                ...newAttraction,
                                attractionTickets: parseInt(e.target.value, 10),
                            })
                        }
                    />
                </div>
                <button type="button" onClick={handleInsert}>
                    Insert
                </button>
            </form>

            {/* //UPDATE */}
            <h2>Update an Attraction</h2>
            {updateError && <p style={{ color: "red" }}>{updateError}</p>}
            <form>
                <div>
                    <label>Select an attraction to update:  </label>
                    <select
                    onChange={(e) => handleAttrSelection(e.target.value)}
                    value={updateAttraction.attractionName}
                    >
                        <option value="">Select Attraction</option>
                        {attractions.map((attraction: Attraction) =>(
                            <option key = {attraction.attractionId} value={attraction.attractionName}>
                                    {attraction.attractionName}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Destination: </label>
                    <select
                        value={updateAttraction.destinationId}
                        onChange={(e) =>
                            setUpdateAttraction({
                                ...updateAttraction,
                                destinationId: e.target.value ? parseInt(e.target.value, 10) : 0,
                            })
                        }
                    >
                        <option value="">Select Destination</option>
                        {destinations.map((destination: Destination) => (
                            <option key={destination.destinationId} value={destination.destinationId}>
                                {destination.destinationName}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Updated Attraction Name: </label>
                    <input
                        type="text"
                        value={updateAttraction.attractionName}
                        onChange={(e) =>
                            setUpdateAttraction({
                                ...updateAttraction,
                                attractionName: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Updated Attraction Type: </label>
                    <input
                        type="text"
                        value={updateAttraction.attractionType}
                        onChange={(e) =>
                            setUpdateAttraction({
                                ...updateAttraction,
                                attractionType: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Updated Attraction Open Hours: </label>
                    <input
                        type="text"
                        value={updateAttraction.attractionOpenHours}
                        onChange={(e) =>
                            setUpdateAttraction({
                                ...updateAttraction,
                                attractionOpenHours: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Updated Attraction Tickets: </label>
                    <input
                        type="number"
                        value={updateAttraction.attractionTickets}
                        onChange={(e) =>
                            setUpdateAttraction({
                                ...updateAttraction,
                                attractionTickets: parseFloat(e.target.value),
                            })
                        }
                    />
                </div>
                <button type="button" onClick={handleUpdate}>
                    Update
                </button>
            </form>

            {/* DELETE */}
            <h2>Delete an Attraction</h2>
            {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}
            <form>
                <div>
                    <label>Select Attraction to Delete:</label>
                    <select
                        onChange={(e) => handleAttrSelectionForDelete(e.target.value)}
                        value={deleteAttraction.attractionName}
                    >
                        <option value="">Select Attraction</option>
                        {attractions.map((attraction: Attraction) => (
                            <option key={attraction.attractionId} value={attraction.attractionName}>
                                {attraction.attractionName}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="button" onClick={handleDelete}>
                    Delete
                </button>
            </form>

        </div>
    );
};

export default AttractionAdmin;
