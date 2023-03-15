import styled from "styled-components";

export const Wrap = styled.div`
    .tech{
        font-size: 16px;
        font-weight: 200;
        margin-top: 10px;
    }
    .src{
        font-size: 16px;
        font-weight: 200;
        text-decoration: underline;
    }
    p{
        width: 50%;
    }
`;

export const FlexContainer = styled.div`
    display: flex;

    img{
        width: 638px;
        height: 493px;

        position: fixed;
        top: 25vh;
        right: 60px;

        border: 1px solid grey;
        border-radius: 10px;
        box-shadow: 0px 0px 80px 10px black;
    }

    h1:hover{
        color: grey;
    }

    @media (max-width: 1056px){
        img{
            display: none;
        }
    }

`;