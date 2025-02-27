import styled from "styled-components";
import theme from "../../styles/theme";
import imgComida from "../../asset/image/comida.jpg"
import imgEstudio from "../../asset/image/estudio.jpg"
import imgGimnasio from "../../asset/image/gimnasio.jpg"

export const BannerContrainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    img{
        border-radius: 30px;
    }
`

export const Title = styled.div`
    position: absolute;
    text-align: center;
    top: 1em;
    left: 18em;
    font-family: "Agbalumo", cursive;
    font-size: 30px;

    p{
        font-family: "Coming Soon", cursive;
        font-size: 20px;
    }
`

export const  MainContrainer = styled.main`
    margin: 1% 2%;
`
export const DivFlex = styled.div`
    display: flex;
    justify-content: space-around;
    width: ${(props) => (props.$spaceBetween ? "100%" : "")} ;
    align-items: center;
    flex-direction: ${(props) => (props.$flexColumn ? "column" : "row")};
    height: 100%;
    margin: ${(props) => (props.$space ? "30px" : "0")}
`
export const DivCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    width: 550px;
    height: 550px;
    border-radius: 100%;
    text-align: center;
    font-size: 20px;
    font-family: "Agbalumo", cursive;
    background-color: ${({ theme }) => theme.colors.background};
    background-image: radial-gradient(circle closest-side at center, ${({ theme }) => theme.colors.third},${({ theme }) => theme.colors.background});

    p{
        font-family: "Coming Soon", cursive;
        font-size: 15px;
        margin:20px;
    }
`

// 📌 shouldForwardProp le dice a styled-components que NO pase textCenter al HTML final.
// 📌 La prop sigue funcionando dentro de styled-components, pero no aparece en el DOM.
export const DivItem = styled.div.withConfig({
    shouldForwardProp: (prop) => !["divStyle", "borderRadius"].includes(prop),
})`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 430px;
    height: 40px;
    margin: 10px;
    background-color: ${(props) => (props.divStyle ? theme.colors.secondary : theme.colors.background)};
    border-radius: ${(props) => (props.borderRadius ? "30px" : "0px")};
  `;

export const CardContainer = styled.div`
  perspective: 1000px;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    transform-origin: center; /* Asegura que la rotación sea en el centro */
    
    ${CardContainer}:hover & {
        transform: rotateY(180deg);
    }
`; 

export const CardFace = styled.div`
    position: absolute;
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => theme.colors.fourth};
    border-radius: 100%;
    backface-visibility: hidden;
    padding: 10px;
    text-align: center;
`

export const CardBack = styled(CardFace)`
    transform: rotateY(180deg);
`;

const getBackgroundImage = (variant) => {
    switch (variant) {
      case "imgAlimento":
        return imgComida;
      case "imgEstudio":
        return imgEstudio;
      case "imgGimnasio":
        return imgGimnasio;
    }
  };

export const CardWrapper = styled.div`
  width: 345px;
  height: 460px;
  background-image: url(${(props) => getBackgroundImage(props.$variant)});
  background-size: cover;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;


  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Filtro negro semi-transparente */
  }

  &:hover {
    height: 460px; /* Expande la tarjeta */
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1;

  ${CardWrapper}:hover & {
    transform: translateY(-20px); /* Hace que el título suba */
  }
`;

export const CardText = styled.p`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  z-index: 1;
  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
  text-align: center;
  margin: 5px 20px;

  ${CardWrapper}:hover & {
    opacity: 1;
    max-height: 50%; /* Hace que el texto aparezca */
  }
`;

export const Span = styled.span`
  font-weight: bold;
  font-family: "DynaPuff", cursive;
`
export const GraphicContainer = styled.div`
    width:90%;
    p{font-family: "Coming Soon", cursive;}
    h3{text-align: left;}
`
export const Div = styled.div.withConfig({
    shouldForwardProp: (prop) => !["spaceTitle", "divCenter"].includes(prop),
})`
    width: ${(props) => (props.spaceTitle ? "80%" : "550px")};
    p{font-family: "Coming Soon", cursive;}
    li{
        margin:20px 10px;
    }
`
