import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo/logo_rucher.svg'
import styled from 'styled-components';

export default function Loader() {
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
    animation: opacity 5s 5s linear forwards;
    @keyframes opacity {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.3;
        }
        100% {
            opacity: 0;
            z-index: -30;
        }
    }
`

const TopLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: white;
    width: 100%;
    height: 70%;
    animation: up 3.5s 2.5s forwards;
    @keyframes up {
        0% {
            height: 70%;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        100% {
            height: 12%;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
`
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
`

const BottomLoader = styled.div`
    display: flex;
    background-color: white;
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0;
    animation: down 3s 2.5s forwards;
    @keyframes down {
        0% {
            height: 30%;
            box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
        }
        100% {
            height: 11.5%;
            box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
        }
    }
`