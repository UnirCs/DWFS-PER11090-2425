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

function suggest(reservas) {

    let butacas=setup();
    reservas=parseInt(reservas);
    let count = 0;
    let set = [];
    for (let i = butacas.length - 1; i >= 0 && count !== reservas && reservas <= butacas.length; i--) {
        set = [];
        count = 0;
        for (let j = 0; j < N && count !== reservas; j++) {
            if (!butacas[i][j].estado) {
                set.push(butacas[i][j].id);
                count++;
            } else {
                set = [];
                count = 0;
            }
        }
    }
    return console.log("Asientos reservados: "+set);

}




