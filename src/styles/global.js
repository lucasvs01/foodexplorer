import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        

    }

    :root{
        font-size: 62.5%;
        height: 100vh;
        width: 100vw;

        background-color: ${({theme}) => theme.COLORS.MAIN_BACKGROUND};

        color: ${({theme}) => theme.COLORS.FONT_COLOR_WHITE};

        font-family: "Roboto", sans-serif;

    }
`

