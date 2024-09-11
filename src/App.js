import './App.css';
import HeaderComponent from './components/header';
import ForComponent from './pages/contato';
import CurriculumComponent from './pages/curriculum';
import InicioComponent from './pages/inicio';
import ProjetosComponent from './pages/projetos';


function App() {

  return (
    <div>
      <div className='header'>
        <HeaderComponent />
      </div>
      <main>

        <div className="content-container" id="inicio">
          <div className='inicio'>
            <InicioComponent />
          </div>
        </div>

        <div className="content-container" id="curriculum">
          <div className='curriculum  '>
            <CurriculumComponent />
          </div>
        </div>

        <div className="content-container" id="projetos">
          <div className='projetos'>
             <ProjetosComponent />
          </div>
        </div>
        
        <div className="content-container" id="contato">
          <div className='contato'>
            <ForComponent />      
          </div>  
        </div> 
      
      </main>
    
    </div>
  );
}

export default App;
