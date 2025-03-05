// Definir el tamaño de la matriz de butacas
const numFil = 5; // Número de filas 
const numCol = 13;// Número de asientos por fila

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < numFil; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < numCol; j++) {

            //let estadoAsiento = Math.random() < 0.5; // 50% de probabilidad de que este ocupado
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


function suggest(asientos) {
    console.log("Asientos solicitados: " + asientos);
    let seleccionados = new Set(); //Almacenar los ids de los asientos seleccionados

    if (asientos > numCol) {//
        console.log("El número de asientos solicitados es mayor que el número de asientos disponibles");
        return seleccionados;
    }


    for (let i = numFil - 1; i >= 0; i--) {//Recorre las filas de atras hacia adelante
        //console.log("Revisando fila: " + i + 1);
        let contadorAsientosLibres = 0;
        let almTempIds = new Set();//Almacenar temporalmente los ids de los asientos encontrados en la fila
        for (let j = 0; j < numCol; j++) {//Recorrer cada asiento de la fila
            if (!butacas[i][j].estado) {//Verificar si el asiento esta libre
                almTempIds.add(butacas[i][j].id);
                contadorAsientosLibres++;

                if (contadorAsientosLibres === asientos) {//Si encontramos los asientos solicitados, entonces podemos devolverlos
                    console.log("Se han encontrado los asientos solicitados: " + Array.from(almTempIds));
                    return almTempIds;


                }
            } else {
                contadorAsientosLibres = 0;
                almTempIds.clear();
            }


        }

    }

    console.log("No se han encontrado los asientos solicitados");
    return seleccionados;



}

//let resultado = suggest(7);
//suggest(8);

function reservarAsientos() {
    let numeroAsientos = parseInt(document.getElementById("asientos").value);

    if (numeroAsientos < 1 || numeroAsientos > numCol || isNaN(numeroAsientos)) {
        console.log("El número de asientos solicitados no es válido, recuerde que el rango es: [1-" + numCol + "]");
        return;
    }
    suggest(numeroAsientos);
}