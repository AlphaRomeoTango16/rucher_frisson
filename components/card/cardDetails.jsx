import React, {useRef} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import {Swiper, SwiperSlide} from 'swiper/react';
import ProductVideo from '../video/ProductVideo';
import propTypes from 'prop-types';

import 'swiper/css';

CardDetails.propTypes = {
    product: propTypes.object
}

export default function CardDetails({product}) {
    const router = useRouter();
    const swiperRef = useRef(null);

    return (
        <CardDetailsContainer>
            <ImageContainer>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={10}
                    slidesPerView={1}
                >
                    <SwiperSlide><ProductVideo/></SwiperSlide>
                    {product.images.map((image, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Image
                                    src={image.src}
                                    alt={image.description}
                                    objectFit='cover'
                                />
                            </SwiperSlide>
                                )
                        })}
                </Swiper>
                <ButtonLine>
                    <ButtonBack onClick={() => router.back()}>
                        <ChevronIconLeft icon={faChevronLeft}/>
                    </ButtonBack>
                    <ButtonSwitchImage>
                        <SwitchLeft onClick={() => swiperRef.current.swiper.slidePrev()} icon={faCaretLeft}/>
                        <SwitchRight onClick={() => swiperRef.current.swiper.slideNext()} icon={faCaretRight}/>
                    </ButtonSwitchImage>
                </ButtonLine>
            </ImageContainer>
            <TextContainer>
                <LineOne><ProductName>{product.name}</ProductName></LineOne>
                <LineTwo><ProductPrice>Prix {product.price}€ TTC</ProductPrice></LineTwo>
                <ProductDescrpition>{product.description}</ProductDescrpition>
            </TextContainer>
        </CardDetailsContainer>
    )
}

const CardDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 100px;
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const ButtonLine = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 90%;
    left: 15px;
    right: 15px;
    bottom: 20px;
    margin-top: -30px;
`

const ButtonBack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    z-index: 5;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const ButtonSwitchImage = styled.div`
    display: flex;
    z-index: 5;
    justify-content: space-between;
    width: 30px;
`

const SwitchLeft = styled(FontAwesomeIcon)`
    width: 15px;
    color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const SwitchRight = styled(FontAwesomeIcon)`
    width: 15px;
    color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const ChevronIconLeft = styled(FontAwesomeIcon)`
    width: 10px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const LineOne = styled.div`
    display: flex;
    margin-bottom: 10px;
`

const ProductName = styled.div`
    display: flex;
    font-size: 20px;
    font-family: FiraSansCondensed-Medium;
`

const LineTwo = styled.div`
    display: flex;
    margin-bottom: 10px;
`

const ProductPrice = styled.div`
    display: flex;
    font-family: FiraSansCondensed-Regular;
`

const ProductDescrpition = styled.div`
    display: flex;
    font-size: 13px;
    font-family: FiraSansCondensed-Light;
    text-align: justify;
`
