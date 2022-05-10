import React, {useRef} from 'react';
import styled from 'styled-components';
import Card from '../card/card';
import {Swiper, SwiperSlide} from 'swiper/react';
import propTypes from 'prop-types';

Slide.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired,
    products: propTypes.array.isRequired,
    swiperIndex: propTypes.number.isRequired
}

export default function Slide({products, swiperIndex}) {
    const swiperRef = useRef(null);

    return (
        <DisplayProductContainer>
            <SlideContainer>
                {swiperIndex === 0 &&
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={10}
                        slidesPerView={1}
                    >
                        {products.filter((item) => item.category === 'Pollen').map((product, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card
                                        product={product}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                
                }
                {swiperIndex === 1 &&
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={10}
                        slidesPerView={1}
                    >
                        {products.filter((item) => item.category === 'Miel').map((product, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card
                                        product={product}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                
                }
                </SlideContainer>
            <SliderText>Glisser les produits vers la gauche.</SliderText>
        </DisplayProductContainer>

    )
}

const DisplayProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const SlideContainer = styled.div`
    display: flex;
    width: 100%;
`

const SliderText = styled.p`
    font-family: Spartan-Light;
    font-size: 13px;
    text-align: center;
`