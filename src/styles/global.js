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
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
    }


    button:hover, a:hover{  

        filter: brightness(0.8);
        transition: all 200ms;

    }

    /* Fonts class */

    /* Poppins =====> */

    .poppins-100-medium{
        font-family: "Poppins", sans-serif;        
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
    }

    .poppins-200-medium{
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 2rem;
        line-height: 160%;
    }

    .poppins-400-medium{
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
    }
    
    .poppins-500-medium{
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 4rem;
        line-height: 140%;
    }

    .poppins-300-bold{
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 2.4rem;
        line-height: 140%;
    }

    .poppins-300-regular{
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 140%;
    }

    
    /* Roboto =====> */

    .roboto-smallest-regular{
        font-family: "Roboto", sans-serif;   
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 160%;
    }

    .roboto-smaller-regular{
        font-family: "Roboto", sans-serif;   
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 160%;
    }

    .roboto-smaller-bold{
        font-family: "Roboto", sans-serif;   
        font-weight: bold;
        font-size: 1.4rem;
        line-height: 160%;
    }

    .roboto-small-spaced{
        font-family: "Roboto", sans-serif;   
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 160%;
    }

    .roboto-small-regular{
        font-family: "Roboto", sans-serif;   
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
    }

    .roboto-big-bold{
        font-family: "Roboto", sans-serif;   
        font-weight: bold;
        font-size: 2rem;
        line-height: 160%;
    }

    .roboto-bigger-bold{
        font-family: "Roboto", sans-serif;   
        font-weight: bold;
        font-size: 2.4rem;
    }

    .roboto-biggest-regular{
        font-family: "Roboto", sans-serif;   
        font-weight: 400;
        font-size: 4.2rem;
        line-height: 160%;
    }

    .roboto-giant-bold{
        font-family: "Roboto", sans-serif;   
        font-weight: bold;
        font-size: 4.2rem;
    }
`

