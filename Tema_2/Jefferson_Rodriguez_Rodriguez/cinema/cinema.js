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
let butacas = setup();

// Función que sugiere asientos contiguos empezando por la fila más lejana a la pantalla
function suggest(numeroAsientos){
    let asientosSugeridos = [];

    // Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
    if(numeroAsientos > N){
        return asientosSugeridos;
    }

    // Se recorren los asientos empezando por la ultima butaca de la fila más lejana.
    for (let i = N-1; i >= 0; i--) {
        let contador = 0;
        // let asientosSugeridos = [];
        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                contador++;
                asientosSugeridos.push(butacas[i][j].id);
                if (contador === numeroAsientos) {
                    return asientosSugeridos;
                }
            } else {
                contador = 0;
                asientosSugeridos = [];
            }
        }
    }

    // Si en ninguna fila hay suficientes asientos disponibles juntos, la función debe devolver un set vacío.
    return [];
}


// Imprimir la matriz
console.log(butacas);

// Reserva correcta 5 asientos
console.log("Asientos reservados: " + suggest(5));

// Error -> vacio
//console.log(suggest(11));