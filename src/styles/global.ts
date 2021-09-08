import { createGlobalStyle } from "styled-components";
import backgroundSvg from '../assets/images/background.svg';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #191920 url(${backgroundSvg}) no-repeat center top;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
        color: #e2e2e2;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding: 12px;
  }

    button {
        cursor: pointer;
    }
`;
