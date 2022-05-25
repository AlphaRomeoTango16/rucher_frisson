import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function Loader() {
    return (
        <LoaderContainer>
            <TopLoader>

            </TopLoader>
            <BottomLoader>

            </BottomLoader>
        </LoaderContainer>
    )
}

const LoaderContainer = styled.div`
    display: flex;
    position: absolute;
    z-index: 30;
    flex-direction: column;
`

const TopLoader = styled.div`
    display: flex;
    background-color: white;
    width: 100%;
    height: 500px;
`

const BottomLoader = styled.div`
    display: flex;
    background-color: white;
    width: 100%;
    height: 500px;
`