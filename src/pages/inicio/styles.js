import styled from "styled-components";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>


export const InicioContainer = styled.div`
    width: 100%;
    height:100%;
    display: flex; 
    flex-direction: column;
     
`;

export const ProfileContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('./assets/648551.webp'); 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: hidden;
    margin-top: 15px;
`;

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) { 
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 350px) { 
        display: flex;
        flex-direction: column;
    }
`;

export const ProfileCard = styled.div`
    width: 550px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    color: aqua;
    font-size: 25px;


    @media (max-width: 600px) { 
        width: 40%
    }

    @media (max-width: 350px) { 
        width: 80%;
        height: 600px;
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

    @media (max-width: 350px) { 
        height: 80px;
        font-size: 20px;
    }
`;

export const ProfileText = styled.span`
  font-family: "Baskervville SC", system-ui;
  text-align: center;
  font-size: 16px;
  background-color:#000;
  color:gold;
  border-radius: 5px;

`;


export const InicioH1 = styled.h1`
    padding: 10px;
    font-family: "Baskervville SC", system-ui;
    color:gold;
    font-size: 50px;
    width: 500px;

    @media (max-width: 780px) { 
        font-size: 30px;
        width: 300px;
        height: 250px;
    }

    @media (max-width: 580px) { 
        font-size: 25px;
        width: 200px;
        height: 100px;
    }

    @media (max-width: 350px) { 
        width: 200px;
    }
`;

export const SocialMediaContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) { 
        display: flex;
        flex-direction: column;
        height: 400px;
        font-size: 20px;
        width: 50%;
    }

    @media (max-width: 350px) { 
        display: flex;
        width: 100%;
        height: 500px;
    }
`;

export const SocialMediaA = styled.a`
    display: flex;
    flex-direction: column; 
    text-decoration: none;
    color: aqua;
    

    b{
        background-color: black;
    }

    @media (max-width: 350px) { 

        margin-top: 10px;
        width: 200px;
        

        b{
            font-size: 16px;
        }
    }
`;

export const SocialMediaImg = styled.img`
    width: 80px;
    height: 70px;
    border-radius: 50%;
    border: 4px solid gold;
    cursor:pointer;

    @media (max-width: 350px) { 
        width: 60px;
        height: 30px;
    }
`;