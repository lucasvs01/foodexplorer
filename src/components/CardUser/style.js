import styled from "styled-components";

export const Container = styled.div`

    background-color: ${({theme}) => theme.COLORS.DARK_300};

    border-radius: .8rem;
    padding: 2.4rem;
    display: grid;
    position: relative;

    width: 30.4rem;
    height: 46.2rem;

    >svg{
        position: absolute;
        top: 1.6rem;
        right: 1.6rem; 
        cursor: pointer;
    }

    >section {
        width: 100%;
        height: 100%;
        
        display: grid;
        text-align: center;
        gap: 1.2rem;


        .dishes{

            gap: 1.5rem;
            display: grid;
            align-items: center;
            align-content: center;
            align-items: center;


            .photo-dish{
                display: flex;
                justify-self: center;
                align-content: center;
                width: 17.6rem;
                height: 17.6rem;
                border-radius: 100%;
            }

            p{
                color: ${({theme}) => theme.COLORS.LIGHT_300};

            }

            strong {
                color: ${({theme}) => theme.COLORS.CAKE_200};

            }

        }

    }



    @media (max-width: ${({theme}) => theme.SIZES.LARGE}) {


        width: 21rem;
        height: 29.2rem;


        >svg{
            position: absolute;
            top: 1.8rem;
            right: 1.8rem;
        }



        >section{
            
            width: 100%;
            height: 100%;
            
            display: grid;
            text-align: center;
            gap: 1.2rem;
            


            .dishes {
                display: grid;
                gap: 1.2rem;
                align-content: center;
                align-items: center;

                

                .photo-dish {

                    display: flex;
                    justify-self: center;
                    align-content: center;
                    width: 8.8rem;
                    height: 8.8rem;
                    border-radius: 100%;

                    
                }

                h1{
                    font-family: "Poppins", sans-serif;        
                    font-weight: 500;
                    font-size: 1.4rem;
                    line-height: 2.4rem;

                    color: ${({theme}) => theme.COLORS.LIGHT_300};
                }
                }
        
                p{
                    display: none;
                }

                strong {
                    font-family: "Roboto", sans-serif;   
                    font-weight: 400;
                    font-size: 1.6rem;
                    line-height: 100%;
                }

           }
    }




`;