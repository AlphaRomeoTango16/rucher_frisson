import React, {useState} from 'react';
import styled from 'styled-components'
import Card from '../card/Card'
import propTypes from 'prop-types'

Mosaic.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired,
    products: propTypes.array.isRequired,
    swiperIndex: propTypes.number.isRequired
}

export default function Mosaic({products, swiperIndex}) {
    const [mosaicFormat] = useState(true);

    return (
        <DisplayProductContainer>
            <MosaicContainer>
                {swiperIndex === 0 &&
                products.filter((item) => item.category === 'Pollen').map((product, index) => {
                    return (
                        <Card
                            key={index}
                            product={product}
                            mosaicFormat={mosaicFormat}
                        />
                    )
                })}
                {swiperIndex === 1 &&
                products.filter((item) => item.category === 'Miel').map((product, index) => {
                    return (
                        <Card
                            key={index}
                            product={product}
                            mosaicFormat={mosaicFormat}
                        />
                    )
                })}
            </MosaicContainer>
        </DisplayProductContainer>

    )
}

const DisplayProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const MosaicContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`