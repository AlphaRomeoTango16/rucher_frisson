import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import MapNew from '../../components/map/mapNew';
import dealers from '../../dealers';
import DealerCard from '../../components/dealer/DealerCard';
import {findCoordinatesFromAddress} from '../../lib/mapBoxService/findCoordinatesFromAdress';
import propTypes from 'prop-types';

Dealers.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired
}

export default function Dealers({mobileDevice, desktopDevice}) {
    const [storeCoordinates, setStoreCoordinates] = useState(
        {lng: 1.85,lat: 48.78, zoom: 8}
    );
    const [selectedCard, setSelectedCard] = useState(false);

    const selectCard = async (dealer) =>  {
        setSelectedCard(!selectedCard)
        setStoreCoordinates(await findCoordinatesFromAddress(dealer.address2));
    };

    useEffect(() => {
        if(!selectedCard) {
            setStoreCoordinates(null)
        }
    }, [storeCoordinates])

    return (
        <Page>
            <Head>
                <title>| Revendeurs</title>
            </Head>
            <Container
                mobileDevice={mobileDevice}
            >
                <MapNew
                    storeCoordinates={storeCoordinates}
                />
                {dealers.map((dealer, index) => {
                    return (
                        <DealerCard
                            key={index}
                            dealer={dealer}
                            selectCard={selectCard}
                            selectedCard={selectedCard}
                        />
                    )
                })
                }
            </Container>
        </Page>
    )
}

const Page = styled.div`
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${({mobileDevice}) => mobileDevice ? '130px' : '10px'};
    width: 100%;
`