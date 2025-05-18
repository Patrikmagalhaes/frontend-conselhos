// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import OldLondon from "../assets/fonts/OldLondon/OldLondon.ttf";
import Kent from "../assets/fonts/kent-4f/Kent4FPrintedShadowed.otf.ttf";

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'OldLondon';
    src: url(${OldLondon}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

  @font-face {
    font-family: 'kent';
    src: url(${Kent}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
    
  body{

    background-color: #000;
    color: #fff;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1,h2{
    font-family: 'OldLondon';
    color:#faf4e6;
    font-weight: 300;
    letter-spacing: 3px;
  }
    
  button{
    font-family: 'OldLondon';
 }
  
  p{ 
    font-family: 'kent';
    color:#faf4e6;
  }
`;

export default GlobalStyles;
