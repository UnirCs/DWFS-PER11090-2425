import {  useState } from 'react';
import ButacaContext from './ButacaContext';
import * as api from "../../services/apiServices";
import PropTypes from "prop-types";

export function ButacaProvider({ children }) {
    const [ButacaItems, setButacaItems] = useState([]);

    function suggest() {
        let butacas = [...ButacaItems];
        let numeroAsientos = parseInt(document.getElementById("num_asientos").value);
        let encontrado = false;

        for (let fila = butacas.length - 1; fila >= 0 && !encontrado; fila--) {
            if(butacas[fila].length >= numeroAsientos ) {
                let numeroAsientosDesOcupados = butacas[fila].filter(asientos => !asientos.estado).length;
                if (numeroAsientosDesOcupados >= numeroAsientos) {
                    let asientosSeleccionados = 0;
                    for (let column = 0; column < butacas[fila].length && asientosSeleccionados < numeroAsientos; column++) {
                        if (!butacas[fila][column].estado) {
                            butacas[fila][column].estado = true;
                            asientosSeleccionados++;
                        }
                    }
                    encontrado = true;
                }
            }

        }
        if (!encontrado) {
            butacaData();
        }else{
            setButacaItems(butacas);
        }
    }

    const butacaData = () => {
        api.fetchData(
            '/data/butacas.json',
            (data) => setButacaItems(data.reverse()),
            (error) => console.error("Error al cargar los datos:", error)
        );
    }

    return (
        <ButacaContext.Provider value={{ ButacaItems, suggest, butacaData }}>
            {children}
        </ButacaContext.Provider>
    );
}

ButacaProvider.propTypes = {
    children: PropTypes.node.isRequired, // Asegura que children es un nodo válido y obligatorio
};