import styled from "styled-components";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>


export const CurriculumContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;


    @media(max-width: 740px)  {
        flex-direction: row;
    }

    @media(max-width: 535px)  {
        flex-direction: column;
    }
`;


export const MySkillsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50%;
    border-radius: 20px;
    padding: 10px;
    box-sizing: border-box;

    @media(max-width: 1130px)  {
        height: 50%;
    }

    @media(max-width: 740px)  {
        width: 50%;
        height: 90%;
    }

    @media(max-width: 535px)  {
        width: 100%;
    }

`;

export const MySkillsContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 20px;

    @media(max-width: 740px)  {
        flex-direction: column;
    }
`;

export const MySkillsSpan = styled.span`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow-x: hidden;
    background-color: #19334d;

    @media(max-width: 1130px)  {
        width: 50%;
    }

    @media(max-width: 740px)  {
        width: 100%; 
    }
    
`;

export const MySkillsTtle = styled.h1`
    width: 100%;
    font-family: "Baskervville SC", system-ui;
    font-size: 35px;
    color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
     
    @media(max-width: 1130px)  {
        font-size: 25px;
    }

    @media(max-width: 390px)  {
        font-size: 20px;
        height: 100px;
    }

`;

export const MySkills = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-x: hidden;

    @media(max-width: 535px)  {
        display: none;
    }
`;

export const MySkillsResponsive = styled.div`
    display: none;

    @media(max-width: 535px)  {
        display: flex;
        justify-content: space-between;
        height: 100%; 
        overflow-y: auto;     
    }
`;

export const B = styled.b`
    @media(max-width: 390px)  {
        display: none;
    }
`;

export const MySkillsResponsiveB = styled.b`
    display: none;

    @media(max-width: 390px)  {
        display: flex;
        flex-direction: column;
        height: 360px;
        width: 100%;
        padding: 5px;
        overflow-y: auto;
    }
`;

export const MySkillsBloco1 = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 1130px)  {
        width: 90%;
        
    }

    @media(max-width: 800px)  {
       margin-left: -40px;
       width: 100%;
    }

    @media(max-width: 740px)  {
        width: 125%;
    }

    @media(max-width: 535px)  {
        width: 100%;
        flex-direction: column;
        overflow-y: auto;
    }
`;

export const MySkillsBloco2 = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    @media(max-width: 800px)  {
       width: 110%;
        margin-left: -30px;
    }    
`;

export const MySkillsLi = styled.li`
    font-family: "Baskervville SC", system-ui;
    font-size: 20px;
    color: gold;
    list-style: none;
    overflow-x: hidden;
    display: flex;
    border-radius: 5px;

    @media(max-width: 1130px)  {
        font-size: 18px;
    }

    @media(max-width: 740px)  {
        font-size: 16px;
    }

    @media(max-width: 535px)  {
        font-size: 14px;
    }

    @media(max-width: 390px)  {
        font-size: 20px;
    }
`;




export const MyQualificationsContainer = styled.div`
 background-color: #1f2424;
 width: 40%;
 height: 100%;
 border-radius: 20px;
 display: flex;

    @media(max-width: 740px)  {
        width: 95%;
        height: 90%;
    }

    @media(max-width: 535px)  {
        width: 100%;
        
    }
`;

export const MyQualificationSpan = styled.span`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`;

export const MyQualificationsTitle = styled.h1`
    font-family: "Baskervville SC", system-ui;
    font-size: 35px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 1130px)  {
        font-size: 25px;
    }

        @media(max-width: 390px)  {
        font-size: 20px;
        height: 100px;
    }
`;

export const MyQualifications = styled.ul`
    color: #0080ff;
    display: flex;
    
    @media(max-width: 740px)  {
        padding-left: 5px;
    }
`;

export const MyQualificationsLi = styled.li`
    font-size: 20px;
    margin-top: 5px;

    @media(max-width: 1130px)  {
        font-size: 18px;
    }

    @media(max-width: 740px)  {
        font-size: 16px;
    }
`;



export const BusinessContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items:center;
    justify-content:space-around;
    

 @media(max-width: 1130px)  {
        height: 55%;

    }

    @media(max-width: 740px)  {
        width: 60%;
        height: 100%;
        flex-direction: column;
        padding: 5px;
        box-sizing: border-box;
    }

    @media(max-width: 535px)  {
        width: 98%;
    }
`;

export const MyExperiencesContainer = styled.div`
    width: 50%;
    height: 90%;
    background-color: #708090;
    border-radius: 20px;

    @media(max-width: 1130px)  {
        width: 55%;
        height: 95%;
    }

    @media(max-width: 740px)  {
        width: 95%;
        height: 60%;
        
    }

    @media(max-width: 535px)  {
        overflow-y: auto;  
        width: 100%;      
    }
`;

export const ExperiencesSpan = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ExperiencesH1 = styled.h1`
    color: #48D1CC;
`;

export const ExperiencesUl = styled.ul`
 margin-left: -20px;
 
 
`;

export const ExperiencesB = styled.b`

    @media(max-width: 1130px)  {
        width: 55%;
        height: 95%;
    }
`;

export const ExperiencesLi = styled.li`
    margin-top: 15px;

    @media(max-width: 1130px)  {
        margin-top: 5px;
    }
`;


export const DescriptionContainer = styled.div`
    width: 40%;
    height: 90%;
    background-color: black;
    border-radius: 25px;
    color: #fff;
    overflow-y: auto;
    font-size: 18px;

    @media(max-width: 740px)  {
        width: 95%;
        height: 60%;
    }
`;

export const DescriptionSpan = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DescriptionH1 = styled.h1`
    color: #DC143C;
`;

export const DescriptionNav = styled.nav`
    
`;

export const DescriptionB = styled.b`
    
`;

export const DescriptionP = styled.p`
    padding: 15px; 
    text-indent: 3ch;
    font-family: "Baskervville SC", system-ui;
`;