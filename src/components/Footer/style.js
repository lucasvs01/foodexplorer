import styled from "styled-components";

export const Container = styled.footer`

    display: flex;
    justify-content: center;
    padding: 2.4rem 12.3rem;
    height: 77px;
    background-color: ${({theme}) => theme.COLORS.DARK_600};


    

    /** Desktop over 1024px */
    > .footer {

        width: 100%;
        display: flex;
        justify-content: center;
        gap: 69.2rem;

        .logo{
            display: flex;
            justify-content: center;
            color: ${({theme}) => theme.COLORS.LIGHT_700};
            gap: 1rem;

            white-space: nowrap;

            svg {
                    width: 3rem;
                    height: 3rem;
    
            }

            path {
                    fill: ${({theme}) => theme.COLORS.LIGHT_700};
    
                }

            
        }

        span{
            white-space: nowrap;
            display: flex;
            align-self: center;
            color: ${({theme}) => theme.COLORS.LIGHT_200};
        }
    }
    
    
    /** Mobile and Laptop 1024px */
    @media (max-width: ${({theme}) => theme.SIZES.LARGE}) {
        
        padding: 3rem 2.8rem;

        
        > .footer {
            display: flex;
            align-items: center;
            gap: 3.8rem;
    
            .logo {
                display: flex;
                align-items: center;
                gap: 0.7rem;
    
                svg {
                    width: 2.2rem;
                    height: 2.2rem;
    
                }
    
                h1{
                    font-size: 1.526rem;
                }
            }
    
            span{
                font-size: 1.2rem;
            }
        }

    }

`;