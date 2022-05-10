import React, {useState} from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import CarousellSelector from '../../components/carousellSelector/CarousellSelector';
import Slide from '../../components/displayProduct/Slide';
import List from '../../components/displayProduct/List';
import Mosaic from '../../components/displayProduct/Mosaic';
import products from '../../products';
import propTypes from 'prop-types';

Products.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired
}

export default function Products({mobileDevice, desktopDevice}) {
    const [swiperIndex, setSwiperIndex] = useState(0)

    const [displayProductSelected, setDisplayProductSelected] = useState('PRODUCT');

    const productType = [
        {
            'index': '0',
            'name': 'Pollen'
        },
        {
            'index': '1',
            'name': 'Miel'
        }
    ];

    return (
        <Page>
            <Head>
            <title>| Produits</title>
            </Head>
            <Container
                mobileDevice={mobileDevice}
            >
                <Title
                    mobileDevice={mobileDevice}
                >
                    Nos produits
                </Title>
                <CarousellSelector
                    productType={productType}
                    setSwiperIndex={setSwiperIndex}
                />
                <DisplayProduct>
                    <DisplayButtonProduct
                        displayProductSelected={displayProductSelected}
                        onClick={() => setDisplayProductSelected('PRODUCT')}
                    >
                        PRODUIT
                    </DisplayButtonProduct>|
                    <DisplayButtonList
                        displayProductSelected={displayProductSelected}
                        onClick={() => setDisplayProductSelected('LIST')}
                    >
                        LISTE
                    </DisplayButtonList>|
                    <DisplayButtonMosaic
                        displayProductSelected={displayProductSelected}
                        onClick={() => setDisplayProductSelected('MOSAIC')}
                    >
                        MOSAÏQUE
                    </DisplayButtonMosaic>
                </DisplayProduct>
                {displayProductSelected === 'LIST' &&
                    <List
                        desktopDevice={desktopDevice}
                        mobileDevice={mobileDevice}
                        products={products}
                        swiperIndex={swiperIndex}
                    />
                }
                {displayProductSelected === 'PRODUCT' &&
                    <Slide
                        desktopDevice={desktopDevice}
                        mobileDevice={mobileDevice}
                        products={products}
                        swiperIndex={swiperIndex}
                    />
                }
                {displayProductSelected === 'MOSAIC' &&
                    <Mosaic
                        desktopDevice={desktopDevice}
                        mobileDevice={mobileDevice}
                        products={products}
                        swiperIndex={swiperIndex}
                    />
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

const Title = styled.p`
    margin-top: ${({mobileDevice}) => mobileDevice ? '135px' : '10px'};
    font-family: FiraSansCondensed-Bold;
    font-size: 25px;
    margin-bottom: 15px;
`

const DisplayProduct = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: baseline;
`

const DisplayButtonProduct = styled.a`
    font-size: 15px;
    font-family: ${({displayProductSelected}) => displayProductSelected === 'PRODUCT' ? 'FiraSansCondensed-Regular' : 'FiraSansCondensed-Light'};
    margin-left: 10px;
    margin-right: 10px;
`

const DisplayButtonList = styled.a`
    font-size: 15px;
    font-family: ${({displayProductSelected}) => displayProductSelected === 'LIST' ? 'FiraSansCondensed-Regular' : 'FiraSansCondensed-Light'};
    margin-left: 10px;
    margin-right: 10px;
`

const DisplayButtonMosaic = styled.a`
    font-size: 15px;
    font-family: ${({displayProductSelected}) => displayProductSelected === 'MOSAIC' ? 'FiraSansCondensed-Regular' : 'FiraSansCondensed-Light'};
    margin-left: 10px;
    margin-right: 10px;
`