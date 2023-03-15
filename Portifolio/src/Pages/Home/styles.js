import styled from 'styled-components'

export const Wrap = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
`;

export const Left = styled.div`
    width: 25%;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    text-align: end;

    width: 25%;

    @media (max-width: 480px){
        justify-content: center;
    }
`;

export const Middle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-align: center;

    width: 50%;
`;

export const LinkList = styled.ul`
    li{
        list-style: none;
        font-size: 20px;
    }
`;


export default Wrap