// Definir el tamaño de la matriz de butacas
const N = 5; // Número de filas y columnas

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
/* CODIGO PARA PRUEBAS DE ASIENTOS OCUPADOS
butacas[4][0].estado = true;
butacas[4][1].estado = true;
butacas[4][2].estado = true;
butacas[3][3].estado = true;
butacas[3][4].estado = true;
butacas[3][0].estado = true;

 */

function suggest(numButacas){

    if (numButacas > N){
        return new Set(); // Verificación temprana de solicitud inválida
    }

    let suggestedSeats = new Set();

    for (let i = N-1; i >= 0; i--) {
        // Nueva fila
        let contador = 0;
        let asientosJuntos = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            if (butacas[i][j].estado===false) {
                asientosJuntos.push(butacas[i][j].id);

                if (asientosJuntos.length === numButacas){
                    suggestedSeats.add(asientosJuntos);
                    j=N;
                    contador++;
                }
            }else{
                asientosJuntos = [];
            }
            if(contador > 0){
                i=-1;
            }
        }
    }
    console.log(suggestedSeats);
    return suggestedSeats;
}

//console.log(butacas);
//console.log(suggest(3));



