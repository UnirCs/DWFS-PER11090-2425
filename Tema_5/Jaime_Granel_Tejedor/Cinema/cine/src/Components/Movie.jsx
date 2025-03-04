import React from 'react';

export default function Movie({ movieData }) {
    const { titulo, imagen, sinopsis, duracion, genero, puntuacion } = movieData;

    return (
        <div style={{ border: '1px solid #CCC', margin: '1rem', padding: '1rem' }}>
            <h2>{titulo}</h2>
            <img
                src={imagen}
                alt={titulo}
                style={{ maxWidth: '200px', display: 'block', marginBottom: '1rem' }}
            />
            <p><strong>Duración:</strong> {duracion}</p>
            <p><strong>Género:</strong> {genero}</p>
            <p><strong>Puntuación:</strong> {puntuacion}</p>
            <p><strong>Sinopsis:</strong> {sinopsis}</p>
            <button>Ver asientos</button>
        </div>
    );
}
