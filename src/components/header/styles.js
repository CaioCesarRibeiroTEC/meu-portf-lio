import styled from "styled-components";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>

export const HeaderContaine = styled.header`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const HeaderNav = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 10px;
    overflow-x: hidden;
`;

export const HeaderUl = styled.ul`
    width: 100%;
    display: flex;
    height: 150px;



    @media (max-width: 650px) { 
        display: grid;
        grid-template-columns: 1fr  2fr;
        column-gap: 80px;
        width: 450px;
        margin-top: -30px;
    }

    @media (max-width: 350px) { 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 10px;
        height: 80%;
    }
`;

export const HeaderA = styled.a`
    text-decoration: none;
    display: flex;
    font-family: "Baskervville SC", system-ui;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-left: -30px;

    :hover {
        color: silver;
    }

    li{
        width: 350px;
    }

    @media (max-width: 450px) { 
       li{
        font-size: 23px;
       }
    }

    @media (max-width: 350px) { 
       li{
            font-size: 20px;
            width: 80%
       }
    }
`;



export const LiInicio = styled.li`     
    font-size: 30px;
    list-style: none;
    color: ${({inicioPage}) => inicioPage? 'silver' : 'gold'};
    cursor: pointer;

`;

export const LiCurriculum = styled.li`
    font-size: 30px;
    list-style: none;
    color: ${({curriculumPage}) => curriculumPage? 'silver' : 'gold'};
    cursor: pointer;
`;
export const LiProjetos = styled.li`
    font-size: 30px;
    list-style: none;
    color: ${({projetosPage}) => projetosPage? 'silver' : 'gold'};
    cursor: pointer;
`;
export const LiContato = styled.li`
    font-size: 30px;
    list-style: none;
    color: ${({contatoPage}) => contatoPage? 'silver' : 'gold'};
    cursor: pointer;
`;