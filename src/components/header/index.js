import {HeaderContaine, HeaderLi, HeaderNav, HeaderUl } from "./styles";



function HeaderComponent() {


    const Menu = document.querySelector('.nav-menu')
    document.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        Menu.classList.remove('ativo');
      });
    });




    return(
        <HeaderContaine>

            <HeaderNav>
                
                <HeaderUl className="nav-menu">

                    <HeaderLi >
                        <b>
                            <a href="#inicio">Início</a> 
                        </b>

                    </HeaderLi>

                    <HeaderLi>
                        <b>
                            <a href="#curriculum">Competências</a>
                        </b>

                    </HeaderLi>


                    <HeaderLi>
                        <b>
                            <a href="#projetos">Projetos</a>
                        </b>

                    </HeaderLi>

                    <HeaderLi>
                        <b>
                            <a href="#contato">Contato</a>
                        </b>

                    </HeaderLi>

                </HeaderUl>
            </HeaderNav>
        </HeaderContaine>

    )

};

export default HeaderComponent;