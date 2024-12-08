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
            if(idContador >= 95){
                // Nuevos asientos ocupados
                fila.push({
                    id: idContador++,
                    estado: false // Estado inicial ocupado
                });
            }else{
                // Nuevos asientos libres
                fila.push({
                    id: idContador++,
                    estado: false // Estado inicial libre
                });
            }
        }
        butacas.push(fila);
    }
    return butacas;
}


function suggest(numButacas){
    let butacasAsignadas = false;
    let butacasLibres = 0;
    let indiceButaca = -1;
    if(numButacas <= 0 || numButacas > N) return [];
    let set = [];

    for(let i = butacas.length - 1; i >= 0; i--){
        for(let j = butacas[i].length - 1; j >= 0; j--){
            if((butacas[i][j].estado === false) && !butacasAsignadas){
                butacasLibres++;
                if(indiceButaca === -1){
                    indiceButaca = j;
                }
            }
            if((butacasLibres === numButacas) && !butacasAsignadas){
                for(let j = indiceButaca; j >= indiceButaca - numButacas + 1;j--){
                    set.push(butacas[i][j].id);
                }
                butacasAsignadas = true;
            }else if((j === 0) && (butacasLibres !== numButacas)){
                butacasLibres = 0;
                indiceButaca = -1;
            }
        }
    }
    return console.log(`Asientos sugeriods: ${set.reverse().toString()}`);
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
//console.log(butacas);

// Imprimir IDs de las butacas seleccionadas
//console.log(res = suggest(7));
