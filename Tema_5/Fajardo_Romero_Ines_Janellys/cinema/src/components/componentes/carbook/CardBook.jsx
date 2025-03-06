import PropTypes from "prop-types";
import "./cardBook.css";
import { Link } from "react-router-dom";

export function CardBook({
                             id,
                             title,
                             image,
                             genre = "General",
                             rating = 0,
                             reviews = 0,
                         }) {

    return (
        <div className="card-product card">
            <div className=" text-start  card-body">
                <div className="text-center position-relative">
                    {/* Product Image */}
                    <Link to={`/movie/${id}`}>
                        <img  src={image} alt={title} className="mb-3 img-fluid" />
                    </Link>
                </div>
                {/* Category */}
                <div className="text-start text-small mb-1">
                    <Link className="text-font text-decoration-none" to={`/movie/${id}`}>
                        <small>{genre}</small>
                    </Link>
                </div>
                {/* Title */}
                <h2 className="text-start fs-6">
                    <Link className=" text-warning text-decoration-none" to={`/movie/${id}`}>
                        {title}
                    </Link>
                </h2>
                {/* Rating */}
                <div className="d-inline-flex gap-1 align-items-center">
                    <small className="text-warning">
                        <div className="d-flex gap-1">
                            {[...Array(5)].map((_, index) => (
                                <img
                                    key={index + rating}
                                    src={`/img/icon/${index < rating ? "start" : "start-1"}.svg`}
                                    alt="Star"
                                />
                            ))}
                        </div>
                    </small>
                    <span className="text-font  small">{rating} ({reviews})</span>
                </div>
                <div className="mt-3 text-center">
                    <Link
                        type="button"
                        id="button_reserva"
                        className="btn btn-warning label_text font-confirmar"
                        to={`/movie/${id}`}

                    >
                        Ver Detalle
                    </Link>
                </div>
            </div>
        </div>
    );
}

CardBook.propTypes = {
    id: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number,
    reviews: PropTypes.number,
};
