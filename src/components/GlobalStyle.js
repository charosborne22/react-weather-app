import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: black;
        color: white;
        font-family: 'Lato', sans-serif;
    }

`;

export default GlobalStyle;
