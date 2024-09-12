import { CertificadoCard, InicioContainer, InicioH1, ProfileButton, ProfileButtonContainer, ProfileCard, ProfileCertificado, ProfileContainer, ProfileContent, ProfileImg, ProfileMyName, ProfileText, SocialMediaA, SocialMediaContainer, SocialMediaImg } from "./styles";
import './style.css'
import myImage from '../../assets/inicio/minha-imagem.jpeg'
import mylinke from '../../assets/inicio/linkedin.png'
import myGit from '../../assets/inicio/download (1).jpg'
import myWhats from '../../assets/inicio/icons8-whatsapp-50.png'
import certImg from '../../assets/inicio/certificado.jpeg'
import cvImg from '../../assets/inicio/meu-curriculum-pdf (1).pdf'

import { useState } from "react";




function InicioComponent() {

    const [modal, setModal] = useState(false)
    return(

        <InicioContainer>

            <ProfileCertificado modal={modal} onClick={() => setModal(!modal)}>
                <CertificadoCard src={certImg} onClick={() => setModal(!modal)}/>
            </ProfileCertificado>

            <ProfileContainer>

                <ProfileContent>

                    <ProfileCard>

                        <ProfileImg src={myImage}/>

                        <div>

                            <ProfileMyName><b>Caio César Ribeiro</b></ProfileMyName>

                            <ProfileButtonContainer>
                                <ProfileButton onClick={() => setModal(!modal)}>meu certificado</ProfileButton>
                                <a href={cvImg} download>
                                    <ProfileButton> baixar cv</ProfileButton>
                                </a>
                                
                            </ProfileButtonContainer>
                        </div>
                        
                        <ProfileText>Uma mente que se abre a uma nova ideia,<br/> jamais voltará ao seu tamanho original.</ProfileText>
                        
                    </ProfileCard>

                    <SocialMediaContainer>

                        <SocialMediaA href="https://www.linkedin.com/in/caio-c%C3%A9sar-ribeiro-b07b46325/" target="_blank" rel="noreferrer">
                            <SocialMediaImg src={mylinke}/> <b>meu <br/>linkedin</b>
                        </SocialMediaA>

                        <SocialMediaA href="https://github.com/CaioCesarRibeiroTEC" target="_blank" rel="noreferrer">
                            <SocialMediaImg src={myGit} /> <b>meu <br/> git-hub</b>
                        </SocialMediaA>

                        <SocialMediaA href="https://wa.me/5562981934367/?text=textourl/" target="_blank" rel="noreferrer">
                            <SocialMediaImg src={myWhats} /> <b>meu <br/> whats-app</b>
                        </SocialMediaA>

                        
                    </SocialMediaContainer>
                    
                </ProfileContent>
            </ProfileContainer> 
            
            <div className="arrows-container">
                <InicioH1 ><b>Procurando um desenvolvedor FullStack?</b></InicioH1>
                <div className="svg-container">
                    <svg className="arrows">
                        <path className="a1" d="M0,80 L50,50 L0,20"></path>
                    </svg>
                    <svg className="arrows">
                        <path className="a2" d="M0,80 L50,50 L0,20"></path>
                    </svg>
                    <svg className="arrows">
                        <path className="a3" d="M0,80 L50,50 L0,20"></path>
                    </svg>
                    <svg className="arrows">
                        <path className="a4" d="M0,80 L50,50 L0,20"></path>
                    </svg>
                </div>
            </div>

 
        </InicioContainer>
    )
}

export default InicioComponent;