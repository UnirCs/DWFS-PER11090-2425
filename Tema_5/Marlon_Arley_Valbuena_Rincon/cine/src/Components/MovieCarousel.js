import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MovieCarousel = ({ movies, onSelectMovie }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div style={{ padding: '20px' }}>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ padding: '10px' }}>
            <div
              style={{
                backgroundColor: '#333',
                borderRadius: '10px',
                padding: '10px',
                textAlign: 'center',
                cursor: 'pointer',
                
                width: '250px', // Ajustar el ancho del contenedor
                height: '400px', // Ajustar la altura del contenedor
                margin: '0 auto' // Centrar el contenedor
              }}
              onClick={() => onSelectMovie(movie)}
            >
              <LazyLoadImage 
                src={movie.poster} 
                alt={movie.title} 
                effect="blur"
                style={{ 
                  width: '100%', 
                  height: '300px', 
                  objectFit: 'cover', 
                  borderRadius: '10px' 
                }} 
              />
              <h3 style={{ color: '#f9a825' }}>{movie.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieCarousel;