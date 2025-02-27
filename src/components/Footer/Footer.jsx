import React from "react";
import { FooterContainer, Nav, NavLink, Span, Div, Title} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
        <Div>
            <Nav>
                <Title>
                    <h1>Flowbit</h1>
                    <p>El momento perfecto para forjar tu versión</p>
                </Title>
            </Nav>
            <Nav>
                <NavLink href="/">Inicio</NavLink>
                <NavLink href="#">Beneficio</NavLink>
                <NavLink href="#">Registro</NavLink>
                <NavLink href="/login">Ingreso</NavLink>
                <NavLink href="#">Testimonio</NavLink>
            </Nav>
        </Div>
      
      <p>© 2025 <Span>Flowbit</Span>. Todos los derechos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;