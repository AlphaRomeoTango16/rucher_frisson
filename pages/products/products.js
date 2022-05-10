import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import styled from 'styled-components'
import CarousellSelector from '../../components/carousellSelector/carousellSelector'
import List from '../../components/displayProduct/list'
import products from '../../products'
import propTypes from 'prop-types'

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
                    <DisplayButtonMosaique
                        displayProductSelected={displayProductSelected}
                        onClick={() => setDisplayProductSelected('MOSAIQUE')}
                    >
                        MOSAÏQUE
                    </DisplayButtonMosaique>
                </DisplayProduct>
                {displayProductSelected === 'LIST' &&
                    <List
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
`

const DisplayProduct = styled.div`
    margin-top: 20px;
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

const DisplayButtonMosaique = styled.a`
    font-size: 15px;
    font-family: ${({displayProductSelected}) => displayProductSelected === 'MOSAIQUE' ? 'FiraSansCondensed-Regular' : 'FiraSansCondensed-Light'};
    margin-left: 10px;
    margin-right: 10px;
`