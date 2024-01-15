// Admin.jsx
import React from "react";
import { Link } from "react-router-dom";
import { updateButtonStyle } from "./Profile.styles";

export const Admin = (): JSX.Element => {
    return (
        <div>
            <h1>Admin Page</h1>
            <div>
                <Link to="/DestinationAdmin">
                    <button style={updateButtonStyle} type="button">Destination Admin</button>
                </Link>
            </div>
            <div>
                <Link to="/AttractionAdmin">
                    <button style={updateButtonStyle} type="button">Attraction Admin</button>
                </Link>
            </div>
            <div>
                <Link to="/AccommodationAdmin">
                    <button style={updateButtonStyle} type="button">Accommodation Admin</button>
                </Link>
            </div>
            <div>
                <Link to="/userAdmin">
                    <button style={updateButtonStyle} type="button">User Admin</button>
                </Link>
            </div>
        </div>
    );
};
