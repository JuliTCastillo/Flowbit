import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #ded4cb; /* Color del fondo */
  padding: 20px;
  display: flex;
  justify-content: space-between; /* Distribuye los elementos a los extremos */
  align-items: center;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 40px; /* Espacio entre los enlaces */
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1rem;

  &:hover {
    color: gray;
  }
`;

export const Span = styled.span`
  width: 168px;
`
