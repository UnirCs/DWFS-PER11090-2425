import { ButacaProvider } from './butacaContext/ButacaProvider';
import PropTypes from "prop-types";

export function AppProvider({ children }) {
    return (
        <ButacaProvider>
            {children}
        </ButacaProvider>
    );
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired, // Asegura que children es un nodo válido y obligatorio
};