import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import storyImage from '../../assets/images/rucher_frisson_story.jpg'
import propTypes from 'prop-types'

Story.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired
}

export default function Story({mobileDevice}) {

    const scrollToTop = () => {
        if (typeof window === 'object')
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };
    
    return (
        <Page>
            <Head>
                <title>| Services</title>
            </Head>
            <Container mobileDevice={mobileDevice}>
                <ImageContainer mobileDevice={mobileDevice}>
                    <Image
                        src={storyImage}
                        alt='Amaury Frisson, CEO de Rucher Frisson.'
                        layout='fill'
                        objectFit='cover'
                    />
                </ImageContainer>
                <TextContainer mobileDevice={mobileDevice}>
                    <Text mobileDevice={mobileDevice}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/><br/>Mauris ut lectus et nisl eleifend hendrerit. Phasellus placerat vestibulum orci et viverra. Integer fermentum dapibus ipsum, quis molestie magna dictum nec. <br/><br/>Ut interdum mauris augue, vel tristique nisi semper nec. Sed velit massa, dignissim ac mi non, euismod fermentum diam. Aliquam ac lectus at lectus mattis tempus eu sed libero. Mauris malesuada lectus ipsum, eget finibus diam pulvinar sed. Curabitur euismod enim eget dolor maximus, eget egestas ipsum eleifend. Duis at laoreet lorem, id accumsan nisl. Nunc rutrum in nisl id semper. Nulla cursus quis dui at pharetra. Pellentesque ullamcorper ornare fermentum. Morbi blandit nisl at consectetur volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

                Suspendisse nec vulputate lectus. <br/><br/>Sed ac quam quis purus tempor ultrices vel ac velit. Phasellus vehicula mi et leo iaculis finibus. Fusce sapien est, ultrices et sapien vel, rutrum rutrum mauris. Aliquam eleifend, lorem ac scelerisque congue, diam ligula elementum ligula, in elementum risus augue a nulla. Vivamus efficitur vitae neque porttitor mattis. Sed ante quam, bibendum sed laoreet non, semper non turpis. Pellentesque in libero lacinia mi scelerisque rhoncus. Proin erat risus, rhoncus posuere eros nec, consequat interdum nisi. Nullam vestibulum turpis facilisis, cursus eros maximus, dictum massa. Etiam nunc nibh, commodo eget ultrices eget, semper ac neque.
                    </Text>
                </TextContainer>
                {mobileDevice &&
                    <ButtonToTop onClick={() => scrollToTop()}>
                        <ArrowIcon icon={faArrowUp}/>
                        Retourner en haut de la page.
                    </ButtonToTop>
                }
            </Container>
        </Page>
    )
}

const Page = styled.div`
`

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({mobileDevice}) => mobileDevice ? 'column' : 'row'};
    margin-bottom: ${({mobileDevice}) => mobileDevice ? '120px' : '0px'};
    width: 100%;
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: ${({mobileDevice}) => mobileDevice ? '90px' : '0px'};
    width: ${({mobileDevice}) => mobileDevice ? '100%' : '50%'};
    height: ${({mobileDevice}) => mobileDevice ? '300px' : '500px'};
`

const TextContainer = styled.div`
    width: ${({mobileDevice}) => mobileDevice ? '100%' : '50%'};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.div`
    margin-top: ${({mobileDevice}) => mobileDevice ? '20px' : '10px'};
    margin-left: ${({mobileDevice}) => mobileDevice ? '20px' : '10px'};
    margin-right: ${({mobileDevice}) => mobileDevice ? '20px' : '10px'};
    font-family: FiraSansCondensed-Light;
`

const ButtonToTop = styled.a`
    display: flex;
    align-items: center;
    margin-top: 30px;
    font-family: Spartan-Regular;
    font-size: 10px;
`

const ArrowIcon = styled(FontAwesomeIcon)`
    width: 10px;
    margin-right: 10px;
`