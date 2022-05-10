import React from 'react';
import styled from 'styled-components'
import Card from '../card/Card'
import propTypes from 'prop-types'

List.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired,
    products: propTypes.array.isRequired,
    swiperIndex: propTypes.number.isRequired
}

export default function List({products, swiperIndex}) {
    return (
        <DisplayProductContainer>
                {swiperIndex === 0 &&
                products.filter((item) => item.category === 'Pollen').map((product, index) => {
                    return (
                        <Card
                            key={index}
                            product={product}
                        />
                    )
                })}
                {swiperIndex === 1 &&
                products.filter((item) => item.category === 'Miel').map((product, index) => {
                    return (
                        <Card
                            key={index}
                            product={product}
                        />
                    )
                })}
        </DisplayProductContainer>

    )
}

const DisplayProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`