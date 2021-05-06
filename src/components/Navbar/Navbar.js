import React, { useState, useEffect } from 'react'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements'
import { Button } from '../../globalStyles'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => { setClick(!click) }
    const showButton = () => { if (window.innerWidth <= 960) { setButton(false) } else { setButton(true) } }

    useEffect(() => {
        window.addEventListener('resize', showButton)
        return window.removeEventListener('resize', showButton)
    }, [])



    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon />
                            ОМЕГА
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu click={click}>
                            <NavItem><NavLinks to='/'>Главная</NavLinks></NavItem>
                            <NavItem><NavLinks to='/services'>Услуги</NavLinks></NavItem>
                            <NavItem><NavLinks to='/products'>Продукты</NavLinks></NavItem>
                            <NavItemBtn>
                                {
                                    button
                                        ? <NavBtnLink to="/sign-up"><Button>Регистрация</Button></NavBtnLink>
                                        : <NavBtnLink to="/sign-up"><Button fontBig>Регистрация</Button></NavBtnLink>
                                }
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar