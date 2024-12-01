// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas
let butacas = [];

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

function imprimirChairs(){
    let fila = '';
    console.log('');
    console.log('[----------PANTALLA----------]');
    console.log('');
    for (let i = 0; i < N; i++) {
        fila = ''
        for (let j = 0; j < N; j++) {
            if (butacas[i][j].estado) {
                fila += '[X]';
            }else {
                fila += '[ ]';
            }
        }
        console.log(fila);
    }
    console.log('');
}

function setupChairs(arrayChairs){
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arrayChairs.includes(butacas[i][j].id)) {
                butacas[i][j].estado = true;
            }
        }
    }
}

function searchOtherChairs(fila, columna, chairs) {
    let nextChairs = new Array;
    for (let j = columna; j >= 0; j--) {
        if(!butacas[fila][j].estado && nextChairs.length < chairs) {
            nextChairs.push(butacas[fila][j].id)
        }
    }

    return nextChairs.length == chairs ? nextChairs : null ;
}

function suggest(chairs) {
    let obj = new Array;
    if (chairs > N) return obj ;

    for (let i = (N - 1 ); i >= 0; i--) {
        for (let j = (N-1); j >= 0; j--) {
            if(obj.length < chairs && !butacas[i][j].estado){
                let search = searchOtherChairs(i,j, chairs);
                if(search) obj = obj.concat(search);
            }
        }
    }
    // setupChairs(obj);
    return obj
}

// Inicializar la matriz
butacas = setup();
// Imprimir la matriz
console.log(suggest(5));
console.log(suggest(3));
console.log(suggest(4));
// imprimirChairs();