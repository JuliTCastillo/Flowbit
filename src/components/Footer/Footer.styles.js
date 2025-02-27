import styled from "styled-components";

export const FooterContainer = styled.header`
  background-color: #ded4cb; /* Color del fondo */
  padding: 20px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  p{
    text-align: center;
    font-family: "Coming Soon", cursive;
  }
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
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
  font-weight: bold;
  font-family: "DynaPuff", cursive;
`
export const Title = styled.div`
    font-family: "Agbalumo", cursive;
    font-size: 30px;

    p{
        font-family: "Coming Soon", cursive;
        font-size: 20px;
    }
`