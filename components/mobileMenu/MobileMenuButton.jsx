import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Logo from '../../assets/logo/logo_menu.svg'
import Cross from '../../assets/logo/cross.svg'

export default function MobileMenuButton() {
    const [menuOpen, setMenuOpen] = useState(false);

    const showMenu = () =>  setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const ref = useRef();
    useOnClickOutside(ref, () => setMenuOpen(false));

    function useOnClickOutside(ref, handler) {
        useEffect(() => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);

            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener)
            };
        }, [ref, handler])
    }

    return (
        <>
        <ButtonContainer ref={ref} isOpen={menuOpen} onClick={showMenu}>
            <HexagonShadow>
                <Hexagon>
                    <motion.div
                        animate={{ rotateY: menuOpen ? 360 : 0 }}
                        transition={{ duration: 1 }}
                    >
                    <Image
                        src={menuOpen ? Cross : Logo}
                        alt='Ouvrir menu'
                        width={menuOpen ? 30 : 60}
                        height={menuOpen? 25: 50}
                    />
                    </motion.div>
                </Hexagon>
            </HexagonShadow>
        </ButtonContainer>
        <MenuContent isOpen={menuOpen}>
            <Title>Menu</Title>
            <TableContent>
                <Link href='/' passHref onClick={closeMenu}>
                    <NavLink>Accueil</NavLink>
                </Link>
                <Link href='/products/products' passHref>
                    <NavLink>Nos produits</NavLink>
                </Link>
                <Link href='/services/services' passHref>
                    <NavLink>Nos services</NavLink>
                </Link>
                <Link href='/story/story' passHref>
                    <NavLink>Notre histoire</NavLink>
                </Link>
                <Link href='/dealers/dealers' passHref>
                    <NavLink>Nos revendeurs</NavLink>
                </Link>
                <Link href='/contact/contact' passHref>
                    <NavLink>Nous contacter</NavLink>
                </Link>

            </TableContent>
        </MenuContent>
        </>
    )
}

const ButtonContainer = styled.div`
    top: 110px;
    right: 10px;
    height: 57.735px;
    position: fixed;
    z-index: 10;
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

const MenuContent = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 100px;
    background-color: white;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    transition: transform 0.5s ease-in-out;
    transform: ${({isOpen}) => isOpen ? 'translateX(0)' : 'translateX(-161%)'};
`

const Title = styled.p`
    font-size: 30px;
    font-family: FiraSansCondensed-Bold;
    margin-top: 37px;
    margin-bottom: 45px;
`

const TableContent = styled.div`
    display: flex;
    width: 100%;
    height: 60%;
    flex-direction: column;
    align-items: center;
`

const NavLink = styled.a`
    font-family: FiraSansCondensed-Regular;
    font-size: 25px;
    margin-bottom: 45px;
`