import Head from 'next/head'
import styled from 'styled-components'
import Card from '../../components/card/card'
import products from '../../products'
import propTypes from 'prop-types'

Products.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired
}

export default function Products({mobileDevice}) {
    return (
        <Page
            mobileDevice={mobileDevice}
        >
            <Head>
            <title>| Produits</title>
            </Head>
            <Container>
                <Title>Nos produits</Title>
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
    width: 100%;
    height: 500px;
`

const Title = styled.p`
    font-family: FiraSansCondensed-Bold;
    font-size: 30px;
`