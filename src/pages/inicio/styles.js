import styled from "styled-components";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>


export const InicioContainer = styled.div`
    width: 100%;
    height:100%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;

export const ProfileCertificado = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    visibility: ${({modal}) => modal?  'visible' : 'hidden'};  

`;

export const CertificadoCard = styled.img`

`;

export const ProfileContainer = styled.div`
    width: 600px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;

    @media (max-width: 480px) { 
        height: 450px;
    }
`;

export const ProfileContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;


    @media (max-width: 560px) { 
        width: 75%;
    }

    @media (max-width: 480px) { 
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const ProfileCard = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    font-size: 25px;

    div {
        
    }
`;

export const ProfileImg = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 30px;
    border: 4px solid gold;
`;

export const ProfileMyName = styled.span`
  font-family: "Baskervville SC", system-ui;
  font-size: 22px;
  font-weight: bold;
  background-color:#000;
  color:gold;
  border-radius: 5px;

  @media (max-width: 480px) { 
    font-size: 20px;
  }

`;

export const ProfileButtonContainer = styled.div`


`;

export const ProfileButton = styled.button`
    text-decoration: none;
    border-radius: 20px;

`;



export const ProfileText = styled.h2`
  font-family: "Baskervville SC", system-ui;
  text-align: center;
  font-size: 16px;
  background-color:#000;
  color:gold;
  border-radius: 5px;
  padding: 3px;

`;


export const InicioH1 = styled.h1`
    font-family: "Baskervville SC", system-ui;
    color:gold;
    font-size: 30px;
    background-color:black;
    border-radius: 15px;

    @media (max-width: 480px) { 
        font-size: 20px;
        padding: 3px;
    }
    

`;

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 480px) { 
        flex-direction: row;
    }

`;

export const SocialMediaA = styled.a`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: aqua;
    

    b{
        background-color: black;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
    }

`;

export const SocialMediaImg = styled.img`
    width: 60px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid gold;
    cursor:pointer;
    margin-top: 15px;
`;