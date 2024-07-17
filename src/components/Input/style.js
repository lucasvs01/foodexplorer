import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    gap: 0.8rem;
      
    h2 {
        color: ${({theme}) => theme.COLORS.FONT_COLOR_GRAY_INPUT_TITLE};
        font-size: 1.6rem;
        font-weight: 400;        

    }

    
    div {
        height: 4.8rem;

        background-color: ${({theme}) => theme.COLORS.INPUT_BACKGROUND};

        border-radius: 0.5rem;

        display: flex;
        align-items: center;

        svg{
            margin-left: 1.4rem;
            color: ${({theme}) => theme.COLORS.FONT_COLOR_GRAY_INPUT_TITLE};
        }

        >input {
            height: 100%;
            width: 100%;

            padding: 1.2rem 1.4rem;
            border-radius: 0.5rem;

            background-color: transparent;
            border: none;

            color: ${({theme}) => theme.COLORS.FONT_COLOR_GRAY};
            
            font-size: 1.6rem;
            font-weight: 400;        

        }
    }
`;

export const Icon = styled.div`
    margin-left: 1.4rem;
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.FONT_COLOR_GRAY_INPUT_TITLE};
`;