// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let butacas = [];
    let idContador = 1; // Comenzar el contador de IDs desde 1

    for (let i = 0; i < N; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push({
                id: idContador++, // ID numérico secuencial
                ocupado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Función para buscar asientos
function buscarAsientosContiguos(butacas, cantidad) {
    let resultado = new Set();

    if (cantidad > N) {
        return resultado;
    }

    for (let i = N - 1; i >= 0; i--) {
        for (let j = 0; j <= N - cantidad; j++) {
            let asientosTemp = [];
            let disponibles = true;

            for (let k = 0; k < cantidad; k++) {
                if (butacas[i][j + k].ocupado) {
                    disponibles = false;
                    break;
                }
                asientosTemp.push(butacas[i][j + k].id);
            }

            if (disponibles) {
                asientosTemp.forEach(id => resultado.add(id));
                return resultado;
            }
        }
    }
    return resultado;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

// Probar la función de búsqueda
let resultado = buscarAsientosContiguos(butacas, 3);
console.log(resultado.size > 0 ? `Asientos sugeridos: ${Array.from(resultado).join(', ')}` : 'No se encontraron suficientes asientos contiguos.');
