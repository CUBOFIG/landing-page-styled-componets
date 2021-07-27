import styled from 'styled-components';
import { Container } from 'Styles/globalStyles'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-scroll'

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color:#fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: 'Righteous', cursive;

  @media screen and (max-width: 768px){
    /* padding: 160px 0; */
    display: none;
  }
`
export const NavLogoSmall = styled(Link)`
  display: none;

  @media screen and (max-width: 768px){
    /* padding: 160px 0; */
    color:#fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: 'Righteous', cursive;
    display: block;
    margin-top: 20px;
  }
`
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 92vh;
    position: absolute;
    top: 77px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`

export const NavItem = styled.li`
  height: 80px;
`
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &:hover{
    border-bottom: 2px solid #1F89E2;
  }

  &.active {
    border-bottom: 2px solid #1F89E2;
  }

  @media screen and (max-width: 960px){
    text-text-align:center;
    padding: 2rem;
    width: 100%;
    display: table;

    &.active {
    border-bottom: none;
    color:#1F89E2; 
  }

    &:hover{
      border: none;
      color: #1F89E2;
      transition: all 0.3s ease;
    }
  }
`
export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`
