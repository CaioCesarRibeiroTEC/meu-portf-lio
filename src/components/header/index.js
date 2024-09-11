import { useState } from "react";
import { HeaderA, HeaderContaine, HeaderNav, HeaderUl, LiContato, LiCurriculum, LiInicio, LiProjetos } from "./styles";



function HeaderComponent() {
    const [inicioPage, setInicioPage] = useState(false);
    const [curriculumPage, setCurriculumPage] = useState(false);
    const [projetosPage, setProjetosPage] = useState(false);
    const [contatoPage, setContatoPage] = useState(false);





    const Menu = document.querySelector('.nav-menu')
    document.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        Menu.classList.remove('ativo');
      });
    });




    function closePage() {
        setInicioPage(false)
        setCurriculumPage(false)
        setProjetosPage(false)
        setContatoPage(false)
    }



    return(
        <HeaderContaine>

            <HeaderNav>
                
                <HeaderUl className="nav-menu">

                    <HeaderA href="#inicio">
                        <LiInicio inicioPage={inicioPage} onClick={() => setInicioPage(!inicioPage)}><b style={{backgroundColor:'black'}} onClick={() => closePage()}>Início</b></LiInicio>
                    </HeaderA>

                    <HeaderA href="#curriculum">
                        <LiCurriculum  curriculumPage={curriculumPage} onClick={() => setCurriculumPage(!curriculumPage)} ><b style={{backgroundColor:'black'}} onClick={() => closePage()}>Curriculum</b></LiCurriculum>
                    </HeaderA>

                    <HeaderA href="#projetos">
                        <LiProjetos  projetosPage={projetosPage} onClick={() => setProjetosPage(!projetosPage)} ><b style={{backgroundColor:'black' }} onClick={() => closePage()}>Projetos</b></LiProjetos>
                    </HeaderA>

                    <HeaderA href="#contato">
                        <LiContato  contatoPage={contatoPage} onClick={() => setContatoPage(!contatoPage)}><b style={{backgroundColor:'black'}} onClick={() => closePage()} >Contato</b></LiContato>
                    </HeaderA>

                </HeaderUl>
            </HeaderNav>
        </HeaderContaine>

    )

};

export default HeaderComponent;