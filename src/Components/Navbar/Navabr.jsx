import React from "react";
import {
  Container,
  Logo,
  NavLinks,
  NavLink,
  SearchContainer,
  SearchInput,
  IconContainer,
} from "../Navbar/Navabar";

const Navbar = () => {
  return (
    <Container>
      <Logo>H&M</Logo>
      <NavLinks>
        <NavLink href="#">Women</NavLink>
        <NavLink href="#">Men</NavLink>
        <NavLink href="#">Kids</NavLink>
        <NavLink href="#">Sale</NavLink>
      </NavLinks>
      <IconContainer>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search" />
        </SearchContainer>
        <NavLink href="#">Sign In</NavLink>
        <NavLink href="#">Cart</NavLink>
      </IconContainer>
    </Container>
  );
};

export default Navbar;
