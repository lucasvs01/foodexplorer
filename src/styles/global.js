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

        background-color: ${({theme}) => theme.COLORS.DARK_400};
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        font-family: "Roboto", sans-serif;

    }

    button {
        cursor: pointer;
        border: none;
        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        
    }

    a, button {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        font-family: "Poppins", sans-serif;
        font-weight: medium;
        font-size: 1.4rem;
    }


    button:hover, a:hover{  

        filter: brightness(0.8);
        transition: all 200ms;

    }


`

