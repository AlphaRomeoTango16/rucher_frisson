import React from 'react';
import Image from 'next/image'
import styled from 'styled-components';
import propTypes from 'prop-types';

Card.propTypes = {
    product: propTypes.object.isRequired
}

export default function Card({product}) {

    return (
        <CardContainer>
            <ImageContainer>
                <Image
                    src={product.mainImage}
                    alt={product.mainImageDescritpion}
                    layout='fill'
                />
            </ImageContainer>
            <TitleContainer>
                <Title>{product.name}</Title>
            </TitleContainer>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    width: 300px;
    height: 300px;
    margin: 20px;
    border: 1px solid;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex-direction: column;
    cursor: pointer;
`

const ImageContainer = styled.div`
    width: 100%;
    height: 80%;
    position: relative;
`

const TitleContainer = styled.div`
    width: 100%;
    height: 20%;
`

const Title = styled.p`
    font-size: 15px;
    font-family: FiraSansCondensed-Light;
    margin-left: 20px;
    color: black;
`