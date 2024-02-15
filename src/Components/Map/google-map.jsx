import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function GoogleMapComponent() {
    const mapStyles = {
        height: "100%",
        width: "100%"
    };

    const defaultCenter = {
        lat: 41.3851,
        lng: 2.1734
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCZM0TNuyjc2DIcN0tteCgbk3tTz2v4klo"
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}
            >
            </GoogleMap>
        </LoadScript>
    );
}

export default GoogleMapComponent;
