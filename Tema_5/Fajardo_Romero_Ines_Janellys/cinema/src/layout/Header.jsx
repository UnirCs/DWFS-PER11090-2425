import PropTypes from "prop-types";

function Header(props) {
    return (
        <div className="row body-content-text-butacas">
            <div className="col-12 text-center">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}
export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired, // Asegura que children es un nodo válido y obligatorio
};