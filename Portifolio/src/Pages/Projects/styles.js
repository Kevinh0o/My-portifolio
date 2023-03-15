import styled from 'styled-components'

export const Wrap = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10%;

    div{
        width: 33%;
    }
    h1{
        text-align: center;
    }
    .mobile{
        @media (max-width: 480px){
            display: none;
        }
    }
`;

export const Middle = styled.div`
    height: 80%;

    overflow: scroll;
    overflow-x: hidden;
`;

export const Bottom = styled.div`
    height: 10%;
`;

export const LinkList = styled.ul`
    li{
        list-style: none;
        font-size: 20px;
    }
`;

export const ProjectList = styled.ul`
    li{
        list-style: none;
        font-size: 20px;
        margin-bottom: 25px;
    }
    h1{
        font-size: 40px;
    }
`;

export default Wrap