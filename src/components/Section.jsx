
function Section({ titulo, elementos }) {

    return <div className="seccion">
        <h1 className="titulo-principal">{titulo}</h1>
        <div className="cuadricula">
            {
                elementos.map((item, index) => {
                    return <a className="item" target="blank" href={item.link} key={index}>
                        <h1 className="item__titulo" >{item.titulo} <span className="item__subtitulo">{item.subtitulo}</span></h1>
                    </a>
                })
            }
        </div>
    </div>
}

export default Section