import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import styled from 'styled-components'
import CarousellSelector from '../../components/carousellSelector/carousellSelector'
import Card from '../../components/card/card'
import products from '../../products'
import propTypes from 'prop-types'

Products.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired
}

export default function Products({mobileDevice}) {
    const [productTypeSelected, setProductTypeSelected] = useState(null);

    const productType = ['Pollen', 'Miel'];

    useEffect(() => {
        console.log('productTypeSelected', productTypeSelected)
    }, [productTypeSelected])

    return (
        <Page>
            <Head>
            <title>| Produits</title>
            </Head>
            <Container>
                <Title
                    mobileDevice={mobileDevice}
                >
                    Nos produits
                </Title>
                <CarousellSelector
                    productType={productType}
                    setProductTypeSelected={setProductTypeSelected}
                />
                {products.map((product, index) => {
                    return (
                        <Card
                            key={index}
                            product={product}
                        />
                    )
                })}
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
    width: 100%;
`

const Title = styled.p`
    margin-top: ${({mobileDevice}) => mobileDevice ? '135px' : '10px'};
    font-family: FiraSansCondensed-Bold;
    font-size: 25px;
`