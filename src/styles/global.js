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

    button {
        cursor: pointer;
        border: none;
        background-color: ${({theme}) => theme.COLORS.BUTTON_BACKGROUND};
        color: ${({theme}) => theme.COLORS.FONT_COLOR_WHITE};
        
    }

    button:hover{  

        filter: brightness(0.8);
        transition: all 200ms;

    }
`

