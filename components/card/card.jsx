import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import styled from 'styled-components';
import propTypes from 'prop-types';

Card.propTypes = {
    product: propTypes.object.isRequired,
    mosaicFormat: propTypes.bool
}

export default function Card({product, mosaicFormat}) {

    return (
        <Link
            href={`/products/${product.id}`}
            as={`/products/${product.id}`}
            passHref
        >
            <CardContainer
                mosaicFormat={mosaicFormat}
            >
                <ImageContainer>
                    <Image
                        src={product.images[0].src}
                        alt={product.description[0].src}
                        layout='fill'
                        objectFit='cover'
                    />
                </ImageContainer>
                <TitleContainer>
                    <Title
                        mosaicFormat={mosaicFormat}
                    >{product.name}</Title>
                </TitleContainer>
            </CardContainer>
        </Link>
    )
}

const CardContainer = styled.div`
    display: flex;
    width: ${({mosaicFormat}) => mosaicFormat ? '150px' : '350px'};
    height: ${({mosaicFormat}) => mosaicFormat ? '150px' : '350px'};
    margin: 20px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex-direction: column;
    cursor: pointer;
`

const ImageContainer = styled.div`
    width: 100%;
    height: 80%;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
`

const TitleContainer = styled.div`
    width: 100%;
    height: 20%;
`

const Title = styled.p`
    font-size:  ${({mosaicFormat}) => mosaicFormat ? '10px' : '20px'};
    font-family: FiraSansCondensed-Light;
    margin-left: ${({mosaicFormat}) => mosaicFormat ? '10px' : '20px'};
    color: black;
`