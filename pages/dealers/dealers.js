import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import MapNew from '../../components/map/mapNew';
import dealers from '../../dealers';
import DealerCard from '../../components/dealer/DealerCard';
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
        setStoreCoordinates(dealer.coordinates);
    };

    useEffect(() => {
        if(!selectedCard) {
            setStoreCoordinates(null)
        }
    }, [selectedCard, storeCoordinates])

    return (
        <Page>
            <Head>
                <title>| Revendeurs</title>
            </Head>
            <Container
                mobileDevice={mobileDevice}
            >
                <MapNew
                    selectedCard={selectedCard}
                    storeCoordinates={storeCoordinates}
                    mobileDevice={mobileDevice}
                />
                {dealers.map((dealer, index) => {
                    return (
                        <DealerCard
                            key={index}
                            dealer={dealer}
                            selectCard={selectCard}
                            selectedCard={selectedCard}
                            mobileDevice={mobileDevice}
                        />
                    )
                })
                }
            </Container>
        </Page>
    )
}

const Page = styled.div`
    height: 100%;
`

const Container = styled.div`
    display: flex;
    flex-direction: ${({mobileDevice}) => mobileDevice ? 'column' : 'row'};
    align-items: ${({mobileDevice}) => mobileDevice ? 'center' : 'flex-start'};
    margin-bottom: ${({mobileDevice}) => mobileDevice ? '130px' : '0px'};
    width: 100%;
    height: ${({mobileDevice}) => mobileDevice ? 'none' : '100%'};
`