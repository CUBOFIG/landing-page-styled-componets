import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavLogoSmall
} from './Navbar.elements'

import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ active }) => {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const scrollToTop = () => {
    scroll.scrollToTop()
  }


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={scrollToTop}>
              CUBO
            </NavLogo>
            <NavLogoSmall to="/" onClick={scrollToTop}>
              C
            </NavLogoSmall>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink
                  onClick={handleClick}
                  to='about'
                  smooth={true}
                  duration={1000}
                  exact='true'
                  offset={-80}
                  spy={true}
                  activeClass="active"
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={handleClick}
                  to='service'
                  smooth={true}
                  duration={500}
                  exact='true'
                  offset={-80}
                  spy={true}
                  activeClass="active"
                >
                  Service
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={handleClick}
                  to='contact'
                  smooth={true}
                  duration={500}
                  exact='true'
                  offset={-80}
                  spy={true}
                  activeClass="active"
                >
                  Contact
                </NavLink>
              </NavItem>
              {/* <NavItemBtn>
                {button
                  ? (
                    <NavBtnLink to="/sign-up">
                      <Button Button onClick={closeMobileMenu} fontBig primary text>
                        SIGN UP
                      </Button>
                    </NavBtnLink>
                  )
                  : (
                    <NavBtnLink to="/sign-up">
                      <Button onClick={closeMobileMenu} >
                        LOG OUT
                      </Button>
                    </NavBtnLink>
                  )}
              </NavItemBtn> */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
