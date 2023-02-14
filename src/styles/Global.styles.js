import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

}

body {
    font-family: monospace;
    padding: 20px 40px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.color};
}

a {
    text-decoration: none;
    color: #000;
}

`;
