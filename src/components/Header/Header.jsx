import React from "react";
import { HeaderContainer, Nav, NavLink, Span } from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Span></Span> 
      <Nav>
        <NavLink href="#">Beneficios</NavLink>
        <NavLink href="/">Inicio</NavLink>
        <NavLink href="#">Testimonio</NavLink>
      </Nav>
      <Nav>
        <NavLink href="/login">Ingresar</NavLink>
        <NavLink href="#">Registro</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
