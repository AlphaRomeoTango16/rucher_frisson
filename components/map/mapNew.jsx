import React, {useEffect, useState} from 'react';
import Map, {useMap, Marker, FullscreenControl, NavigationControl} from 'react-map-gl';
import Image from 'next/image';
import MarkerLogo from '../../assets/logo/marker.png'
import propTypes from 'prop-types';

const accessToken = 'pk.eyJ1IjoiYWxwaGExNiIsImEiOiJja3dxN2R4NDcwandwMnBxb2s0cjN2b3dnIn0.mo5JOtJcdE20ggp-nQZGAA';

MapNew.propTypes = {
    storeCoordinates: propTypes.array,
}

export default function MapNew({storeCoordinates}) {
    const [lng, setLng] = useState(1.85);
    const [lat, setLat] = useState(48.78);
    const [zoom, setZoom] = useState(8);

    const {current: map} = useMap();

    useEffect(() => {
        if (storeCoordinates) {
            map.flyTo({ center: storeCoordinates })
        }
    });

    return (
        <Map
            initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: zoom,
            }}
            style={{width: '100%', height: 350}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            attributionControl={false}
            mapboxAccessToken={accessToken}
        >
            <FullscreenControl
                position='bottom-left'
            />
            <NavigationControl
                position='bottom-right'
            />
            <Marker longitude={1.601320} latitude={48.790461} anchor='bottom' >
                <Image
                    src={MarkerLogo}
                    alt='Logo Rucher Frisson'
                    width={20}
                    height={60}
                />
            </Marker>
        </Map>
    )
}
