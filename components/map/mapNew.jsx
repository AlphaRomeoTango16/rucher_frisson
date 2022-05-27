import React, {useRef, useEffect, useState} from 'react';
import Map, {Marker, NavigationControl} from 'react-map-gl';
import Image from 'next/image';
import styled from 'styled-components';
import MarkerLogo from '../../assets/logo/marker.png'
import propTypes from 'prop-types';

const accessToken = 'pk.eyJ1IjoiYWxwaGExNiIsImEiOiJja3dxN2R4NDcwandwMnBxb2s0cjN2b3dnIn0.mo5JOtJcdE20ggp-nQZGAA';

MapNew.propTypes = {
    selectedCard: propTypes.bool.isRequired,
    storeCoordinates: propTypes.object,
}

export default function MapNew({selectedCard, storeCoordinates}) {

    const [lng, setLng] = useState(1.85);
    const [lat, setLat] = useState(48.78);
    const [zoom, setZoom] = useState(8);

    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            return undefined
        }
        if (storeCoordinates) {
            mapRef.current.flyTo({
                center: storeCoordinates,
                zoom: 16
            })
        }
        if (!selectedCard) {
            mapRef.current.flyTo({
                center: [1.85, 48.78],
                zoom: 8
            })
        }
    }, [mapRef, storeCoordinates, selectedCard]);

    return (
        <Map
            ref={mapRef}
            initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: zoom,
            }}
            style={{width: '100%', height: 300, marginTop: 100}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            attributionControl={false}
            mapboxAccessToken={accessToken}
        >
            <NavigationControl
                position='bottom-right'
            />
            <Marker longitude={1.601320} latitude={48.789720} anchor='bottom' >
                <Image
                    src={MarkerLogo}
                    alt='Logo Rucher Frisson'
                    width={50}
                    height={60}
                />
            </Marker>
        </Map>
    )
}