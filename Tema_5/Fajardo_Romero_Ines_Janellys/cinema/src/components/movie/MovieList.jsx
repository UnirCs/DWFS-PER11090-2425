import "../../index.css";
import * as api from "../../services/apiServices";
import React, {useState, useEffect} from "react";
import {CardBook} from "../componentes/carbook/CardBook";
import Header from "../../layout/Header";

function MovieList() {
    const [listPeliculas, setListPeliculas] = useState([]);
    useEffect(() => {
        api.fetchData(
            '/data/peliculas.json',
            (data) => setListPeliculas(data),
            (error) => console.error("Error al cargar los datos:", error)
        );

    }, []);

    return (
        <>
            <Header title='Peliculas'/>
            <div className="body-content-div g-4 row row-cols-lg-5 row-cols-md-3 row-cols-2">
                {listPeliculas.length > 0 &&  (
                    listPeliculas.map((pelicula) => (
                        <div className="col" key={pelicula.id}>
                            <CardBook
                                {...pelicula}
                            />
                        </div>
                    ))
                ) }

            </div>
        </>
    )
}

export default MovieList;