import React, {useRef} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

ProductVideo.propTypes = {
    desktopDevice: propTypes.bool,
    mobileDevice: propTypes.bool
}

export default function ProductVideo({desktopDevice, mobileDevice}) {
    const videoRef = useRef();

    return (
        <VideoContainer
        >
            <video
                ref={videoRef}
                muted
                autoPlay
                loop
                style={{
                    width: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover'
                }}
            >
                <source
                    src={'/mielEteVideo.mp4'}
                    type='video/mp4'
                />
            </video>
        </VideoContainer>
    )
}

const VideoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: black;
    justify-content: center;
`