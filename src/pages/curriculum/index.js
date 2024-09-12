import { CurriculumContainer, Curriculumcontent, DescriptionB, DescriptionContainer, DescriptionH1, DescriptionNav, DescriptionP,  ExperiencesLi,  ExperiencesTitle,  MyExperiences, MyExperiencesContainer, MyQualifications, MyQualificationsContainer, MyQualificationsLi, MyQualificationsTitle, MySkills, MySkillsContainer, MySkillsLi, MySkillsTtle } from "./styles";




function CurriculumComponent() {
    return(

        <CurriculumContainer>
            <Curriculumcontent>

                <MySkillsContainer>
                    <MySkillsTtle>Minhas Habilidades:</MySkillsTtle>

                    <MySkills>

                        <b style={{color:'#CC8D1A'}}>

                            <MySkillsLi>♦ Javascript ES6 </MySkillsLi>
                            <MySkillsLi>♦ React.js</MySkillsLi>
                            <MySkillsLi>♦ TypeScript</MySkillsLi>
                            <MySkillsLi>♦ Node.js</MySkillsLi>

                        </b>

                        <b style={{color:'gold'}}>
                            <MySkillsLi>♦ GitHub</MySkillsLi>
                            <MySkillsLi>♦ Git</MySkillsLi>
                            <MySkillsLi>♦ Mongo DB</MySkillsLi>
                            <MySkillsLi>♦ Next.js</MySkillsLi>

                        </b>

                        <b style={{color:'#F26800'}}>
                            <MySkillsLi>♦ Styled-Components </MySkillsLi>
                            <MySkillsLi>♦ Design responsivo</MySkillsLi>
                            <MySkillsLi>♦ Consumo de API´s REST/RESTful</MySkillsLi>
                            <MySkillsLi>♦ Desenvolvedor web full stack</MySkillsLi>
                        </b>

                    </MySkills>                   
                </MySkillsContainer>



                <MyQualificationsContainer>
                    <MyQualificationsTitle>Oque posso Oferecer:</MyQualificationsTitle>
                    <MyQualifications>
                        <b style={{color:'#00FF13'}}>
                            <MyQualificationsLi >♦ Rápido aprendizado</MyQualificationsLi>
                            <MyQualificationsLi >♦ Boa comunicação com a equipe</MyQualificationsLi>                    
                            <MyQualificationsLi >♦ Proatividade</MyQualificationsLi>                            
                        </b>
                        <b  style={{color:'#E8C60C'}}>
                            <MyQualificationsLi >♦ Empenho na resolução de problemas</MyQualificationsLi>                            
                            <MyQualificationsLi >♦ Responsabilidade com prazos</MyQualificationsLi>                            
                            <MyQualificationsLi >♦ Busca por novos conhecimentos</MyQualificationsLi> 
                        </b>
                            

                    </MyQualifications>
                </MyQualificationsContainer>


                <MyExperiencesContainer>
                    <ExperiencesTitle >Experiências:</ExperiencesTitle>
                    <MyExperiences >
                        <b>
                            <ExperiencesLi >♦ Colchões Biflex: colchoeiro ( operador de máquina ) - 2008-2014</ExperiencesLi>
                            <ExperiencesLi >♦ Motorista de aplicativo: uber e 99pop</ExperiencesLi>
                            <ExperiencesLi>
                                ♦ BTCC conexão ao cliente: atendente sac-empresarial, vendas de planos e suporte técnico  – 2018-2024
                            </ExperiencesLi>
                            <ExperiencesLi>♦ DCS ©DESENVOLVEDORES, CONEXÃO e SUCESSO: estágio, criador de projetos próprio ~ Janeiro 2024 - atual 
                            </ExperiencesLi>
                        </b>

                    </MyExperiences>
                </MyExperiencesContainer>
            </Curriculumcontent>

            <DescriptionContainer>
                <DescriptionH1><b>Um pouco Sobre mim:</b></DescriptionH1>

                <DescriptionNav>
                    <DescriptionB>
                        
                        <DescriptionP>
                            Comecei um curso fullStack de programação em 2023 com o professor
                            <a href="https://www.linkedin.com/in/paulo-borges-1133341a1/" target="_blank" rel="noreferrer"><b> Paulo Borges </b></a> atravez do curso <a href="https://www.linkedin.com/company/projeto-profiss%C3%A3o-programador/" target="_blank" rel="noreferrer"><b> Pofissão progrmador </b></a> da comunidade DCS (desenvolvedores, conexão e sucesso) 
                            esse curso fornece um bom conhecimento em front-end e back-end e priorisando o melhor aprendisado o mundo developer business.  
                        </DescriptionP>

                        <DescriptionP>
                            Eu ja trabalhei como agente call center, uber, gerente de fabrica, suporte de aparelho, tenho cursos de lideranças e sempre fui bom em trabalho em equipee sou bastante empelhado.
                        </DescriptionP>

                        <DescriptionP>
                            Em busca de uma vida financeira melhor ingrecei no mundo da progrmação e com empenho conclui os desafios e estudo dado pelo curso profissão programador e me tornei um desnvolvedor junior.<br/>
                            Utilizo tecnologias como HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, PostgreSQL, Styled-components, Tailwind CSS, Material UI e Shadcn UI, entre outros.
                        </DescriptionP>


                        <DescriptionP>
                            Sou bastante comprometido e tenho vontade de aprender e avança sempre pois o mundo developer sempre vai caber mais e mais aprendisado e tenho muito a oferecer
                            com os ensinamentos que me foi dado.
                        </DescriptionP>
                    </DescriptionB>
                </DescriptionNav>
                    
            </DescriptionContainer>

        </CurriculumContainer>
    )
}

export default CurriculumComponent;