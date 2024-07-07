import { createContext, useContext, useState } from "react";
import { Item } from "../classes/Item";

const ExperienciaContext = createContext()

export function useExperiencia() {
    const context = useContext(ExperienciaContext)
    if (!context) {
        throw new TypeError()
    }
    return context
}


export function ExperienciaProvider({children}) {
    const [tecnologias, setTecnologias] = useState([])
    const [proyectos, setProyectos] = useState([])


    const loadTecnologias = () => {
        setTecnologias([
            new Item({titulo:"Reactjs", subtitulo:"Libreria de javascript"}),
            new Item({titulo:"Handlebars", subtitulo:"Motor de plantilla"}),
            new Item({titulo:"Nextjs", subtitulo:"Frameworks"}),
            new Item({titulo:"Node", subtitulo:"Entorno de ejecución de js"}),
            new Item({titulo:"Express", subtitulo:"Framework"}),
            new Item({titulo:"Mysql", subtitulo:"Gestor de base de datos"}),
            new Item({titulo:"Sequelize", subtitulo:"ORM"}),
            new Item({titulo:"Phaser", subtitulo:"Libreria js"})
        ])
    }

    const loadProyectos = () => {
        setProyectos([])
    }

    return <ExperienciaContext.Provider value={{
        loadTecnologias,
        tecnologias,
        loadProyectos,
        proyectos
    }}>
        {children}
    </ExperienciaContext.Provider>
}