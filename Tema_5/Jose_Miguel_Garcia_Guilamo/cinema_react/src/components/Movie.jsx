const Movie = ({ movie }) => {
    return (
        <div className="card movie-card">
            <img src={movie.image} className="card-img-top movie-image" alt={movie.title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.synopsis}</p>
                <p className="card-text"><small className="text-muted">{movie.duration}</small></p>
                <p className="card-text"><small className="text-muted">{movie.genre}</small></p>
                <p className="card-text"><small className="text-muted">{movie.rating}</small></p>
                <a href="#" className="btn btn-primary mt-auto">{movie.seatSelectionButton}</a>
            </div>
        </div>
    );
}
export default Movie;