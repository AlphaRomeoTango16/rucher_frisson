import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/logo/logo_rucher.svg'
import propTypes from 'prop-types'

Header.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired
}

export default function Header({desktopDevice, mobileDevice}) {
    return (
        <HeaderContainer
            mobileDevice={mobileDevice}
        >
            <HContainer>
                {desktopDevice &&
                    <NavBarContainer>
                        <Link
                            href='/'
                            passHref
                        ><NavLink
                        >Accueil</NavLink>
                        </Link>
                        <Link
                            href='/products/products'
                            passHref
                        ><NavLink>Nos produits</NavLink>
                        </Link>
                        <Link
                            href='/services/services'
                            passHref
                        ><NavLink>Nos services</NavLink>
                        </Link>
                    </NavBarContainer>
                }
                <ImageContainer>
                    <Image
                            src={logo}
                            alt="Logo Rucher Frissons"
                            width={300}
                            height={100}
                            objectFit='fill'
                        />
                </ImageContainer>
                {desktopDevice &&
                    <NavBarContainer>
                        <Link
                            href='/story/story'
                            passHref
                        ><NavLink>Notre histoire</NavLink>
                        </Link>
                        <Link
                            href='/dealers/dealers'
                            passHref
                        ><NavLink>Nos revendeurs</NavLink>
                        </Link>
                        <Link
                            href='/contact/contact'
                            passHref
                        ><NavLink>Nous contacter</NavLink>
                        </Link>
                    </NavBarContainer>
                }
            </HContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    position: ${({mobileDevice}) => mobileDevice ? 'fixed' : 'relative'};
    z-index: 20;
    display: flex;
    justify-content: center;
    width: 100%;
    height: ${({mobileDevice}) => mobileDevice ? '100px' : 'none'};
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const HContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`

const NavBarContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-around;
`

const NavLink = styled.a`
    font-family: FiraSansCondensed-Regular;
    font-size: 13px;
    padding: 10px 15px;
    ::after {
        content: '';
        width: 0px;
        height: 1px;
        display: block;
        transition: 300ms;
    }
    :hover::after {
        background: black;
        width: 100%;
    }
`

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 39%;
`