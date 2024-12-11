
function Movie(props) {
    return (
        <div className="eachMovie">
            <img src={props.imagen}></img>
            <h3>{props.titulo}</h3>
            <p>{props.sinopsis}</p>
            <p>Duración: {props.duracion}</p>
            <p>Genero: {props.genero}</p>
            <p>Puntuación: {props.puntuacion}</p>
            <button>Reservar</button>
        </div>
    );

}

export default Movie;