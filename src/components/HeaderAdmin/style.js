import styled from "styled-components";

export const Container= styled.div`

/** Desktop over 1024px */
    background-color: ${({theme}) => theme.COLORS.DARK_600};

    padding: 2.4rem 12.3rem;
    

    >header {
        display: flex;

        justify-content: center;

        .menu{
            display: none;
        }

        nav{
            display: flex;
            margin: .45rem 0;
            
            img {
                width: 3rem;
                height: 3rem;
            }


            h1 {
                margin-left: 1rem;

                span{
                color: ${({theme}) => theme.COLORS.CAKE_200};
                margin-top: -0.6rem;
                display: flex;
                justify-content: end;


               }
            }

        }


        .input {
            background-color: ${({theme}) => theme.COLORS.DARK_900};

            width: 58.1rem;
            max-height: 4.8rem;
            border-radius: 5px;
            margin-left: 4.5rem;
            
            display: flex;
            align-items: center; 

            
            

            svg{
                color: ${({theme}) => theme.COLORS.LIGHT_400};
                
                margin-left: 14.6rem;

                width: 2.4rem;
                height: 2.4rem;


            }



            input{
                background-color: transparent;
                border: none;

                margin-left: 1.4rem;
                height: 100%;
                width: 100%;            
                border-radius: 5px;            
                padding: 1,6rem 14.45rem 1.6rem 0;


                color: ${({theme}) => theme.COLORS.LIGHT_500};

            }

            input::placeholder{
                color: ${({theme}) => theme.COLORS.LIGHT_500};

            }
        }

        button {
            margin-left: 3.2rem;
            width: 21.6rem;            
            max-height: 4.8rem;

            

            
        }

        .exit {
            margin-left: 3.7rem;            
            max-height: 4.8rem;

            align-self: center;

        }
        
        .exit:hover{
            filter: brightness(0.8);
            transition: all 200ms;
            cursor: pointer;
        }

    }

    /** Mobile and Laptop 1024px */

    @media (max-width:${({theme}) => theme.SIZES.LARGE}) {
        width: 100%;
        padding: 5.6rem 2.8rem 2.4rem;

        background-color: ${({theme}) => theme.COLORS.DARK_700};

        >header{
            display: flex;

            .menu {
                display: flex;
                align-items: center;

            }

            .menu:hover{
                filter: brightness(0.8);
                transition: all 200ms;
                cursor: pointer;

            }
            
            nav {

                align-items: center;
                justify-content: center;
                height: 100%;

                margin: .4rem 0 .4rem 8.1rem;
                
                img {
                    width: 2.5rem;
                    height: 2.5rem;

                    
                }
                
                h1 {
                    font-size: 2.1rem;
                    letter-spacing: 0;
                    display: flex;
                    margin-left: 0.8rem;
                    
                    span {
                        color: ${({theme}) => theme.COLORS.CAKE_200};
                        margin-top: 0.35rem;
                        margin-left: 0.8rem;
                    }
                }

            }

            .input{
                display: none;
            }

            button{
                display: none;

            }

            .exit{
                display: none;
            }

        }
    }

`;



