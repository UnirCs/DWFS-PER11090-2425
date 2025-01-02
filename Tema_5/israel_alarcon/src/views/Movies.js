import React, { useState } from 'react';
import '../styles/BookSearch.css';
import '../styles/styles.css'
import {Peliculas} from "../components/Peliculas";
import {Movie} from "../components/Movie";

const Movies = () => {

    const [busqueda, setBusqueda] = useState('');
    const [resultados, setResultados] = useState(Peliculas);

    const handleBusqueda = (e) => {
        const valorBusqueda = e.target.value;

        setBusqueda(valorBusqueda);
        setResultados(valorBusqueda);

        // Filtrar las peliculas basados en el valor de búsqueda
        const librosFiltrados = Peliculas.filter(mov =>
            mov.nombre.toLowerCase().includes(valorBusqueda.toLowerCase()) ||
            mov.genero.toLowerCase().includes(valorBusqueda.toLowerCase())
        );

        setResultados(librosFiltrados);  // Actualizamos los resultados
    };

    return (
        <>
            <table className="myTabla">
                <tbody>
                <tr>
                    <td>
                        <div align="center" className="book-search-container">
                            <input className="buscar"
                                   type="text"
                                   placeholder="Búsqueda de autor o título"
                                   value={busqueda}
                                   onChange={handleBusqueda}
                            />
                            <button className="boton_buscar" onChange={handleBusqueda}>Buscar</button>
                        </div>
                    </td>

                </tr>
                </tbody>
            </table>

            <div>
            <div>
                    <span className="titulo_catalogo">Catálogo de Películas</span>
                </div>
                <div className="book-container">
                    {
                        resultados.length > 0 ? (
                            resultados.map((mov) => (
                                <Movie
                                    id={mov.id}
                                    nombre={mov.nombre}
                                    genero={mov.genero}
                                    image={mov.image}
                                    sinopsis={mov.sinopsis}
                                    puntuacion={mov.puntuacion}
                                />
                            ))
                        ) : (
                            <div className="td_portada">Not found</div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Movies;
