import React from 'react';
import ProductCard from '../../src/pages/products/productCard/ProductCard';
import movies from '../pages/products/list/movies';
import '../App.css';

const ProductList = () => {
  return (
    <div style={styles.container}>
      {movies.map((movie) => (
        <ProductCard
          key={movie.id} // Identificador único
          product={movie} // Pasar los datos de la película
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap', // Permitir que las tarjetas pasen a la siguiente fila
    gap: '16px', // Espacio entre tarjetas
    justifyContent: 'center', // Centrar las tarjetas horizontalmente
    padding: '16px',
  },
  card: {
    flex: '1 1 calc(25% - 16px)', // Cada tarjeta ocupa 25% menos el espacio de gap
    maxWidth: 'calc(25% - 16px)', // Asegurar el tamaño máximo
    boxSizing: 'border-box', // Incluir padding y border en el tamaño
  },
};

export default ProductList;
