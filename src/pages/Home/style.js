import styled from "styled-components";

export const Container = styled.div`

        height: 100vh;
        overflow-x: hidden;

    >main {

        margin-bottom: 25px;

        .banner{

            background: rgb(9,30,38);
            background: linear-gradient(180deg, rgba(9,30,38,1) 0%, rgba(0,19,28,1) 100%);

            border-radius: 3px;
            
            margin: 4.4rem 1.6rem 6.2rem 3.6rem;
            height: 12rem;

            display: flex;

            position: relative;

            img{
                position: absolute;
                bottom: 0;
                left: -30px;
            }

            .title{

                margin: 3.6rem 0 0 15.3rem;
                font-family: "Poppins", sans-serif;
                color: ${({theme}) => theme.COLORS.LIGHT_300};

                h1{
                    font-weight: 600;
                    font-size: 1.8rem;
                }

                p{
                    margin-top: 3px;
                    font-weight: 400;
                    font-size: 1.2rem;
                }
            }
        }

        .section{

            display: grid;
            gap: 2.4rem;

                                
            width: 42.8rem; 


            
            section {

                padding-left: 2.4rem;


                h2 {
                    color: ${({theme}) => theme.COLORS.LIGHT_300};
                    font-family: "Poppins", sans-serif;
                    font-size: 1.8rem;
                    font-weight: 500;

                    margin-bottom: 2.4rem;
                }

                .Swiper{
                    
                    height: 29.2rem;
                    width: 42.8rem;
    
                }
            }
        }
    }
`;

