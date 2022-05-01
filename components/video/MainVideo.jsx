import React, {useRef} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

MainVideo.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired
}

export default function MainVideo({desktopDevice, mobileDevice}) {
    const videoRef = useRef();

    return (
        <VideoContainer>
            <video
                ref={videoRef}
                muted
                autoPlay
                loop
                style={{
                    width: desktopDevice ? '100%' : '100%',
                    maxHeight: desktopDevice ? '500px' : '200%',
                    objectFit: 'cover'
                }}
            >
                {desktopDevice &&
                    <source
                    src={'/mainVideoDesktop.mp4'}
                    type='video/mp4'
                    />
                }
                {mobileDevice &&
                    <source
                    src={'/mainVideoMobile.mp4'}
                    type='video/mp4'
                    />
                }
            </video>
        </VideoContainer>
    )
}

const VideoContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: black;
    justify-content: center;
`