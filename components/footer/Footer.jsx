import styled from 'styled-components'
import propTypes from 'prop-types'

Footer.propTypes = {
    mobileDevice: propTypes.bool.isRequired
}

export default function Footer({mobileDevice}) {
    return (
        <FooterContainer
            mobileDevice={mobileDevice}
        >
            <FContainer>

                <SocialNetworkContainer>
                    <SocialNetwork
                        href='https://www.instagram.com/rucher_frisson/?hl=en'
                        target={'_blank'}
                    >Instagram</SocialNetwork>
                    <SocialNetwork
                        href='https://www.facebook.com/rucherfrisson/'
                        target={'_blank'}
                    >Facebook
                    </SocialNetwork>
                </SocialNetworkContainer>

                <Credit
                    mobileDevice={mobileDevice}
                >
                    Copyright ©2022.  Tous droits réservés, Amaury Frisson. Designé et conçu par Arthur Della Faille.
                </Credit>

            </FContainer>

        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    position: ${({mobileDevice}) => mobileDevice ? 'fixed' : 'relative'};
    z-index: 20;
    bottom: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
`

const FContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
`

const SocialNetworkContainer = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-around;
    width: 20%;
`

const SocialNetwork = styled.a`
    font-size: 13px;
    font-family: Spartan-Light;
    color: black;
    margin: 10px;
`

const Credit = styled.p`
    width: 90%;
    font-family: Spartan-Light;
    text-align: center;
    font-size: ${({mobileDevice}) => mobileDevice ? '5px' : '10px'};
    margin-bottom: 10px;
    color: black;
`