import React, { useEffect, useRef } from 'react';
import { LoadScript } from '@react-google-maps/api';
import css from './Map.module.css'

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


        const markerIcon = {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#86C232">
                  <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>` //#86C232
              )}`, // URL вашей пользовательской иконки
            scaledSize: new window.google.maps.Size(40, 40), // Размер иконки
            origin: new window.google.maps.Point(0, 0), // Начальная точка для рисования иконки
            anchor: new window.google.maps.Point(20, 40) // Точка, вокруг которой поворачивается иконка
        }
        
        const markerRealist1 = new window.google.maps.Marker({
            position: { lat: 42.838986, lng: 74.568732 },
            map: map,
            title: 'Реалист', // 42.838986, 74.568732
            icon: markerIcon
        });

        const markerRealist2 = new window.google.maps.Marker({
            position: { lat: 42.838960, lng: 74.568576 },
            map: map,
            title: 'Реалист', //42.838960, 74.568576
            icon: markerIcon
        });

        const markerNoname1 = new window.google.maps.Marker({
            position: { lat: 42.843862, lng: 74.564593 },
            map: map,
            title: 'Безымянная', // 42.843862, 74.564593
            icon: markerIcon
            
        });

        const markerNoname2 = new window.google.maps.Marker({
            position: { lat: 42.843988, lng: 74.564593 },
            map: map,
            title: 'Безымянная', // 42.843988, 74.564593
            icon: markerIcon
        });
        
        // Определение типов для TypeScript
        interface LatLng {
            lat: number;
            lng: number;
        }
        
        const noname = document.getElementById('noname');
        const realist = document.getElementById('realist')
        if (realist) {
            realist.addEventListener('click', () => {
                const newCenter: LatLng = { lat: 42.838960, lng: 74.568576 };
                map.panTo(newCenter)
            });
        }

        if (noname) {
            noname.addEventListener('click', () => {
                const newCenter: LatLng = { lat: 42.843988, lng: 74.564593 };
                map.panTo(newCenter)
            });
        }

    }, [mapRef]);

    

    return (
        <>
            <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
                <div ref={mapRef} style={{ height: '100vh', width: '100%' }}></div>
                <div className={css.footer}>
                    <a href='#' id="noname">Location 1: st. Ahunbaeva-Bezymyannaya</a>
                    <a href='#' id="realist">Location 2: st. Tynalieva</a>
                </div>
            </div>
            
        </>
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