import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    html,
    body,
    #root {
    height: 100%;
    }
    * {
    box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
        }
    a {
    color: inherit;
    text-decoration: none;
    }
`;

export default GlobalStyles;
