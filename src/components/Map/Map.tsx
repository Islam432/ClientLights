import React, { useEffect, useRef } from 'react';
import { LoadScript } from '@react-google-maps/api';

function Map() {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) return;
        
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 42.838986, lng: 74.568732 },
            zoom: 18,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [ { "color": "#454545" } ]
                },
                {
                    "elementType" : "labels",
                    "stylers" : [ {"visibility" : "off" }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [ { "color": "#e2e3e1" } ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [ { "color": "#000" } ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [ { "color": "#e2e3e1" } ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [ { "color": "#e2e3e1"} ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [ { "color": "#263c3f" } ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [ { "color": "#e2e3e1" } ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [ { "color": "#323331" } ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [ { "color": "#000" } ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [ { "color": "#e2e3e1" } ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text",
                    "stylers": [ { "visibility": "on" } ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [ { "color": "#323331" } ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [ { "color": "#000" } ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [ { "color": "#323331" } ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [ { "color": "#2f3948" } ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "labels.text.fill",
                    "stylers": [ { "color": "#e2e3e1" }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [ { "color": "#17263c" } ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [  { "color": "#e2e3e1" } ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [ { "color": "#e2e3e1" }
                    ]
                }
            ]
        });

        // const markerIcon = {
        //     path: '../../../public/Vector.svg', // URL иконки метки
        //     fillColor: "green",
        //     fillOpacity: 0.6,
        //     strokeWeight: 0,
        //     rotation: 0,
        //     scale: 2,
        //     anchor: new google.maps.Point(0, 20),
        // };

        const markerRealist1 = new window.google.maps.Marker({
            position: { lat: 42.838986, lng: 74.568732 },
            map: map,
            title: 'Реалист', // 42.838986, 74.568732
        });

        const markerRealist2 = new window.google.maps.Marker({
            position: { lat: 42.838960, lng: 74.568576 },
            map: map,
            title: 'Реалист' //42.838960, 74.568576
        });

        const markerNoname1 = new window.google.maps.Marker({
            position: { lat: 42.843862, lng: 74.564593 },
            map: map,
            title: 'Безымянная' // 42.843862, 74.564593
        });

        const markerNoname2 = new window.google.maps.Marker({
            position: { lat: 42.843988, lng: 74.564593 },
            map: map,
            title: 'Безымянная' // 42.843988, 74.564593
        });

    }, [mapRef]);

    return (
        <div ref={mapRef} style={{ height: '100vh', width: '100%' }}></div>
    );
}

function MapWithApiKey() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAFZItSCpqTJ2Ub_cytNkOuc6r_Nht_Ex0"
        >
            <Map />
        </LoadScript>
    );
}

export default MapWithApiKey;
