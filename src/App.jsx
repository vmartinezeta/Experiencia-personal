import reactLogo from './assets/react.svg'
import foto from './assets/foto.png'
import './App.css'
import Section from './components/Section'
import { useExperiencia } from './context/experiencia'
import { useEffect } from 'react'


function App() {
  const { loadTecnologias, tecnologias, loadProyectos, proyectos, isLoading, isError } = useExperiencia()

  useEffect(() => {
    loadTecnologias()
    loadProyectos()
  }, [])


  return <div className="app">
    <div className="main-header">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <div className="header">
        <div className="foto"><img src={foto} className="foto__img" /></div>
        <h1 className="ocupacion">Desarrollador fullstack</h1>
      </div>
    </div>

    <div className="yo">
      <div className="yo__quien-soy">
        <h1 className="yo__titulo">Soy Víctor</h1>
        <p className="yo__descripcion">
          <b>Víctor Ismael Martinez Rodriguez</b>, un apasionado del desarrollo web. No tengo mucha experiencia apenas estoy empezando pero con las herramientas de hoy en dia, que son de fácil uso, serán suficientes para crecer en este mundo tan emocionante y divertido.
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
      <b className="footer__autor">&copy; Víctor Martínez</b>
    </div>
  </div>
}

export default App
