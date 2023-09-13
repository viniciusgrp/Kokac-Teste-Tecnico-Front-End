import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    :root {
        --color-primary:  #ffffd7;
        --color-secundary: #0000ff;
    }
`