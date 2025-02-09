import React from 'react';
import '../styles/Movie.css';

export default ({ title, cover, synopsis, duration, genre, rating }) => {
    return (
        <div className='movie'>
            <div className='movie__container'>
                <div className='movie__image'>
                    <img src={cover} alt={title} />
                    <div className="overlay"></div>
                </div>
                <div className='movie__title'>
                    <p>{title}</p>
                </div>
                <div className='movie__info'>
                    <p>{synopsis}</p>
                    <p>Duration: {duration}</p>
                    <p>Genre: {genre}</p>
                    <p>Rotten Tomatoes: {rating}</p>
                </div>
                <div className='movie__buttons'>
                    <button className='movie__buttons--seats'>Seats</button>
                </div>
            </div>
        </div>
    );
};