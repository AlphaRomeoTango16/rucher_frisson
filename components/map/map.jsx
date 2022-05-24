import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxwaGExNiIsImEiOiJja3dxN2R4NDcwandwMnBxb2s0cjN2b3dnIn0.mo5JOtJcdE20ggp-nQZGAA';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(1.85);
    const [lat, setLat] = useState(48.78);
    const [zoom, setZoom] = useState(8);


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

    return (
        <MapContent>
            <MapCanva ref={mapContainer}/>
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