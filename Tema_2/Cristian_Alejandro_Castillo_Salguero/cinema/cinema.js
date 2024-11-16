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
            if(idContador >= 87){
                // Nuevos asientos ocupados
                fila.push({
                    id: idContador++,
                    estado: true // Estado inicial ocupado
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

    if(numButacas <= 0 || numButacas > N) return [];
    
    for(let i = butacas.length - 1; i >= 0; i--){
        let set = [];
        for(let j = butacas[i].length - 1; j >= 0; j--){
            if(butacas[i][j].estado === false){
                set.push(butacas[i][j].id);
                if(set.length === numButacas){
                    set.forEach(butaca => butaca.estado = true);
                    return set.reverse();
                } 
            }else{
                set = [];
            }
        }
    }
    return [];
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

// Imprimir IDs de las butacas seleccionadas
console.log(res = suggest(9));