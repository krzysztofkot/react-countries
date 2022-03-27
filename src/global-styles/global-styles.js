import { createGlobalStyle } from "styled-components";
import Lobster from "../assets/fonts/Lobster-Regular.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";
import RobotoBlack from "../assets/fonts/Roboto-Black.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Lobster';
  src: url(${Lobster}) format("truetype");
  font-display: swap;
}

@font-face {
  font-family: 'Roboto-regular';
  src: url(${RobotoRegular}) format("truetype");
  font-display: swap;
}

@font-face {
  font-family: 'Roboto-black';
  src: url(${RobotoBlack}) format("truetype");
  font-display: swap;
}


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Roboto-regular', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

`;

export default GlobalStyle;
