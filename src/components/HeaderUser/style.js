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
            align-items: center;
            
            img {
                width: 3rem;
                height: 3rem;
            }


            h1 {
                margin-left: 1rem;                
                white-space: nowrap;

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
            align-self: center;

            min-height: 4.8rem;

            

            svg{
                color: ${({theme}) => theme.COLORS.LIGHT_400};
                
                margin-left: 10rem;

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
                padding: 1.6rem 10rem 1.6rem 0;


                color: ${({theme}) => theme.COLORS.LIGHT_500};

            }

            input::placeholder{
                color: ${({theme}) => theme.COLORS.LIGHT_500};

            }
        }

        button {
            margin-left: 3.2rem;
            width: 21.6rem;            
            min-height: 5.6rem;

            align-self: center;


            
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

        .receipt{
            display: none;
        }
    }

    /** Mobile and Laptop 1024px */

    @media (max-width:${({theme}) => theme.SIZES.LARGE}) {
        width: 100%;
        padding: 5.6rem 2.8rem 2.4rem;

        background-color: ${({theme}) => theme.COLORS.DARK_700};

        >header{
            display: flex;
            align-items: center;

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

                margin: 0.4rem 0 0.4rem 7.5rem;
                
                img {
                    width: 2.5rem;
                    height: 2.5rem;

                    
                }
                
                h1 {
                    font-size: 2.1rem;
                    letter-spacing: 0;
                    display: flex;
                    margin-left: 0.8rem;

                    white-space: nowrap;
                    
                }

            }

            .receipt{
                height: 3.8rem;
                width: 3.8rem;
                
                margin-left: 7.5rem;
                display: flex;
                
                position: relative;

                svg {
                align-self: center;
                }

                .orders {

                    position: absolute;
                    top: 0;
                    right: 0;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
            
                    background-color: ${({theme}) => theme.COLORS.TOMATO_200};

                    width: 2rem;
                    height: 2rem;
                    border-radius: 100%;
                }
            }

            .receipt:hover{
                cursor: pointer;
                filter: brightness(0.8);
                transition: all 200ms;
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



