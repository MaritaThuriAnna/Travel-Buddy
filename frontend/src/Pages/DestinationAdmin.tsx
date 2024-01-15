import React, { useEffect, useState } from "react";
import axios from "axios";

export const DestinationAdmin = (): JSX.Element => {
    const [destinations, setDestinations] = useState([]);

    const [newDestination, setNewDestination] = useState({
        destinationName: "",
        destinationLanguage: "",
        destinationCurrency: "",
        destinationTimezone: "",
    });

    type Destination = {
        destinationId: number;
        destinationName: string;
        destinationLanguage: string;
        destinationCurrency: string;
        destinationTimezone: string;
    };

    const [updateDestination, setUpdateDestination] = useState({
        destinationId: "",
        destinationName: "",
        destinationLanguage: "",
        destinationCurrency: "",
        destinationTimezone: "",
    });

    const [deleteDestination, setDeleteDestination] = useState({
        destinationId: "",
        destinationName: "",
        destinationLanguage: "",
        destinationCurrency: "",
        destinationTimezone: "",
    });

    const [insertError, setInsertError] = useState("");
    const [updateError, setUpdateError] = useState("");
    const [deleteError, setDeleteError] = useState("");

    useEffect(() => {
        fetchDestinations();
    }, []);

    const fetchDestinations = () => {
        axios
            .get("http://localhost:8080/Destination/ReadAll")
            .then((response) => setDestinations(response.data))
            .catch((error) => console.error("Error fetching destinations:", error));
    };

    //INSERT
    const handleInsert = () => {
        if (
            !newDestination.destinationName ||
            !newDestination.destinationLanguage ||
            !newDestination.destinationCurrency ||
            !newDestination.destinationTimezone
        ) {
            setInsertError("All fields are required for insertion.");
            return;
        }

        axios
            .post("http://localhost:8080/Destination/Insert", newDestination)
            .then(() => {
                fetchDestinations();
                setNewDestination({
                    destinationName: "",
                    destinationLanguage: "",
                    destinationCurrency: "",
                    destinationTimezone: "",
                });
                setInsertError(""); 
            })
            .catch((error) => console.error("Error inserting destination:", error));
    };

    //UPDATE

    const handleUpdate = () => {
        // Validation check
        if (!updateDestination.destinationId) {
            setUpdateError("Please select a destination to update.");
            return;
        }

        axios
            .put("http://localhost:8080/Destination/Update", updateDestination)
            .then(() => {
                fetchDestinations();
                setUpdateDestination({
                    destinationId: "",
                    destinationName: "",
                    destinationLanguage: "",
                    destinationCurrency: "",
                    destinationTimezone: "",
                });
                setUpdateError(""); // Clear error message on successful update
            })
            .catch((error) =>
                console.error("Error updating destination:", error)
            );
    };

    //DELETE

    const handleDestinationSelection = (name: string) => {
        const selectedDestination = destinations.find(
            (destination: Destination) => destination.destinationName === name
        );
        if (selectedDestination) {
            setUpdateDestination(selectedDestination);
        }
    };

    const handleDestinationSelectionForDelete = (name: string) => {
        const selectedDestination = destinations.find(
            (destination: Destination) => destination.destinationName === name
        );
        if (selectedDestination) {
            setDeleteDestination(selectedDestination);
        }
    };

    const handleDelete = () => {
        // Validation check
        if (!deleteDestination.destinationId) {
            setDeleteError("Please select a destination to delete.");
            return;
        }

        axios
            .delete(`http://localhost:8080/Destination/Delete/${deleteDestination.destinationId}`)
            .then(() => {
                fetchDestinations();
                setDeleteDestination({
                    destinationId: "",
                    destinationName: "",
                    destinationLanguage: "",
                    destinationCurrency: "",
                    destinationTimezone: "",
                });
                setDeleteError(""); // Clear error message on successful delete
            })
            .catch((error) => console.error("Error deleting destination:", error));
    };

    return (
        <div>
            <h1>Destinations Administrative Page</h1>
            <h2>Add a Destination</h2>
            {insertError && <p style={{ color: "red" }}>{insertError}</p>}
            <form>
                <div>
                    <label>Destination Name:</label>
                    <input
                        type="text"
                        value={newDestination.destinationName}
                        onChange={(e) =>
                            setNewDestination({
                                ...newDestination,
                                destinationName: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Destination Language:</label>
                    <input
                        type="text"
                        value={newDestination.destinationLanguage}
                        onChange={(e) =>
                            setNewDestination({
                                ...newDestination,
                                destinationLanguage: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Destination Currency:</label>
                    <input
                        type="text"
                        value={newDestination.destinationCurrency}
                        onChange={(e) =>
                            setNewDestination({
                                ...newDestination,
                                destinationCurrency: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Destination Timezone:</label>
                    <input
                        type="text"
                        value={newDestination.destinationTimezone}
                        onChange={(e) =>
                            setNewDestination({
                                ...newDestination,
                                destinationTimezone: e.target.value,
                            })
                        }
                    />
                </div>
                <button type="button" onClick={handleInsert}>
                    Insert
                </button>
            </form>

            <h2>Update a Destination</h2>
            {updateError && <p style={{ color: "red" }}>{updateError}</p>}
            <form>
                <div>
                    <label>Select Destination to Update:</label>
                    <select
                        onChange={(e) => handleDestinationSelection(e.target.value)}
                        value={updateDestination.destinationName}
                    >
                        <option value="">Select Destination</option>
                        {destinations.map((destination: Destination) => (
                            <option key={destination.destinationId} value={destination.destinationName}>
                                {destination.destinationName}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Updated Destination Name:</label>
                    <input
                        type="text"
                        value={updateDestination.destinationName}
                        onChange={(e) =>
                            setUpdateDestination({
                                ...updateDestination,
                                destinationName: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Updated Destination Language:</label>
                    <input
                        type="text"
                        value={updateDestination.destinationLanguage}
                        onChange={(e) =>
                            setUpdateDestination({
                                ...updateDestination,
                                destinationLanguage: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Updated Destination Currency:</label>
                    <input
                        type="text"
                        value={updateDestination.destinationCurrency}
                        onChange={(e) =>
                            setUpdateDestination({
                                ...updateDestination,
                                destinationCurrency: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Updated Destination Timezone:</label>
                    <input
                        type="text"
                        value={updateDestination.destinationTimezone}
                        onChange={(e) =>
                            setUpdateDestination({
                                ...updateDestination,
                                destinationTimezone: e.target.value,
                            })
                        }
                    />
                </div>
                <button type="button" onClick={handleUpdate}>
                    Update
                </button>
            </form>

            <h2>Delete a Destination</h2>
            {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}
            <form>
                <div>
                    <label>Select Destination to Delete:</label>
                    <select
                        onChange={(e) => handleDestinationSelectionForDelete(e.target.value)}
                        value={deleteDestination.destinationName}
                    >
                        <option value="">Select Destination</option>
                        {destinations.map((destination: Destination) => (
                            <option key={destination.destinationId} value={destination.destinationName}>
                                {destination.destinationName}
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
