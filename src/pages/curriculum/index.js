import { B, BusinessContainer, CurriculumContainer, DescriptionB, DescriptionContainer, DescriptionH1, DescriptionNav, DescriptionP, DescriptionSpan, ExperiencesB, ExperiencesH1, ExperiencesLi, ExperiencesSpan, ExperiencesUl, MyExperiencesContainer, MyQualifications, MyQualificationsContainer, MyQualificationsLi, MyQualificationSpan, MyQualificationsTitle, MySkills, MySkillsBloco1, MySkillsBloco2, MySkillsContainer, MySkillsContent, MySkillsLi, MySkillsResponsive, MySkillsResponsiveB, MySkillsSpan, MySkillsTtle } from "./styles";




function CurriculumComponent() {
    return(

        <CurriculumContainer>
            
            <MySkillsContainer>
                <MySkillsContent>
                    <MySkillsSpan>
                        <MySkillsTtle>Minhas Habilidades:</MySkillsTtle>
                        <MySkills>
                            <MySkillsBloco1>
                                <b>
                            
                                    <MySkillsLi>♦ React.js</MySkillsLi>
                                    <MySkillsLi>♦ TypeScript</MySkillsLi>
                                    <MySkillsLi>♦ Node.js</MySkillsLi>
                                    <MySkillsLi>♦ Javascript ES6 </MySkillsLi>
                                    <MySkillsLi>♦ Styled-Components </MySkillsLi>

                                </b>

                                <b>
                                    <MySkillsLi>♦ GitHub</MySkillsLi>
                                    <MySkillsLi>♦ Git</MySkillsLi>
                                    <MySkillsLi>♦ Mongo DB</MySkillsLi>
                                    <MySkillsLi>♦ Next.js</MySkillsLi>
                                    <MySkillsLi>♦ Design responsivo</MySkillsLi>

                                </b>

                            </MySkillsBloco1>

                            <MySkillsBloco2>

                                <b>
                                    <MySkillsLi>♦ Consumo de API´s REST/RESTful</MySkillsLi>
                                    <MySkillsLi>♦ Desenvolvedor web full stack</MySkillsLi>
                                    <MySkillsLi>♦ Stack: React.js| Node.js | Mongo db</MySkillsLi>

                                </b>

                            </MySkillsBloco2>
                        </MySkills>

                            <MySkillsResponsive>
                                <B>
                                    <MySkillsLi>♦ React.js</MySkillsLi>
                                    <MySkillsLi>♦ Node.js</MySkillsLi>
                                    <MySkillsLi>♦ TypeScript</MySkillsLi>
                                    <MySkillsLi>♦ GitHub</MySkillsLi>
                                    <MySkillsLi>♦ Git</MySkillsLi>
                                    <MySkillsLi>♦ Mongo DB</MySkillsLi>
                                    <MySkillsLi>♦ Next.js</MySkillsLi>
                                </B>
                                <B>
                                    <MySkillsLi>♦ Javascript ES6 </MySkillsLi>
                                    <MySkillsLi>♦ Styled-Components </MySkillsLi>
                                    <MySkillsLi>♦ Design responsivo</MySkillsLi>
                                    <MySkillsLi>♦ Consumo de API´s REST/RESTful</MySkillsLi>
                                    <MySkillsLi>♦ Desenvolvedor web full stack</MySkillsLi>
                                    <MySkillsLi>♦ Stack: React.js| Node.js | Mongo db</MySkillsLi>

                                </B>

                                <MySkillsResponsiveB>
                                    <MySkillsLi>♦ React.js</MySkillsLi>
                                    <MySkillsLi>♦ Node.js</MySkillsLi>
                                    <MySkillsLi>♦ TypeScript</MySkillsLi>
                                    <MySkillsLi>♦ GitHub</MySkillsLi>
                                    <MySkillsLi>♦ Git</MySkillsLi>
                                    <MySkillsLi>♦ Mongo DB</MySkillsLi>
                                    <MySkillsLi>♦ Next.js</MySkillsLi>

                                    <MySkillsLi>♦ Javascript ES6 </MySkillsLi>
                                    <MySkillsLi>♦ Styled-Components </MySkillsLi>
                                    <MySkillsLi>♦ Design responsivo</MySkillsLi>
                                    <MySkillsLi>♦ Consumo de API´s REST/RESTful</MySkillsLi>
                                    <MySkillsLi>♦ Desenvolvedor web full stack</MySkillsLi>
                                    <MySkillsLi>♦ Stack: React.js| Node.js | Mongo db</MySkillsLi>
                                    
                                </MySkillsResponsiveB>


                            </MySkillsResponsive>


                    </MySkillsSpan>

                    <MyQualificationsContainer>
                        <MyQualificationSpan>
                            <MyQualificationsTitle>Oque posso Oferecer:</MyQualificationsTitle>
                            <MyQualifications>
                                <b style={{overflowY:'auto', width:'100%', padding:'5px'}}>
                                    <MyQualificationsLi >♦ Rápido aprendizado</MyQualificationsLi>
                                    <MyQualificationsLi >♦ Boa comunicação com a equipe</MyQualificationsLi>                    
                                    <MyQualificationsLi >♦ Proatividade</MyQualificationsLi>                            
                                    <MyQualificationsLi >♦ Empenho na resolução de problemas</MyQualificationsLi>                            
                                    <MyQualificationsLi >♦ Responsabilidade com prazos</MyQualificationsLi>                            
                                    <MyQualificationsLi >♦ Busca por novos conhecimentos</MyQualificationsLi> 

                                </b>
                            </MyQualifications>
                        </MyQualificationSpan>
                    </MyQualificationsContainer>
                </MySkillsContent>
            </MySkillsContainer>

            <BusinessContainer>
                <MyExperiencesContainer>
                    <ExperiencesSpan >
                        <ExperiencesH1 >Experiências:</ExperiencesH1>
                        <ExperiencesUl >
                            <ExperiencesB>

                                <ExperiencesLi >♦ Colchões Biflex: Auxiliar de montagem<br/>( menor aprendiz / Auxiliar de gerente de seção ) - 2008-2012</ExperiencesLi>
                                <ExperiencesLi >♦ Colchões Biflex: colchoeiro<br/>( operador de máquina ) - 2012-2014</ExperiencesLi>
                                <ExperiencesLi >♦ Motorista de aplicativo: uber e 99pop</ExperiencesLi>

                                <ExperiencesLi>
                                    ♦ BTCC conexão ao cliente: atendente sac-empresarial, vendas de plano fixo e
                                    velox(internet) e suporte técnico rede movel – 2018-2024
                                </ExperiencesLi>

                                <ExperiencesLi>♦ DCS ©DESENVOLVEDORES, CONEXÃO e SUCESSO: estágio, criador de projetos próprio ~ Janeiro 2024 - atual 
                                </ExperiencesLi>
                            </ExperiencesB>

                        </ExperiencesUl>
                        </ExperiencesSpan>
                </MyExperiencesContainer>

                <DescriptionContainer>
                    <DescriptionSpan>
                        <DescriptionH1><b>Um pouco <br/> Sobre mim:</b></DescriptionH1>


                            <DescriptionNav>
                                <DescriptionB>
                                    <DescriptionP>
                                        Comecei um curso fullStack de programação em 2023 com o professor
                                        <a href="https://www.linkedin.com/in/paulo-borges-1133341a1/" target="_blank" rel="noreferrer"><b> Paulo Borges </b></a> atravez do curso <a href="https://www.linkedin.com/company/projeto-profiss%C3%A3o-programador/" target="_blank" rel="noreferrer"><b> Pofissão progrmador </b></a> da comunidade DCS (desenvolvedores, conexão e sucesso) 
                                        esse curso fornece um bom conhecimento em front-end e back-end e priorisando o melhor aprendisado o mundo developer business.  
                                    </DescriptionP>
                                </DescriptionB>
                            </DescriptionNav>
                        

                    
                            <DescriptionNav>
                                <DescriptionB>
                                    <DescriptionP>
                                        Eu ja trabalhei como agente call center, uber, gerente de fabrica, suporte de aparelho, tenho cursos de lideranças e sempre fui bom em trabalho em equipee sou bastante empelhado.
                                    </DescriptionP>
                                </DescriptionB>
                            </DescriptionNav>
                        

                        
                            <DescriptionNav>
                                <DescriptionB>
                                    <DescriptionP>
                                        Em busca de uma vida financeira melhor ingrecei no mundo da progrmação e com empenho conclui os desafios e estudo dado pelo curso profissão programador e me tornei um desnvolvedor junior.<br/>
                                        Utilizo tecnologias como HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, PostgreSQL, Styled-components, Tailwind CSS, Material UI e Shadcn UI, entre outros.
                                    </DescriptionP>
                                </DescriptionB>
                            </DescriptionNav>
                        

                        
                            <DescriptionNav>
                                <DescriptionB>
                                    <DescriptionP>
                                        Sou bastante comprometido e tenho vontade de aprender e avança sempre pois o mundo developer sempre vai caber mais e mais aprendisado e tenho muito a oferecer
                                        com os ensinamentos que me foi dado.
                                    </DescriptionP>
                                </DescriptionB>
                            </DescriptionNav>
                        
                    </DescriptionSpan>
                </DescriptionContainer>

            </BusinessContainer>

        </CurriculumContainer>
    )
}

export default CurriculumComponent;