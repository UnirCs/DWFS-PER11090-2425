import "../../index.css";
import "./movie.css";
import * as api from "../../services/apiServices";
import React, {useState, useEffect} from "react";
import Header from "../../layout/Header";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Movie() {
    const [pelicula, setPelicula] = useState({});
    const { id } = useParams();

    const obtenerPeliculas = () => {
        if(id){
            api.fetchDataId(
                '/data/peliculas.json',
                (data) => setPelicula(data),
                (error) => console.error("Error al cargar los datos:", error),
                id
            );
        }
        else{
            setPelicula({})
        }
    }


    useEffect(() => {
        obtenerPeliculas();
    }, []);

    if (!pelicula) return <p className="text-center text-danger">Película no encontrada</p>;

    return (
        <>
            <Header title="Detalle de la Pelicula"/>
            <div className="container">
                <div className="card shadow-lg mx-auto" style={{maxWidth: "600px"}}>
                    <img src={pelicula.image} className="card-img-top" alt={pelicula.title}/>
                    <div className="card-body">
                        <h2 className=" text-warning card-title text-center">{pelicula.title}</h2>
                        <p className="text-font text-center">{pelicula.year} · {pelicula.genre}</p>
                        <hr/>
                        <p className="text-font"><strong>Director:</strong> {pelicula.director}</p>
                        <p className="text-font"><strong>Descripción:</strong> {pelicula.plot}</p>
                        <div className="d-inline-flex gap-1 align-items-center">
                            <small className="text-warning">
                                <div className="d-flex gap-1">
                                    {[...Array(5)].map((_, index) => (
                                        <img
                                            key={index}
                                            src={`/img/icon/${index < pelicula.rating ? "start" : "start-1"}.svg`}
                                            alt="Star"
                                        />
                                    ))}
                                </div>
                            </small>
                            <span className="text-font  small">{pelicula.rating}</span>
                        </div>
                        <div className="container text-center d-grid gap-3">
                            <div className="row">
                                <div className="col">
                                    <Link to="/" className="btn btn-secondary label_text font-confirmar d-block mt-3">
                                        ← Volver a la lista
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to="/butacas"
                                          className="btn btn-warning label_text font-confirmar d-block mt-3">
                                        Seleccionar Butacas
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie;