import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Coming+Soon&family=DynaPuff:wght@400..700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "DynaPuff", cursive;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h3{
    text-align: center;
  }

  .title{
        font-family: "Agbalumo", cursive;
  }

  .text{
    font-family: "Coming Soon", cursive;
    text-align: center;
    width: 550px;
  }
`;

export default GlobalStyles;