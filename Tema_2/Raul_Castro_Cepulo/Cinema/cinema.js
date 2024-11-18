// Definir el tamaño de la matriz de butacas
const N = 5; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    let asientosReservar
    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push(
                {
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

function realizarReserva(asientos, numAsientos) {
    // Si el número de asientos solicitados excede el tamaño máximo de la fila
    if (numAsientos > asientos[0].length) {
        return new Set(); // Devuelve un Set vacío si la solicitud excede el tamaño de la fila
    }

    // Recorremos las filas de atrás hacia adelante (de la más lejana a la pantalla a la más cercana)
    let bloqueDisponible = false;
    let setReservado = new Set();

    // Buscamos bloques de asientos disponibles, empezando por la fila más lejana
    for (let i = asientos.length - 1; i >= 0 && !bloqueDisponible; i--) {
        let fila = asientos[i];

        // Usamos forEach para recorrer los posibles bloques de asientos consecutivos
        fila.slice(0, fila.length - numAsientos + 1).forEach((_, j) => {
            let esBloqueValido = true;

            // Verificamos si hay un bloque de 'numAsientos' consecutivos disponibles
            for (let k = 0; k < numAsientos; k++) {
                if (fila[j + k].estado === true) {  // asiento reservado (estado true), no válido
                    esBloqueValido = false;
                    return; // Terminamos esta iteración del forEach
                }
            }

            // Si encontramos un bloque válido, reservamos los asientos
            if (esBloqueValido) {
                setReservado = new Set(); // Resetear el Set para esta fila
                for (let k = 0; k < numAsientos; k++) {
                    setReservado.add(fila[j + k].id); // Añadimos el id del asiento al Set
                }

                // Actualizamos los estados de los asientos a 'true' (reservados)
                for (let k = 0; k < numAsientos; k++) {
                    fila[j + k].estado = true;  // Reservamos los asientos (estado 'true')
                }

                bloqueDisponible = true; // Marcamos que hemos encontrado un bloque disponible
            }
        });
    }

    // Si encontramos un bloque de asientos válidos, devolvemos el Set con los ids reservados
    return bloqueDisponible ? setReservado : new Set(); // Si no se encuentra bloque, devuelve un Set vacío
}



// Imprimir la matriz
//console.log(butacas);
butacas[0][0].estado = true;
butacas[0][1].estado = true;
butacas[0][2].estado = true;

butacas[butacas.length - 2][2].estado = true;

butacas[butacas.length - 1][0].estado = true;
butacas[butacas.length - 1][1].estado = true;
butacas[butacas.length - 1][2].estado = true;

// Ejemplo de uso
let reserva = realizarReserva(butacas, 5);
//console.log(butacas);
console.log(reserva); // Devuelve un Set con los ids de los asientos reservados, o un Set vacío
