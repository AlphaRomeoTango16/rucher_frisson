import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Swiper, SwiperSlide} from 'swiper/react';
import propTypes from 'prop-types';

import 'swiper/css';

CarousellSelector.propTypes = {
}

export default function CarousellSelector() {
    const [swiper, setSwiper] = useState(null);

    const swiperRef = useRef;

    const slideTo = (index) => {
        if(swiper) {
            swiper.slideTo(index);
        }
    }

    useEffect(() => {
        console.log('swiper', swiper);
    }, [swiper]);

    return (
        <RadialGradient>
            <CarousellSelectorContainer>
                <ChevronButton>
                    <ChevronIconLeft onClick={() => swiperRef.current.swiper.slidePrev()} icon={faChevronLeft}/>
                </ChevronButton>
                <Swiper
                    onSwiper={setSwiper}
                    ref={swiperRef}
                    spaceBetween={10}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <ProductTypeTitle>Pollen</ProductTypeTitle>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductTypeTitle>Miel</ProductTypeTitle>
                    </SwiperSlide>
                </Swiper>
                <ChevronButton>
                    <ChevronIconRight onClick={() => swiperRef.current.swiper.slideNext()} icon={faChevronRight}/>
                </ChevronButton>
            </CarousellSelectorContainer>
        </RadialGradient>
    )
}

const RadialGradient = styled.div`
    display: flex;
    width: 200px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background: radial-gradient(60% 40% at center, black, grey, white)
`

const CarousellSelectorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 30px;
`

const ChevronButton = styled.div`
    display: flex;
    width: 20px;
`

const ChevronIconRight = styled(FontAwesomeIcon)`
    display: flex;
    width: 10px;
    margin-left: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
`

const ChevronIconLeft = styled(FontAwesomeIcon)`
    display: flex;
    width: 10px;
    margin-right: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
`

const ProductTypeTitle = styled.p`
    font-family: FiraSansCondensed-Light;
    font-size: 20px;
    text-align: center;
    width: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
`