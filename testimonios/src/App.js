import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
       <h1 className='titulo-testimonio'>Testimonios</h1>
       <Testimonio
       nombre='Susu Doroza'
       pais='Lanús'
       img='1'
       cargo='Emprendedora - Instagramer'
       empresa='Freelance'
       testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
       />
       <Testimonio
       nombre='Pepe Le Pew'
       pais='Avellaneda'
       img='2'
       cargo='Vicepresidente Jr'
       empresa='Galeno'
       testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
       />
      <Testimonio
       nombre='Amilcar Alcanfor'
       pais='Barracas'
       img='3'
       cargo='Gorila Terrateniente'
       empresa='La Rural'
       testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />

      </div>
    </div>
  );
}

export default App;
