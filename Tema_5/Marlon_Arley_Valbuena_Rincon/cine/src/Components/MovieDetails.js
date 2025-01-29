import React from 'react';

const MovieDetails = ({ movie, onBook, onBack }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#1e1e1e', color: 'white', borderRadius: '10px' }}>
      <h2 style={{ color: '#f9a825' }}>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} style={{ width: '300px', height: 'auto', borderRadius: '10px', margin: '20px 0' }} />
      <p>{movie.description}</p>
      <div>
        <button 
          onClick={onBook}
          style={{
            backgroundColor: '#f9a825',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            color: '#1e1e1e',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          Reservar Asientos
        </button>
        <button 
          onClick={onBack}
          style={{
            backgroundColor: '#ccc',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            color: '#1e1e1e',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;