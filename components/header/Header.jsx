import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/logo/LOGO_RUCHER_VECTOR.svg'
import propTypes from 'prop-types'

Header.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
}

export default function Header({desktopDevice}) {
    return (
        <HeaderContainer>
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
                            href='product/product'
                            passHref
                        ><NavLink>Nos produits</NavLink>
                        </Link>
                        <Link
                            href='service/service'
                            passHref
                        ><NavLink>Nos services</NavLink>
                        </Link>
                    </NavBarContainer>
                }
                <Image
                        src={logo}
                        alt="Logo Rucher Frissons"
                        width={200}
                        height={100}
                    />
                {desktopDevice &&
                    <NavBarContainer>
                        <Link
                            href='story/story'
                            passHref
                        ><NavLink>Notre histoire</NavLink>
                        </Link>
                        <Link
                            href='dealers/dealers'
                            passHref
                        ><NavLink>Nos revendeurs</NavLink>
                        </Link>
                        <Link
                            href='contact/contact'
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
    position: relative;
    width: 100%;
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
`