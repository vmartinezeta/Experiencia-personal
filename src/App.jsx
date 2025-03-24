import './App.css'
import  fotoUrl from "./assets/foto.png"
import reactLogo from './assets/react.svg'
import Section from './components/Section'
import { useExperiencia } from './context/experiencia'
import { useEffect } from 'react'
import Logo from './components/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons"

function App() {
  const { loadTecnologias, tecnologias, loadProyectos, proyectos, isLoading, isError } = useExperiencia()

  useEffect(() => {
    loadTecnologias()
    loadProyectos()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return <div className="app">
    <div className="main-header">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <div className="header">
        <Logo url={fotoUrl} />
        <h1 className="ocupacion">Desarrollador fullstack</h1>
      </div>
    </div>

    <div className="yo">
      <div className="yo__quien-soy">
        <h1 className="yo__titulo">Soy Víctor</h1>
        <p className="yo__descripcion">
          <b>Víctor Ismael Martínez Rodríguez</b>, amante del desarrollo y diseño de aplicaciones especialmente, el desarrollo web. Estoy ultimamente muy activo dedicando entre 2 a 3 horas diarias para fortalecer mis conocimientos y afortunadamente con la ayuda de la IA esto se vuelve cada vez más emcionante y divertido.
        </p>
      </div>
      <div className="yo__mision">
        <h1 className="yo__titulo">Misión</h1>
        <p className="yo__descripcion">
          Crear software de la mejor calidad y que este pueda ser competitivo a nivel internacional haciendo uso de tecnologia reciente y de las buenas practicas.
        </p>
      </div>
    </div>

    <div className="experiencia">
      <Section titulo="Tecnología" elementos={tecnologias} />
    </div>

    <div className="proyectos">
      {isLoading && !isError && <h1 className="loading">Loading...</h1>}
      {!isLoading && <Section titulo="Proyectos" elementos={proyectos} />}
    </div>

    <div className="footer">  
      <div className="sociales-y-creditos">
        <div className="sociales">
          <a className="sociales__link" target="_blank" href="https://www.facebook.com/profile.php?id=61562494782547"><FontAwesomeIcon icon={faFacebook} /></a>
          <a className="sociales__link" target="_blank" href="https://www.linkedin.com/in/victor-martinez-00935515a"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a className="sociales__link" target="_blank" href="https://www.youtube.com/@oh-vito"><FontAwesomeIcon icon={faYoutube}/></a>
        </div>
        <b className="footer__autor">&copy; Víctor Martínez</b>
      </div>
    </div>
  </div>
}

export default App