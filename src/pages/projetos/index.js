import {  DescripitionButton, DescripitionButtonContainer, DescripitionButtonContainer2, DescripitionSpan, MeusProjetosContainer, MeusProjetosH4, ModalBat, ModalContainer, ModalStar, ModalVideosContainer, ModalVideosYtContainer, ModalWhats, ModalYt, ProjectDescripition, ProjectDescripitionYt, Projeto, ProjetoCard, ProjetosContainer, ProjetosTitle } from "./styles";
import { useState } from "react";
import youTubeVideo1 from '../../assets/projetos/ytVideo1.mp4'
import youTubeVideo2 from '../../assets/projetos/ytVideo2.mp4'
import youTubeVideo3 from '../../assets/projetos/ytVideo3.mp4'
import youTubeVideo4 from '../../assets/projetos/ytVideo4.mp4'
import youTubeImg from '../../assets/projetos/projeto-clone-youtube.JPG'
import starVideo from '../../assets/projetos/starVideo.mp4'
import starImg from '../../assets/projetos/projeto-star-wars-characters.jpg'
import watsVideo from '../../assets/projetos/whatsVideo.mp4'
import watsImg from '../../assets/projetos/wppimage.jpeg'
import batVideo from '../../assets/projetos/batVideo.mp4'
import batImg from '../../assets/projetos/batImg.jpeg'







