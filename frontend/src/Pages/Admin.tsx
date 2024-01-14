// Admin.jsx
import React from "react";
import { Link } from "react-router-dom";

export const Admin = (): JSX.Element => {
    return (
        <div>
            <h1>Admin Page</h1>
            <div>
                <Link to="/DestinationAdmin">
                    <button type="button">Destination Admin</button>
                </Link>
            </div>
            <div>
                <Link to="/AttractionAdmin">
                    <button type="button">Attraction Admin</button>
                </Link>
            </div>
            <div>
                <Link to="/AccommodationAdmin">
                    <button type="button">Accommodation Admin</button>
                </Link>
            </div>
        </div>
    );
};
