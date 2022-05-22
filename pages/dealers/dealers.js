import Head from 'next/head';
import styled from 'styled-components';
import Map from '../../components/map/map';
import dealers from '../../dealers';
import DealerCard from '../../components/dealer/DealerCard';
import propTypes from 'prop-types';

Dealers.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired
}

export default function Dealers({mobileDevice, desktopDevice}) {
    return (
        <Page>
            <Head>
                <title>| Revendeurs</title>
            </Head>
            <Container
                mobileDevice={mobileDevice}
            >
                <Map/>
                {dealers.map((dealer, index) => {
                    return (
                        <DealerCard
                            key={index}
                            dealer={dealer}
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