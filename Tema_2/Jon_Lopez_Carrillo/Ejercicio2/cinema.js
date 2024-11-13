// Definir el tamaño de la matriz de butacas
const N = 9; // Número de filas y columnas
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
/**
 * Funcion para sugerir asientos libres contiguos
 * @param {Array} butacas - Matriz de butacas del cine
 * @param {number} num - Número de asientos a sugerir
 * @returns {Array} - Array con los IDs de los asientos sugeridos
 */
function suggest(butacas,num){
    let count = 0;
    let asientos = [];
    if(num > N){
        asientos = [];
        return asientos;
    }
    for (let i = N-1; i >= 0 && count < num; i--) {
        for (let j = 0; j < N; j++) {
            if(butacas[i][j].estado == false){
                count++;
                asientos.push(butacas[i][j].id);
            }else{
                count = 0;
                asientos = [];
            }
        }
    }
    console.log(asientos);
    return asientos;
}

// Inicializar la matriz
let cine = setup();
suggest(cine,7);