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
let butacas = setup(N);

// Imprimir la matriz
//console.log(butacas);

//funcion Suggest
function suggest(numAsientos, butacas, N){
	let consecutivos = 0;
    let ids = [];

    //controlar cantidad de asientos
    if (numAsientos>N){
        console.log("Reserva Incorrecta")
        return new Set();
	} else {
        console.log("Buscando Reserva de:", numAsientos, "asientos")
        for (let i = N-1; i>=0; i--) {
            console.log("Buscando en Fila: ", i+1)
            consecutivos = 0;
            for (let j = N-1; j >=0; j--) {
                //console.log(!butacas[i][j].estado);
                if (!butacas[i][j].estado){
                    //contar asientos libres
                    consecutivos++;
                    ids.push(butacas[i][j].id);
                    if (consecutivos == numAsientos) {
                        console.log("*** Reserva encontrada!!!")
                        return new Set(ids)
                    }
                }else{
                    //hacer reset en contadores
                    consecutivos=0;
                    ids=[];
                }
            }
            if (consecutivos == numAsientos) {
                console.log("--->Reserva encontrada!!!")
                return new Set(ids)
            }else{
                console.log("--->Reserva NO encontrada en Fila")
            }
            //console.log(`ID: ${butacas[i][j].id}, Estado: ${butacas[i][j].estado}`);
        }
        return new Set()
	}

}

//Ocupar asientos
butacas[9][1].estado = true
butacas[8][2].estado = true
butacas[8][3].estado = true

//Pruebas 1
let numAsientos = 4
ids = suggest(numAsientos, butacas, N);
console.log("Ids", ids)

//Pruebas 1
numAsientos = 9
ids = suggest(numAsientos, butacas, N);
console.log("Ids", ids)

//Pruebas 2
numAsientos = 11
ids = suggest(numAsientos, butacas, N);
console.log("Ids", ids)