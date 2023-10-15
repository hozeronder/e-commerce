import React, {useMemo} from "react";
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";


const SimpleMap = (props) => {
    const api_key = process.env.REACT_APP_API_KEY
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: api_key
    });

    if (!isLoaded) return <div>Loading...</div>;

    return <Map/>;
}

function Map() {
    const center = useMemo(() => ({lat: 37.03698654250828, lng: 27.241427277909857}));
    return (
        <GoogleMap
            zoom={6}
            center={{lat: 37.03698654250828, lng: 27.241427277909857}}
            mapContainerClassName="map-container"
        >
            <Marker position={center}/>
        </GoogleMap>
    );
}

export default SimpleMap;
