// Definir el tamaño de la matriz de butacas
const N = 8;

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

function suggest(numAsientos) {
    let resultado = null;

    for (let i = N - 1; i >= 0; i--) {
        let consecutivos = 0;
        let asientosFila = new Set();

        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                consecutivos++;
                asientosFila.add(butacas[i][j].id);
                if (consecutivos === numAsientos) {
                    // Encontramos y guardamos el resultado
                    resultado = { fila: i, asientos: Array.from(asientosFila) };
                    
                    // Se marcan para que no se seleccionen más
                    for (let id of asientosFila) {
                        for (let x = 0; x < N; x++) {
                            for (let y = 0; y < N; y++) {
                                if (butacas[x][y].id === id) {
                                    butacas[x][y].estado = true;
                                }
                            }
                        }
                    }
                    // Para salir del bucle
                    j = N; 
                }
            } else {
                consecutivos = 0;
                asientosFila.clear();
            }
        }
        if (resultado) {
            i = -1; // Para salir del bucle
        }
    }

    return resultado || new Set();
}

// Ejemplo de uso
console.log(suggest(7));
console.log(suggest(2));
console.log(suggest(1));
console.log(suggest(3));
console.log(suggest(8));
console.log(suggest(9));