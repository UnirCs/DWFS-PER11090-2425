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

// Función que sugiere la reserva de asientos
function suggest(butacas, numAsientos) {
    let resultado = new Set(); // Para almacenar los IDs de asientos seleccionados

    // Iterar sobre las filas de la matriz, comenzando desde la fila más lejana
    for (let i = N - 1; i >= 0; i--) {
        let fila = butacas[i];
        let asientosDisponibles = [];
        let consecutivos = 0;

        // Buscar los asientos consecutivos disponibles
        for (let j = 0; j < N; j++) {
            if (!fila[j].estado) {
                consecutivos++;
                asientosDisponibles.push(fila[j].id);
                // Verificar si hemos encontrado suficientes asientos consecutivos
                if (consecutivos === numAsientos) {
                    // Asignar los asientos y terminar el proceso de búsqueda
                    resultado = new Set(asientosDisponibles.slice(0, numAsientos));
                }
            } else {
                consecutivos = 0;
                asientosDisponibles = [];
            }
        }
    }

    return resultado; // Devolver el resultado al final
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log("Matriz de Butacas Inicial:");
console.log(butacas);

// Modificar algunos asientos para simular la ocupación
butacas[0][1].estado = true; // Ocupa el asiento 2
butacas[1][4].estado = true; // Ocupa el asiento 15
butacas[3][2].estado = true; // Ocupa el asiento 23
butacas[7][7].estado = true; // Ocupa el asiento 78

// Probar la función suggest para reservar 3 asientos consecutivos
let reserva = suggest(butacas, 3);

// Imprimir los resultados
console.log("Asientos reservados:", [...reserva]);

//Ejecutar en la terminar con: node .\cinema.js