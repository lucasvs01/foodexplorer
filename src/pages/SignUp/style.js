import styled from "styled-components";

export const Container = styled.div`

/* Mobile */
@media (max-width:${({theme}) => theme.SIZES.LARGE}){

    height: 100vh;
    width: 100%;
    padding: 15.8rem 4.7rem 0 6.5rem;
   
    >h1 {
        display: flex;
        align-items: center;
        gap: 1.1rem;
        padding-bottom: 7.3rem;

        font-size: 3.8rem;
    }

    >div {
        form {
            display: grid;
            gap: 3.2rem;

            h1 {
            display: none;
            }

            footer{

                display: grid;
                gap: 3.2rem;

                text-align: center;

                button {
                    width: 100%;
                }
            }
        }                
    }
}    

/* Large Desktop */
@media (min-width: ${({theme}) => theme.SIZES.LARGE}){
    display: grid;
    grid-template-columns: 78.4rem auto;

    padding: 0;
    height: 100vh;
    width: 100%;

    align-items: start;


    >h1 {
        display: flex;
        gap: 2.2rem;

        padding: 34rem 0 0 15.7rem;


    }

    >div {

        background-color: ${({theme}) => theme.COLORS.DARK_700};
        border-radius: 1.6rem;

        height: 100vh;

        max-height: 62.1rem;
        max-width: 47.6rem;
        margin: 9rem 10.8rem 0 0;
        padding: 6.4rem;

        form {
            width: 100%;

            display: grid;
            align-items: start;
            gap: 3.2rem;

        }

        h1 {
            text-align: center;
        }

        footer{

            display: grid;
            gap: 3.2rem;

            text-align: center;

            button {
                width: 100%;
            }
        }
    }
}

/* Desktop 1024px*/
@media (min-width: ${({theme}) => theme.SIZES.LARGE}) and (max-width: ${({theme}) => theme.SIZES.EXTRA_LARGE}){
    grid-template-columns: 50rem auto;
}

`;