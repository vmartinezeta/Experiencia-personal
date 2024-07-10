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


export function ExperienciaProvider({ children }) {
    const [tecnologias, setTecnologias] = useState([])
    const [proyectos, setProyectos] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    const loadTecnologias = () => {
        setTecnologias([
            new Item({ titulo: "Reactjs", subtitulo: "Libreria de javascript", link:"https://es.react.dev/" }),
            new Item({ titulo: "Handlebars", subtitulo: "Motor de plantilla", link:"https://handlebarsjs.com/" }),
            new Item({ titulo: "Nextjs", subtitulo: "Framework", link:"https://nextjs.org/" }),
            new Item({ titulo: "Node", subtitulo: "Entorno de ejecución de js", link:"https://nodejs.org/en" }),
            new Item({ titulo: "Express", subtitulo: "Framework", link:"https://expressjs.com/es/" }),
            new Item({ titulo: "Mysql", subtitulo: "Gestor de base de datos", link:"https://www.mysql.com/" }),
            new Item({ titulo: "Sequelize", subtitulo: "ORM", link:"https://sequelize.org/" }),
            new Item({ titulo: "Phaser", subtitulo: "Libreria js", link:"https://phaser.io/" })
        ])
    }

    const loadProyectos = async () => {        
        try {
            const res = await fetch("")
            const data = await res.json()
            console.log(data)
            // transformar a Item
            setProyectos(data)
            setLoading(false)
        } catch (e) { 
            setLoading(true)
            setError(true)
        }
    }

    return <ExperienciaContext.Provider value={{
        isLoading,
        isError,
        loadTecnologias,
        tecnologias,
        loadProyectos,
        proyectos
    }}>
        {children}
    </ExperienciaContext.Provider>
}