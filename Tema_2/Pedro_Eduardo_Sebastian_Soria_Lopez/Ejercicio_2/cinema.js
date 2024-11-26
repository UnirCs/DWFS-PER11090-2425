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
                estado: Math.random() < 0.5 // Estado inicial aleatorio
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
    const setAsientos = new Set();
    let encontrado = false;
    
    if(numAsientos < 10) {        
        for(let i = N-1; i >= 0 && !encontrado; i--){
            const fila = butacas[i];
            let consecutivos = 0;
            let tempAsientos = [];            

            for(let j = 0; j < N && !encontrado; j++){
                if(!fila[j].estado) {
                    consecutivos++;
                    tempAsientos.push(fila[j].id);
                    if(consecutivos == numAsientos) {
                        tempAsientos.forEach( id => setAsientos.add(id));
                        encontrado = true;
                    }
                } else {
                    consecutivos = 0;
                    tempAsientos = [];
                }
            }
        }
    }
    return setAsientos;
}

console.log(suggest(4)); // Solicitar 4 asientos consecutivos
console.log(suggest(6)); // Solicitar 6 asientos consecutivos
console.log(suggest(12)); // Solicitar más de 10 asientos consecutivos
