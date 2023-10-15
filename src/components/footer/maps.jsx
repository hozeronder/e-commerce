import React, { useMemo, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const SimpleMap = (props) => {
    const api_key = process.env.REACT_APP_API_KEY;
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: api_key,
    });

    if (!isLoaded) return <div>Loading...</div>;

    return <Map />;
};

function Map() {
    const google = window.google;

    useEffect(() => {
        window.google = google;
    }, []);

    const stylesArray = [
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "stylers": [
                {
                    "color": "#9c9c9c"
                },
                {
                    "weight": 1
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                {
                    "color": "#cbb3b3"
                },
                {
                    "weight": 0.5
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#bdf7ff"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#00e1ff"
                },
                {
                    "weight": 4.5
                }
            ]
        }
    ];
    const center = useMemo(() => ({ lat: 37.03698654250828, lng: 27.241427277909857 }));

    const mapOptions = {
        styles: stylesArray,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER,
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
            style: google.maps.ZoomControlStyle.XSMALL,
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP,
        },
        fullscreenControl: true,
    };

    return (
        <GoogleMap
            zoom={13}
            center={center}
            mapContainerClassName="map-container"
            options={mapOptions}
        >
            <Marker position={center} />
        </GoogleMap>
    );
}

export default SimpleMap;