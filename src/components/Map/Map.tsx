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
        const locations = [
            { title: 'Реалист 1', position: { lat: 42.838986, lng: 74.568732 } },
            
            { title: 'Безымянная 1', position: { lat: 42.843862, lng: 74.564593 } },
           
        ];
        const greenMarkerIcon = {
            path:"M15.0077 17.4615C15.898 17.4615 16.6579 17.1445 17.2874 16.5105C17.9169 15.8765 18.2316 15.1143 18.2316 14.224C18.2316 13.3336 17.9146 12.5737 17.2806 11.9443C16.6466 11.3148 15.8844 11 14.9941 11C14.1038 11 13.3438 11.317 12.7143 11.951C12.0849 12.585 11.7701 13.3472 11.7701 14.2376C11.7701 15.1279 12.0871 15.8878 12.7211 16.5173C13.3552 17.1468 14.1174 17.4615 15.0077 17.4615ZM15.0009 33.3539C18.7599 30.0821 21.7317 26.7545 23.9163 23.3712C26.1009 19.9878 27.1932 17.0615 27.1932 14.5923C27.1932 10.9333 26.0349 7.91347 23.7182 5.5327C21.4015 3.15193 18.4958 1.96155 15.0009 1.96155C11.506 1.96155 8.60026 3.15193 6.28359 5.5327C3.96693 7.91347 2.80859 10.9333 2.80859 14.5923C2.80859 17.0615 3.90089 19.9878 6.08549 23.3712C8.27013 26.7545 11.2419 30.0821 15.0009 33.3539ZM15.0009 36.0384C10.3009 31.882 6.76051 28.0058 4.37974 24.4096C1.99898 20.8135 0.808594 17.541 0.808594 14.5923C0.808594 10.3615 2.18616 6.87178 4.94129 4.12305C7.69639 1.37435 11.0496 0 15.0009 0C18.9522 0 22.3054 1.37435 25.0605 4.12305C27.8156 6.87178 29.1932 10.3615 29.1932 14.5923C29.1932 17.541 28.0028 20.8135 25.622 24.4096C23.2413 28.0058 19.7009 31.882 15.0009 36.0384Z",
            fillColor: '#86C232',
            fillOpacity: 1,
            scale: 1.2, // Уменьшим масштаб иконки
            anchor: new window.google.maps.Point(10, 22), // Оптимальные значения для центрирования иконки
        };
        locations.forEach(location => {
            new window.google.maps.Marker({
                position: location.position,
                map: map,
                title: location.title,
                icon: greenMarkerIcon
            });
        });
        const goToLocation = (lat, lng) => {
            map.panTo({ lat, lng });
        };

        const markerRealist1 = new window.google.maps.Marker({
            position: { lat: 42.838986, lng: 74.568732 },
            map: map,
            title: 'Реалист', // 42.838986, 74.568732
            icon: greenMarkerIcon 
        });

        const markerRealist2 = new window.google.maps.Marker({
            position: { lat: 42.838960, lng: 74.568576 },
            map: map,
            title: 'Реалист' ,//42.838960, 74.568576
            icon: greenMarkerIcon 
        });

        const markerNoname1 = new window.google.maps.Marker({
            position: { lat: 42.843862, lng: 74.564593 },
            map: map,
            title: 'Безымянная' ,// 42.843862, 74.564593
            icon: greenMarkerIcon 
        });

        const markerNoname2 = new window.google.maps.Marker({
            position: { lat: 42.843988, lng: 74.564593 },
            map: map,
            title: 'Безымянная', // 42.843988, 74.564593
            icon: greenMarkerIcon 
        });

        const controlDiv1 = document.createElement('div');
        const controlDiv2 = document.createElement('div');
        const controlDiv = document.createElement('div');
        const controlUIRealist1 = document.createElement('button');
        const controlUINoname1 = document.createElement('button');
        
        controlDiv.classList.add('div')
        controlDiv2.classList.add('div2')
        controlDiv1.classList.add('div1')
        controlUIRealist1.classList.add('customButton');
        controlUINoname1.classList.add('customButton');

        controlUINoname1.innerText= 'Location 2: st. Ahunbaeva-Bezymyannaya';
        controlUIRealist1.innerText = 'Location 1: st. Tynalieva (Realist shop)';
        
      
        controlUIRealist1.addEventListener('click', () => {
            goToLocation(42.838986, 74.568732);
        });
        controlUINoname1.addEventListener('click', () => {
            goToLocation(42.843862, 74.564593);
        });
       
        controlDiv1.appendChild(controlDiv);
        controlDiv2.appendChild(controlDiv1);
        controlDiv.appendChild(controlUIRealist1);
        controlDiv.appendChild(controlUINoname1);
    
      
        map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(controlDiv2);

    }, [mapRef]);

    return (
        <div ref={mapRef} style={{ height: '100vh', width: '100%' }}>
            
        </div>
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