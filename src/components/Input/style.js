import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    gap: 0.8rem;
    
    h2 {
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 1.6rem;
        font-weight: 400;        

    }

    
    div {
        height: 4.8rem;

        background-color: ${({theme}) => theme.COLORS.DARK_900};

        border-radius: 0.5rem;

        display: flex;
        align-items: center;

        svg{
            margin-left: 1.4rem;
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }

        >input {
            height: 100%;
            width: 100%;

            padding: 1.2rem 1.4rem;
            border-radius: 0.5rem;

            background-color: transparent;
            border: none;

            color: ${({theme}) => theme.COLORS.LIGHT_500};
            
            font-size: 1.6rem;
            font-weight: 400;        

        }
    }
`;

export const Icon = styled.div`
    margin-left: 1.4rem;
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.LIGHT_500};
`;