import styled from "styled-components";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>


export const CurriculumContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 750px) { 
        flex-direction: column;
    }
`;


export const Curriculumcontent = styled.div`
    width: 60%;
    padding: 5px;
    overflow-x: hidden;

    @media (max-width: 750px) { 
        width: 98%;
        margin-top: -5px;
        margin-left: -5px;
    }

`;






export const MySkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid gold;
    border-radius: 10px;
    overflow-x: hidden;
    
`;


export const MySkillsTtle = styled.h1`
    font-family: "Baskervville SC", system-ui;
    font-size: 25px;
    color: aqua;

    @media (max-width: 750px) { 
        font-size: 20px;   
    }
    
`;

export const MySkills = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    margin-left: -35px;
`;

export const MySkillsLi = styled.li`
    font-family: "Baskervville SC", system-ui;
    font-size: 16px;
    list-style: none;
    overflow-x: hidden;
    margin-top: 8px;

    @media (max-width: 750px) { 
        font-size: 12px;
        margin-top: 3px;
    }
`;









export const MyQualificationsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid gold;
    border-radius: 10px;
    overflow-x: hidden;
`;

export const MyQualificationsTitle = styled.h1`
    font-family: "Baskervville SC", system-ui;
    font-size: 25px;
    color: aquamarine;

    @media (max-width: 750px) { 
        font-size: 20px;   
    }
`;

export const MyQualifications = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    margin-left: -35px;
`;

export const MyQualificationsLi = styled.li`
    font-family: "Baskervville SC", system-ui;
    font-size: 16px;
    list-style: none;
    overflow-x: hidden;
    margin-top: 8px;

    @media (max-width: 750px) { 
        font-size: 14px;
        margin-top: 3px;
    }
`;









export const MyExperiencesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gold;
    border-radius: 10px;
    overflow-x: hidden;
`;

export const ExperiencesTitle = styled.h1`
    font-family: "Baskervville SC", system-ui;
    font-size: 25px;
    color: aliceblue;

    @media (max-width: 750px) { 
        font-size: 20px;   
    }
`;

export const MyExperiences = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 750px) { 
        margin-left: -15px
        
    }
`;



export const ExperiencesLi = styled.li`
    font-family: "Baskervville SC", system-ui;
    width: 100%;
    font-size: 16px;
    list-style: none;
    overflow-x: hidden;
    color: #FF0000;
    margin-top: 8px;

    @media (max-width: 750px) { 
        font-size: 13px;
        margin-top: 2px;

    }
`;










export const DescriptionContainer = styled.div`
    width: 30%;
    height: 70%;
    background-color: black;
    border-radius: 25px;
    color: #fff;
    overflow-y: auto;

    @media (max-width: 750px) { 
        width: 95%;
        height: 25%;
    }
`;



export const DescriptionH1 = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    color: #DC143C;
    font-size: 25px;

    @media (max-width: 750px) { 
        font-size: 20px;
    }
`;

export const DescriptionNav = styled.nav`
    border: 1px solid gold;
    border-radius: 30px;
`;

export const DescriptionB = styled.b`
 font-size: 20px;

 @media (max-width: 750px) { 
        font-size: 14px;
    }
`;

export const DescriptionP = styled.p`
    padding: 15px; 
    text-indent: 3ch;
    font-family: "Baskervville SC", system-ui;
`;