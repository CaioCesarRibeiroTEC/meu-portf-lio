
import styled from "styled-components";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>


export const ProjetosContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjetosTitle = styled.h1`
  margin: 15px;
  color: crimson;
  font-family: "Baskervville SC", system-ui;

  @media (max-width: 1050px) { 
    font-size: 20px;
    background-color: black
  }
`;

export const MeusProjetosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: hidden;


  @media (max-width: 1050px) { 
    flex-direction: column;
    height: 80%;
  }

  @media (max-width: 440px) { 
    height: 70%;
  }

  @media (max-width: 300px) { 
    height: 65%;
  }
`;

export const Projeto = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1050px) { 
    width: 100%;
    height: 100%;
  }

  @media (max-width: 440px) { 
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjetoCard = styled.div`
  width: 250px;
  height: 550px;
  border-radius: 20px;
  border: 1px solid gold;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 400px 650px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: end;
  cursor: pointer;

  @media (max-width: 1050px) { 
    background-size: 450px;
    width: 300px;
    height: 200px;
  }

  @media (max-width: 650px) { 
    width: 200px;
    height: 200px;
    background-size: 300px;
  }

  @media (max-width: 440px) { 
    width: 200px;
    height: 90px;
    background-size: 200px;
  }


`;

export const MeusProjetosH4 = styled.h4`
  color:red;
  background-color: black;
  font-family: "Baskervville SC", system-ui;
  border-radius: 10px;
  width: 250px;
  height: 50px;
  font-size: 14px;

  @media (max-width: 650px) { 
    width: 200px;
    height: 60px;
  }
`;

export const ModalContainer = styled.div`
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





export const ModalYt = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  visibility: ${({modalYt}) => modalYt?  'visible' : 'hidden'};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const ModalWhats = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  visibility: ${({modalWhats}) => modalWhats?  'visible' : 'hidden'};
  padding: 10px;
`;

export const ModalStar = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  visibility: ${({modalSt}) => modalSt?  'visible' : 'hidden'};
  padding: 10px;
`;

export const ModalBat = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  visibility: ${({modalBat}) => modalBat?  'visible' : 'hidden'};
  padding: 10px;
`;

export const ModalVideosYtContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  padding: 10px;
  justify-content: center;

  @media (max-width: 460px) { 
      flex-direction: column;
    }

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
  video{
    width: 580px;
    height: 400px;
    border: 2px solid gold;
    border-radius: 20px;

    @media (max-width: 1200px) { 
    width: 400px;
    }

    @media (max-width: 850px) { 
    width: 300px;
    }

    @media (max-width: 630px) { 
      width: 200px;
    }

    @media (max-width: 460px) { 
      height: 150px;
    }
  }
`;

export const ModalVideosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  video{
    width: 800px;
    height: 500px;

    @media (max-width: 850px) { 
      width: 600px;
    }

    @media (max-width: 650px) { 
      width: 450px;
    }

    @media (max-width: 500px) { 
      width: 350px;
      height: 300px;
      margin-left: -50px;
    }

    @media (max-width: 400px) { 
        width: 250px;
        height: 250px;
    }
  }

`;


export const ProjectDescripitionYt = styled.div`
  width: 900px;
  height: 300px;
  background-color: black;
  margin-top: 10px;
  border-radius: 20px;
  padding: 20px;
  font-size: 25px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) { 
    font-size: 20px;
    width: 700px;
    
  }

  @media (max-width: 850px) { 
    width: 500px;
    font-size: 16px;
  }

  @media (max-width: 630px) { 
    width: 400px;
  }

  @media (max-width: 430px) { 
    width: 200px;
    height: 300px;
    overflow-y: auto;
  }
`;

export const ProjectDescripition = styled.div`
  width: 600px;
  height: 250px;
  background-color: black;
  margin-top: 10px;
  border-radius: 20px;
  padding: 20px;
  font-size: 25px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) { 
    font-size: 20px;
    
  }

  @media (max-width: 650px) { 
    width: 450px;
  }

  @media (max-width: 500px) { 
    width: 250px;
    height: 350px;
  }
`;

export const DescripitionSpan = styled.span`
 color: aqua;
 margin-top: -15px;
 overflow-y: auto;
  height: 90%;
`;

export const DescripitionButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  justify-content: space-around;
  margin-top: 10px;
`;

export const DescripitionButtonContainer2 = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;

`;

export const DescripitionButton = styled.button`
  border-radius: 20px;
  width: 100%;
  
`;