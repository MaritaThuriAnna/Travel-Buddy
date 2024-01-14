import React, { useEffect, useState } from "react";
import axios from "axios";

interface Accomodation {
    accomodationId: number;
    destinationId: number;
    accomodationName: string;
    accomodationType: string;
    accomodationPricePerNight: string;
}

interface Destination {
    destinationId: number;
    destinationName: string;
    destinationLanguage: string;
    destinationCurrency: string;
    destinationTimezone: string;
}


export const AccommodationAdmin = (): JSX.Element => {

    const [accoms, setAccoms] = useState<Accomodation[]>([]);
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [newAccom, setNewAccom] = useState<Accomodation>({
        accomodationId: 0,
        destinationId: 0,
        accomodationName: "",
        accomodationType: "",
        accomodationPricePerNight: "",
    });
    const [updateAccom, setUpdateAccom] = useState({
        accomodationId: 0,
        destinationId: 0,
        accomodationName: "",
        accomodationType: "",
        accomodationPricePerNight: "",
    });
    const [deleteAccom, setDeleteAccom] = useState({
        accomodationId: 0,
        destinationId: 0,
        accomodationName: "",
        accomodationType: "",
        accomodationPricePerNight: "",
    });

    const [insertError, setInsertError] = useState("");
    const [updateError, setUpdateError] = useState("");
    const [deleteError, setDeleteError] = useState("");


    useEffect(() => {
        fetchAccomodations();
        fetchDestinations();
    }, []);

    const fetchAccomodations = () => {
        axios
            .get("http://localhost:8080/Accomodation/ReadAll")
            .then((response) => setAccoms(response.data))
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
            newAccom.destinationId === 0 ||
            !newAccom.accomodationName ||
            !newAccom.accomodationType ||
            !newAccom.accomodationPricePerNight
        ) {
            setInsertError("All fields are required for insertion.");
            console.log("Error message set:", insertError);
            return;
        }

        const selectedDestination = destinations.find(
            (destination) => destination.destinationId === newAccom.destinationId
        );

        if (!selectedDestination) {
            console.error("Selected destination not found.");
            return;
        }

        const dataToSend = {
            destination: {
                destinationId: selectedDestination.destinationId,
            },
            accomodationName: newAccom.accomodationName,
            accomodationType: newAccom.accomodationType,
            accomodationPricePerNight: newAccom.accomodationPricePerNight,
        };
        console.log("destination: ", selectedDestination, selectedDestination.destinationId)

        axios
            .post("http://localhost:8080/Accomodation/Insert", dataToSend)
            .then(() => {
                fetchAccomodations();
                setNewAccom({
                    accomodationId: 0,
                    destinationId: 0,
                    accomodationName: "",
                    accomodationType: "",
                    accomodationPricePerNight: "",
                });
                setInsertError("");
                console.log("Accomodation insertion completed successfully!");
            })
            .catch((error) =>
                console.error("Error inserting attraction:", error)
            );
    };

    const handleAccomSelection = (name: string) => {
        const selectedAccom = accoms.find(
            (accom: Accomodation) => accom.accomodationName === name
        );
        if (selectedAccom) {
            setUpdateAccom(selectedAccom);
        }
    };

    //UPDATE
    const handleUpdate = () => {
        if (!updateAccom.accomodationId) {
            setUpdateError("All fields are required for updating.");
            return;
        }

        const selectedDestination = destinations.find(
            (destination) => destination.destinationId === updateAccom.destinationId
        );

        if (!selectedDestination) {
            console.error("Selected destination not found.");
            return;
        }

        const dataToSend = {
            accomodationId: updateAccom.accomodationId,
            destination: {
                destinationId: selectedDestination.destinationId,
            },
            accomodationName: updateAccom.accomodationName,
            accomodationType: updateAccom.accomodationType,
            accomodationPricePerNight: updateAccom.accomodationPricePerNight,
        };

        axios
            .put("http://localhost:8080/Accomodation/Update", dataToSend)
            .then(() => {
                fetchAccomodations();
                setUpdateAccom({
                    accomodationId: 0,
                    destinationId: 0,
                    accomodationName: "",
                    accomodationType: "",
                    accomodationPricePerNight: "",
                });
                setUpdateError("");
                console.log("Attraction update completed successfully!");
            })
            .catch((error) =>
                console.error("Error updating attraction:", error)
            );
    };

    const handleAccomSelectionForDelete = (name: string) => {
        const selectedAccom = accoms.find(
            (accom: Accomodation) => accom.accomodationName === name
        );
        if (selectedAccom) {
            setDeleteAccom(selectedAccom);
        }
    };

    const handleDelete = () => {
        if (!deleteAccom.accomodationId) {
            setDeleteError("All fields are required for updating.");
            return;
        }

        axios
            .delete(`http://localhost:8080/Accomodation/Delete/${deleteAccom.accomodationId}`)
            .then(() => {
                fetchAccomodations();
                setDeleteAccom({
                    accomodationId: 0,
                    destinationId: 0,
                    accomodationName: "",
                    accomodationType: "",
                    accomodationPricePerNight: "",
                });
                setDeleteError("");
            })
            .catch((error) => console.error("Error deleting destination:", error));
    };


    return (
        <div>
            <h1>Accommodations Administrative Page</h1>

            <h2>Add Accommodation</h2>
            {insertError && <p style={{ color: "red" }}>{insertError}</p>}
            <form>
                <div>
                    <label>Destination: </label>
                    <select
                        value={newAccom.destinationId}
                        onChange={(e) =>
                            setNewAccom({
                                ...newAccom,
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
                    <label>Accomodation Name: </label>
                    <input
                        type="text"
                        value={newAccom.accomodationName}
                        onChange={(e) =>
                            setNewAccom({
                                ...newAccom,
                                accomodationName: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Accommodation Type: </label>
                    <input
                        type="text"
                        value={newAccom.accomodationType}
                        onChange={(e) =>
                            setNewAccom({
                                ...newAccom,
                                accomodationType: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Accommodation Price Per Night:   </label>
                    <input
                        type="text"
                        value={newAccom.accomodationPricePerNight}
                        onChange={(e) =>
                            setNewAccom({
                                ...newAccom,
                                accomodationPricePerNight: e.target.value,
                            })
                        }
                    />
                </div>
                <button type="button" onClick={handleInsert}>
                    Insert
                </button>
            </form>

            {/* //UPDATE */}
            <h2>Update an Accommodation</h2>
            {updateError && <p style={{ color: "red" }}>{updateError}</p>}
            <form>
                <div>
                    <label>Select an accomodation to update:  </label>
                    <select
                        onChange={(e) => handleAccomSelection(e.target.value)}
                        value={updateAccom.accomodationName}
                    >
                        <option value="">Select Accommodation</option>
                        {accoms.map((accom: Accomodation) => (
                            <option key={accom.accomodationId} value={accom.accomodationName}>
                                {accom.accomodationName}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Destination: </label>
                    <select
                        value={updateAccom.destinationId}
                        onChange={(e) =>
                            setUpdateAccom({
                                ...updateAccom,
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
                    <label>Updated Accommodation Name: </label>
                    <input
                        type="text"
                        value={updateAccom.accomodationName}
                        onChange={(e) =>
                            setUpdateAccom({
                                ...updateAccom,
                                accomodationName: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Updated Accommodation Type: </label>
                    <input
                        type="text"
                        value={updateAccom.accomodationType}
                        onChange={(e) =>
                            setUpdateAccom({
                                ...updateAccom,
                                accomodationType: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Updated Accommodation Price Per Night: </label>
                    <input
                        type="text"
                        value={updateAccom.accomodationPricePerNight}
                        onChange={(e) =>
                            setUpdateAccom({
                                ...updateAccom,
                                accomodationPricePerNight: e.target.value,
                            })
                        }
                    />
                </div>
                <button type="button" onClick={handleUpdate}>
                    Update
                </button>
            </form>

             {/* DELETE */}
             <h2>Delete an Accommodation</h2>
            {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}
            <form>
                <div>
                    <label>Select Accommodation to Delete:</label>
                    <select
                        onChange={(e) => handleAccomSelectionForDelete(e.target.value)}
                        value={deleteAccom.accomodationName}
                    >
                        <option value="">Select Accommodation</option>
                        {accoms.map((accom: Accomodation) => (
                            <option key={accom.accomodationId} value={accom.accomodationName}>
                                {accom.accomodationName}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="button" onClick={handleDelete}>
                    Delete
                </button>
            </form>

        </div>
    )
}