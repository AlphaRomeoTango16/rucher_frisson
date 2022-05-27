import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo/logo_rucher.svg'
import styled from 'styled-components';
import propTypes from 'prop-types'

Loader.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired
}

export default function Loader({desktopDevice, mobileDevice}) {
    return (
        <LoaderContainer>
            <TopLoader>
                <ImageContainer>
                    <Image
                        src={logo}
                        alt="Logo Rucher Frissons"
                        width={200}
                        height={100}
                        objectFit='fill'
                        priority
                    />
                </ImageContainer>
            </TopLoader>
            <BottomLoader>
            </BottomLoader>
        </LoaderContainer>
    )
}

const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 30;
    animation: opacity 5s 3.5s linear forwards;
    @keyframes opacity {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 0;
            z-index: -20;
        }
    }
`

const TopLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: white;
    width: 100%;
    height: ${({mobileDevice}) => mobileDevice ? '70%' : 'relative'};
    animation: up 3.5s 1s forwards;
    @keyframes up {
        0% {
            height: ${({mobileDevice}) => mobileDevice ? '70%' : 'relative'};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        100% {
            height: ${({mobileDevice}) => mobileDevice ? '12%' : 'relative'};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
`
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({mobileDevice}) => mobileDevice ? '50%' : '30%'};
`

const BottomLoader = styled.div`
    display: flex;
    background-color: white;
    width: 100%;
    height: ${({mobileDevice}) => mobileDevice ? '30%' : 'relative'};
    position: absolute;
    bottom: 0;
    animation: down 3s 1s forwards;
    @keyframes down {
        0% {
            height: ${({mobileDevice}) => mobileDevice ? '30%' : 'relative'};
            box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
        }
        100% {
            height: ${({mobileDevice}) => mobileDevice ? '11.5%' : 'relative'};
            box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
        }
    }
`