function ProjetosComponent() {
    const [modalYt, setModalYt] = useState(false)
    const [modalWhats, setModalWhats] = useState(false)
    const [modalSt, setModalSt] = useState(false)
    const [modalBat, setModalBat] = useState(false)
    const [modal, setModal] = useState(false)




    return(
        <ProjetosContainer>
            <ProjetosTitle>Clique no card para mais informações do projeto</ProjetosTitle>
            <MeusProjetosContainer>

                <Projeto>
                    <div>
                        <ProjetoCard onClick={() => setModalYt(!modalYt)} style={{backgroundImage: `url(${youTubeImg})`}}>

                        </ProjetoCard>
                        <MeusProjetosH4>
                            projeto full-stack clone da <br/>
                            interface do you-tube
                        </MeusProjetosH4>
                    </div>

                    <div>
                        <ProjetoCard onClick={() => setModalWhats(!modalWhats)} style={{backgroundImage: `url(${watsImg})`}}>

                        </ProjetoCard>
                        <MeusProjetosH4>
                            projeto chat full-stack<br/>
                            com socket-io
                        </MeusProjetosH4>
                    </div>
                </Projeto>                   

                <Projeto>

                    <div>
                        <ProjetoCard onClick={() => setModalSt(!modalSt)} style={{backgroundImage: `url(${starImg})`}}>

                        </ProjetoCard>
                        <MeusProjetosH4>
                            Projeto da Api<br/>
                            do star-Wars-Charactres
                        </MeusProjetosH4>

                    </div>
                    <div>
                        <ProjetoCard onClick={() => setModalBat(!modalBat)} style={{backgroundImage: `url(${batImg})`}}>

                        </ProjetoCard>
                        <MeusProjetosH4>
                            Projeto de simulação de compra de <br/>
                            ingresso do filme
                            The Batman 2022
                        </MeusProjetosH4>

                    </div>

                </Projeto>



            </MeusProjetosContainer>

            <ModalContainer modal={modal} >
                <ModalYt modalYt={modalYt} onClick={() => setModalYt(!modalYt)}>
                    <ModalVideosYtContainer>
                        <div>
                            <video controls autoPlay >
                                <source src={youTubeVideo1} type='video/mp4' />
                            </video>

                            <video controls autoPlay >
                                <source src={youTubeVideo2} type='video/mp4' />
                            </video>
                        </div>
                        <div>
                            <video controls autoPlay >
                                <source src={youTubeVideo3} type='video/mp4' />
                            </video>

                            <video controls autoPlay >
                                <source src={youTubeVideo4} type='video/mp4' />
                            </video>

                        </div>

                    </ModalVideosYtContainer>

                    <ProjectDescripitionYt>
                        <DescripitionSpan> 
                            Projeto que assemelha a pagina do You Tube, esse projeto possui integração com o back-end, 
                            construído em NodeJS integrando com o banco de dados MariaDB. Logo, é possível criar uma conta, fazer login e até cadastrar seus próprios cards de vídeo. 
                            Sem contar que o layout é totalmente responsivo (se adapta em diferentes tamanhos de tela).<br/>
                            Nesse projeto estou consumindo a API usando axios; utilizo os hooks nativos do React como useState, useEffect e useContext; 
                            styled-components para criar um estilo dinâmico, essencial para dar um feedback visual ao usuário principalmente nas validações de inputs de login e de criar usuário. 
                        </DescripitionSpan>
                        <DescripitionButtonContainer>
                            <a href="https://github.com/CaioCesarRibeiroTEC/back-end-you-tube" target="_blank" rel="noreferrer">
                                <DescripitionButton>git-hub<br/> <b>front-end</b></DescripitionButton>
                            </a>   
                            <a href="https://github.com/CaioCesarRibeiroTEC/back-end-you-tube" target="_blank" rel="noreferrer">
                                <DescripitionButton>git-hub<br/> <b>back-end</b></DescripitionButton>                               
                            </a> 

                        </DescripitionButtonContainer>
                    </ProjectDescripitionYt>

                </ModalYt>

                <ModalWhats modalWhats={modalWhats} onClick={() => setModalWhats(!modalWhats)}>
                    <ModalVideosContainer>

                        <video controls autoPlay >
                            <source src={watsVideo} type='video/mp4' />
                        </video>
                        <ProjectDescripition>
                            <DescripitionSpan>
                                Esse é um projeto de chat utilizado o Socket.IO para permitir uma comunicação bidirecional em tempo real,
                                é um projeto fullStack utilizando o Styled Components no front-end e Javascript no back-end.<br/>
                                Para ter acesso ao chat precisa entrar com o nome onde os usuários que é mostrado na parte superior.  
                            </DescripitionSpan>
                            <DescripitionButtonContainer>
                                <a href="https://github.com/CaioCesarRibeiroTEC/chat-front" target="_blank" rel="noreferrer">
                                    <DescripitionButton>git-hub<br/> <b>front-end</b></DescripitionButton>
                                </a>   
                                <a href="https://github.com/CaioCesarRibeiroTEC/chat-socketIO-back" target="_blank" rel="noreferrer"> 
                                    <DescripitionButton>git-hub<br/> <b>back-end</b></DescripitionButton>                               
                                </a> 
                            </DescripitionButtonContainer>
                        </ProjectDescripition>
                    </ModalVideosContainer>
                </ModalWhats>

                <ModalStar modalSt={modalSt} onClick={() => setModalSt(!modalSt)}>
                    <ModalVideosContainer>

                        <video controls autoPlay >
                            <source src={starVideo} type='video/mp4' />
                        </video>
                        <ProjectDescripition>
                            <DescripitionSpan>
                                Aqui temos várias informações sobre os personagens da saga Star Wars. 
                                Consumindo a API Swapi obtemos detalhes sobre mais de 80 personagens. 
                                É possível navegar entre as páginas e, clicando na foto do personagens, 
                                ver mais detalhes 
                            </DescripitionSpan>
                                <DescripitionButtonContainer2>
                                    <a href="https://github.com/CaioCesarRibeiroTEC/chat-front" target="_blank" rel="noreferrer">
                                        <DescripitionButton> Ver pelo <br/>git-hub</DescripitionButton>
                                    </a>   

                            </DescripitionButtonContainer2>
                        </ProjectDescripition>

                    </ModalVideosContainer>
                </ModalStar>
            
                <ModalBat modalBat={modalBat} onClick={() => setModalBat(!modalBat)}>
                    <ModalVideosContainer>

                        <video controls autoPlay >
                            <source src={batVideo} type='video/mp4' />
                        </video>

                        <ProjectDescripition>
                            <DescripitionSpan>  
                                Um projeto que foi feito em react que simula a compra de ingresso do filme batman de 2022.<br/>
                                O projeto possui informações sobre filme como trailer sinopse e fotos que podem ser acessados navegando pelas opções do header.  
                            </DescripitionSpan>
                                <DescripitionButtonContainer2>
                                    <a href="https://github.com/CaioCesarRibeiroTEC/batman-project" target="_blank" rel="noreferrer">
                                        <DescripitionButton> Ver pelo <br/>git-hub</DescripitionButton>
                                    </a>   

                            </DescripitionButtonContainer2>
                        </ProjectDescripition>

                    </ModalVideosContainer>
                </ModalBat>                   
            </ModalContainer>


        </ProjetosContainer>
    )
}

export default ProjetosComponent;