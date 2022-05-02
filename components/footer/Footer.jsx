import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterContainer>
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

                <Credit>
                    Copyright ©2021.  Tous droits réservés, Amaury Frisson. Designé et conçu par Arthur Della Faille.
                </Credit>

            </FContainer>

        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    position: relative;
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
    font-size: 5%;
    margin-bottom: 10px;
    color: black;
`