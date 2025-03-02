// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

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
let resultado = setup();
// Imprimir la matriz
console.log(resultado);

//Funcion para ocupar butacas
function ocuparButaca(id) {
    // Recorrer la matriz y buscar el asiento con el id correspondiente
    for (let i = 0; i < resultado.length; i++) {
        for (let j = 0; j < resultado[i].length; j++) {
            if (resultado[i][j].id === id) {
                resultado[i][j].estado = true; // Marca la butaca como ocupada
                console.log(`Butaca con ID ${id} ocupada.`);
            }
        }
    }
}

// Marcar varias butacas como ocupadas en una sola línea
[5, 13, 25, 26, 28, 32, 33, 35, 38, 46, 50, 54, 58, 64, 63, 73, 75, 78, 81, 83, 84, 91, 92, 95,99, 100].forEach(id => ocuparButaca(id));

// Imprimir la matriz actualizada
console.log(resultado);

function suggest(numeroButacas) {
    const consulta = new Set();
    if (numeroButacas <= N) {
        for (let i= N-1; i>= 0 && consulta.size < numeroButacas; i--) {
            consulta.clear();
            for (let j = 0; j < N && consulta.size < numeroButacas && N - j >= numeroButacas - consulta.size; j++) {
                if (!resultado[i][j].estado) {
                    consulta.add(resultado[i][j].id);
                }
                else {
                    consulta.clear();
                }
            }
        }
    }
    return consulta;
}

const reservar= suggest(7)
console.log(reservar)