/**
 * Clase Butaca
 * @property {number} id - ID de la butaca
 * @property {string} estado - Estado de la butaca (libre, sugerida, ocupada)
 */
class Butaca {
    constructor(id, estado = 'libre') {
        this.id = id;
        this.estado = estado;
    }
}

/**
 * Clase Cine
 * @property {number} size - Tamaño de la matriz de butacas
 * @property {Array} butacas - Matriz de butacas
 * @method setup - Inicializa la matriz de butacas
 * @method suggest - Sugiere asientos libres contiguos
 * @method renderButacas - Renderiza las butacas en el DOM
 * @method toggleButaca - Reserva o libera una butaca
 * @method resetSuggetion - Resetea las butacas sugeridas
 * @method confirmarReserva - Confirma la reserva de las butacas sugeridas
 */
class Cine {
    constructor(n) {
        this.size = n;
        this.butacas = this.setup();
        this.renderButacas();
    }

    /**
     * Función para inicializar la matriz de butacas
     * @returns {Array} - Matriz de butacas
    */
    setup() {
        let idContador = 1;
        let butacas = [];
        for (let i = 0; i < this.size; i++) {
            let fila = [];
            for (let j = 0; j < this.size; j++) {
                fila.push(new Butaca(idContador++));
            }
            butacas.push(fila);
        }
        return butacas;
    }

    /**
    * Funcion para sugerir asientos libres contiguos
    * @param {number} nAsientos - Número de asientos a sugerir
    * @returns {Array} - Array con los IDs de los asientos sugeridos
    */
    suggest(nAsientos) {
        const tempAsientos = new Set();
        if (nAsientos <= this.size) {
            for (let i = this.size - 1; i >= 0 && tempAsientos.size < nAsientos; i--) {
                tempAsientos.clear();
                for (let j = 0; j < this.size && tempAsientos.size < nAsientos && this.size - j >= nAsientos - tempAsientos.size; j++) {
                    if (this.butacas[i][j].estado === 'libre') {
                        tempAsientos.add(this.butacas[i][j]);
                    }
                    else {
                        tempAsientos.clear();
                    }
                }
            }
            tempAsientos.forEach((butaca) => {
                butaca.estado = 'sugerida';
            });
        }
        return Array.from(tempAsientos);
    }

    /**
     * Función para renderizar las butacas en el DOM
     */
    renderButacas() {
        const butacasContainer = document.querySelector('.cine');
        butacasContainer.innerHTML = '';
        this.butacas.forEach((fila) => {
            const filaDiv = document.createElement('div');
            filaDiv.className = 'cine-fila';
            const textoFila = document.createElement('span');
            textoFila.className = 'cine-fila-texto';
            const numFila = document.createTextNode(this.butacas.indexOf(fila) + 1);
            textoFila.appendChild(numFila);
            filaDiv.appendChild(textoFila);
            fila.forEach((butaca) => {
                const butacaSpan = document.createElement('span');
                butacaSpan.className = `cine-butaca-${butaca.estado}`;
                butacaSpan.id = `butaca-${butaca.id}`;
                butacaSpan.addEventListener('click', () => this.toggleButaca(butaca));
                filaDiv.appendChild(butacaSpan);
            });
            butacasContainer.appendChild(filaDiv);
        });
    }
    /**
     * Función para reservar o liberar una butaca clicando sobre ella
     * @param {Butaca} butaca - Butaca a reservar o liberar
     */
    toggleButaca(butaca) {
        if (butaca.estado === 'libre') {
            butaca.estado = 'sugerida';
        }
        else if (butaca.estado === 'sugerida') {
            butaca.estado = 'libre';
        }
        this.renderButacas();
    }

    /**
     * Función para resetear las butacas sugeridas
     */
    resetSuggetion() {
        this.butacas.forEach((fila) => {
            fila.forEach((butaca) => {
                if (butaca.estado === 'sugerida') {
                    butaca.estado = 'libre';
                }
            });
        });
    }

    /**
     * Función para confirmar la reserva de las butacas sugeridas
     */
    confirmarReserva() {
        this.butacas.forEach((fila) => {
            fila.forEach((butaca) => {
                if (butaca.estado === 'sugerida') {
                    butaca.estado = 'ocupada';
                }
            });
        });
    }
}

// Inicializar la matriz
const cine = new Cine(9);

window.onload = function () {
    //Listener para el cambio del número de asientos a sugerir
    document.getElementById('num-asientos').addEventListener('change', () => {
        const nAsientos = parseInt(document.getElementById('num-asientos').value);
        cine.resetSuggetion();
        cine.suggest(nAsientos);
        cine.renderButacas();
       });
    //Listener para el botón de reserva
    document.querySelector('.boton-reserva').addEventListener('click', () => {
        cine.confirmarReserva();
        cine.renderButacas();
    });

};
