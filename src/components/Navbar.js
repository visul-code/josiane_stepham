import React, { useContext } from "react";
import styled from "styled-components";
import Logo from "../images/marke.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { mediaQueries } from "../utils/MediaQuerie";
import Hamburger from "./Hamburger";
import { GlobalStateContext } from "../global/Context";

const StyledLink = styled((props) => <AnchorLink {...props} />)`
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.primary};
`;

const NavbarWrapper = styled.nav`
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: 1rem 10%;
  box-sizing: border-box;
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.background};

  .nav-d {
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
    ${mediaQueries.lessThan("tablet")`
    
    display: none;
    
    `}
  }

  .nav-m {
    display: none;

    ${mediaQueries.lessThan("tablet")`
    
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    
    `}
  }

  .nav-mm {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    padding: 3rem;
    transition: transform 0.5s ease-in-out;
    transform: ${(props) =>
      props.open ? "translate(0,0)" : "translate(-100%, 0)"};

    a {
      font-size: 5rem;
    }
  }

  svg {
    width: auto;
    height: 100%;
  }
`;

const Navbar = () => {
  const { open, handleSetOpen } = useContext(GlobalStateContext);

  return (
    <NavbarWrapper open={open}>
      <AnchorLink to="/">
        <Logo />
      </AnchorLink>

      <div className="nav-d">
        <StyledLink to="/#naturheilkunde">Naturheilkunde</StyledLink>
        <StyledLink to="/#alternativmedizin">Alternativmedizin</StyledLink>
        <StyledLink to="/#uebermich">Über mich</StyledLink>
        <StyledLink to="/#praxis">Praxis</StyledLink>
      </div>
      <div className="nav-m">
        <Hamburger />
        <div className="nav-mm">
          <StyledLink
            onAnchorLinkClick={() => handleSetOpen()}
            to="/#naturheilkunde"
          >
            Naturheilkunde
          </StyledLink>
          <StyledLink
            onAnchorLinkClick={() => handleSetOpen()}
            to="/#alternativmedizin"
          >
            Alternativmedizin
          </StyledLink>
          <StyledLink
            onAnchorLinkClick={() => handleSetOpen()}
            to="/#uebermich"
          >
            Über mich
          </StyledLink>
          <StyledLink onAnchorLinkClick={() => handleSetOpen()} to="/#praxis">
            Praxis
          </StyledLink>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
