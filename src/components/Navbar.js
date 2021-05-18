import React from "react";
import styled from "styled-components";
import Logo from "../images/marke.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const StyledLink = styled((props) => <AnchorLink {...props} />)`
  font-size: 1.25 rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.primary};
`;

const NavbarWrapper = styled.nav`
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  box-sizing: border-box;
  display: inline-flex;

  .nav-d {
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
  }

  svg {
    width: auto;
    height: 100%;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <AnchorLink to="/">
        <Logo />
      </AnchorLink>
      <div className="nav-d">
        <StyledLink to="/#naturheilkunde">Naturheilkunde</StyledLink>
        <StyledLink to="/#alternativmedizin">Alternativmedizin</StyledLink>
        <StyledLink to="#uebermich">Über mich</StyledLink>
        <StyledLink to="/praxis">Praxis</StyledLink>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
