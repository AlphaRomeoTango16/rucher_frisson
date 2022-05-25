import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import MarkerLogo from '../../assets/logo/marker.png'
import styled from 'styled-components';
import propTypes from 'prop-types';

Map.propTypes = {
    storeCoordinates: propTypes.array,
}

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxwaGExNiIsImEiOiJja3dxN2R4NDcwandwMnBxb2s0cjN2b3dnIn0.mo5JOtJcdE20ggp-nQZGAA';

export default function Map({storeCoordinates}) {
    const mapContainer = useRef(null);
    const mapMarker = useRef(null)
    const map = useRef(null);
    const [lng, setLng] = useState(1.85);
    const [lat, setLat] = useState(48.78);
    const [zoom, setZoom] = useState(8);

    console.log('storeCoordinates', storeCoordinates)

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        attributionControl: false,
        center: [lng, lat],
        zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('load', () => {
            map.current.resize();
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        if (storeCoordinates) {
            map.current.flyTo({ center: storeCoordinates })
            // new mapboxgl.Marker(<Marker ref={mapMarker}/>)
            // .setLngLat([1.601245, 48.790461])
            // .addTo(map.current);
        }
    }, [storeCoordinates]);

    return (
        <MapContent>
            <MapCanva ref={mapContainer}/>
            {/* <Marker/> */}
        </MapContent>
    )
}

const MapContent = styled.div`
    width: 100%;
    position: relative;
    margin-top: 100px;
`

const MapCanva = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

// const Marker = styled.div`
//     width: 25px;
//     cursor: pointer;
//     background-image: ${MarkerLogo};
//     background-size: cover;
// `