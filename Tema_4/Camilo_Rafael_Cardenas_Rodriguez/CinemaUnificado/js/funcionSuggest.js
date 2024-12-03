// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas
const M = 5; // Número de columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < M; i++) {
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
let butacas = setup(N,M);

// Imprimir la matriz
//console.log(butacas);

//funcion Suggest
function suggest(numAsientos, butacas, N, M){
	let consecutivos = 0;
    let ids = [];

    //controlar cantidad de asientos
    if (numAsientos>N){
        console.log("Reserva Incorrecta")
        return new Set();
	} else {
        console.log("Buscando Reserva de:", numAsientos, "asientos")
        for (let i = M-1; i>=0; i--) {
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
                        return [i+1, j+1];
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

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Asignar ASIENTOS ocupados
    //Ocupar asientos
    butacas[1][6].estado = true
    butacas[1][7].estado = true
    butacas[1][8].estado = true
    //Ocupar asientos
    butacas[2][0].estado = true
    butacas[2][1].estado = true
    butacas[2][2].estado = true
    butacas[2][3].estado = true
    butacas[2][4].estado = true
    butacas[2][5].estado = true
    //Ocupar asientos
    butacas[3][2].estado = true
    butacas[3][3].estado = true
    butacas[3][4].estado = true
    butacas[3][7].estado = true
    butacas[3][8].estado = true
    //Ocupar asientos
    butacas[4][0].estado = true
    butacas[4][2].estado = true
    butacas[4][3].estado = true
    butacas[4][4].estado = true
    butacas[4][6].estado = true
    butacas[4][7].estado = true
    butacas[4][8].estado = true
    butacas[4][9].estado = true

});

// Manejar el evento de envío del formulario
document.getElementById('frm2').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formulario', event.target);

    //Pruebas 1
    let numAsientos = document.getElementById('asientos2').value;
    //alert("Asientos " + numAsientos);
    let [i, j] = suggest(numAsientos, butacas, N, M);

    alert("Reserva Encontrada en Fila: " + i + "; Asiento Inicial: " + j);
    switch (i){
        case 1:
            fila="A";
            break;
        case 2:
            fila="B";
            break;
        case 3:
            fila="C";
            break;
        case 4:
            fila="D";
            break;
        case 5:
            fila="E";
            break;
    }

    for(let k=0; k<numAsientos; k++){
        p = j + k
        nuevoId = fila + p
        console.log(nuevoId)
        document.getElementById(nuevoId).classList.add('blq__asientos-reservado');
    }

});



