import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Logo from '../../assets/logo/logo_menu.svg'
import Cross from '../../assets/logo/cross.svg'

export default function MobileMenuButton() {
    const [menuOpen, setMenuOpen] = useState(false);

    const showMenu = () =>  setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
        <ButtonContainer isOpen={menuOpen} onClick={showMenu}>
            <HexagonShadow>
                <Hexagon>
                {menuOpen ?
                    <Image
                        src={Cross}
                        alt='Fermer menu'
                        width={60}
                        height={50}
                    />:
                    <Image
                        src={Logo}
                        alt='Ouvrir menu'
                        width={60}
                        height={50}
                    />
                
                }
                </Hexagon>
            </HexagonShadow>
        </ButtonContainer>
        <Menu isOpen={menuOpen}>
            <MenuContent>
                <Title>Menu</Title>
                <TableContent>
                    <Link href='/' passHref>
                        <NavLink onClick={closeMenu}>Accueil</NavLink>
                    </Link>
                    <Link href='/products/products' passHref>
                        <NavLink onClick={closeMenu}>Produits</NavLink>
                    </Link>
                    <Link href='/services/services' passHref>
                        <NavLink onClick={closeMenu}>Services</NavLink>
                    </Link>
                    <Link href='/story/story' passHref>
                        <NavLink onClick={closeMenu}>Histoire</NavLink>
                    </Link>
                    <Link href='/dealers/dealers' passHref>
                        <NavLink onClick={closeMenu}>Revendeurs</NavLink>
                    </Link>
                    <Link href='/contact/contact' passHref>
                        <NavLink onClick={closeMenu}>Contact</NavLink>
                    </Link>
                </TableContent>
            </MenuContent>
        </Menu>
        </>
    )
}

const ButtonContainer = styled.div`
    top: 100px;
    right: 10px;
    height: 57.735px;
    position: fixed;
    z-index: 16;
`

const HexagonShadow = styled.div`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
`

const Hexagon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    width: 65px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: initial;
    background-color: white;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
`

const Menu = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 100px;
    background-color: white;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 15;
    transition: transform 0.5s ease-in-out;
    transform: ${({isOpen}) => isOpen ? 'translateX(0)' : 'translateX(-161%)'};
`

const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: auto;
    height: 900px;
`

const Title = styled.p`
    font-size: 30px;
    font-family: FiraSansCondensed-Bold;
    margin-top: 37px;
    margin-bottom: 35px;
`

const TableContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NavLink = styled.a`
    font-family: FiraSansCondensed-Regular;
    font-size: 20px;
    margin-bottom: 33px;
`