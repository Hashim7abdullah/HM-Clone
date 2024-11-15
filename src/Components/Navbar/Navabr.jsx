import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Left>
        <NavLink>Sustainability</NavLink>
        <NavLink>Customer Service</NavLink>
        <NavLink>Newsletter</NavLink>
        <Link>
          <img src="" alt="" />
        </Link>
      </Left>
      <Middle>
        <Logo>
          <img src="" alt="" />
        </Logo>
        <Links>
          <NavLink>Ladies</NavLink>
          <NavLink>Men</NavLink>
          <NavLink>Baby</NavLink>
          <NavLink>Kids</NavLink>
          <NavLink>Home</NavLink>
          <NavLink>Sale</NavLink>
        </Links>
      </Middle>
      <Right>
        <Top>
          <SignIn>
            <img src="" alt="" />
            <p>Sign in</p>
          </SignIn>
          <SignIn>
            <img src="" alt="" />
            <p>Favourites</p>
          </SignIn>
          <SignIn>
            <img src="" alt="" />
            <p>Shopping bag</p>
          </SignIn>
        </Top>
      </Right>
    </Container>
  );
};

export default Navbar;
