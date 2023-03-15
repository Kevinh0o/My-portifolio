import styled from 'styled-components'

export const Wrap = styled.div`
    height: 100%;
    width: 100%;
`;

export const Top = styled.div`
    height: 10%;
    display: flex;

    div{
        width: 33%;
    }
`;

export const Middle = styled.div`
    height: 80%;
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;

    div{
        margin-bottom: 100px;
    }
    h1{
        font-size: 100px;
    }
    p{
        font-size: 30px;
    }

    .about-contaier{
    }
    .left{
        padding-right: 50%;
    }
    .right{
        padding-left: 50%;
    }

    .tech-stack{
        h1{
            font-size: 50px;
        }
    }

    @media (max-width: 780px){
        h1{
            font-size: 80px;
        }
    }
    @media (max-width: 640px){
        h1{
            font-size: 50px;
        }
        .left{
            padding: 0px;
        }
        .right{
            padding: 0px;
        }
    }
    @media (max-width: 442px){
        h1{
            font-size: 30px;
        }
        p{
            font-size: 20px;
        }
    }
`;

export const Bottom = styled.div`
    height: 10%;

    display: flex;
    justify-content: space-between;
    align-items: end;

    p{
        font-size: 20px;
        text-align: end;
        text-decoration: underline;
    }
    p:hover{
        color: grey;
    }
`;

export const LinkList = styled.ul`
    li{
        list-style: none;
        font-size: 20px;
    }
`;


export default Wrap