import styled from "styled-components";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>

export const HeaderContaine = styled.header`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const HeaderNav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderUl = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;



    @media (max-width: 650px) { 
        display: grid;
        grid-template-columns: 1fr  2fr;
        row-gap: 15px;
        column-gap: 30px;
    }

    @media (max-width: 450px) { 
        column-gap: 15px;
    }
`;




export const HeaderLi = styled.li`     
    list-style: none;
    cursor: pointer;

    b{

        :hover {
            color: silver;
        }

        a{
            text-decoration: none;
            font-family: "Baskervville SC", system-ui;
            font-size: 30px;
            color: gold;
            background-color: black;
            padding: 5px;

            @media (max-width: 450px) { 
                font-size: 20px
            }
        }

        

    }

`;
