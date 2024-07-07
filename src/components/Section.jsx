
function Section({ titulo, elementos }) {

    return <div className="seccion">
        <h1 className="titulo-principal">{titulo}</h1>
        <div className="cuadricula">
                {
                    elementos.map((item, index) => {
                        return <div className="item" key={index}><h1 className="item__titulo" >{item.titulo} <span className="item__subtitulo">{item.subtitulo}</span></h1></div>
                    })
                }
        </div>
    </div>
}

export default Section