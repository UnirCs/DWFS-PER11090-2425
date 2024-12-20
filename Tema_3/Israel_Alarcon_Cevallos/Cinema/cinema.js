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

var fila_reservada =0;
// Función para escoger los asientos de las reservas
function reserva(asientos, num_butacas)
{
    let asiento_confirmado = [];
    if (asientos > N){
        return 11;
    }
    else  {
        let asientos_reservados =0;
        let j=N;
        for (let i = N-1; i > 0; i--) {
            while (j > 0){
                j=j-1;
                if (!num_butacas[i][j].estado && asientos_reservados < asientos){
                    asiento_confirmado.push(num_butacas[i][j]);
                    fila_reservada=  i + 1;
                    asientos_reservados = asientos_reservados+1;
                    num_butacas[i][j].estado = true;
                }
            }
        }
    }
    return asiento_confirmado;
}

function imprimir(asientos_confirmados)
{
 let num = asientos_confirmados.length;
 let cadena_asientos = [];
 for (let i = 0; i < num; i++) {
     cadena_asientos = asientos_confirmados[i].id + "," + cadena_asientos;
 }
 //return cadena_asientos;
    document.getElementById("resultado").innerHTML = "Los asientos reservados fueron: " + cadena_asientos;
}

//CINE UNIR, PROGRAMA DE SELECCION DE BUTACAS POR CPFG-IG ISRAEL ALARCON C.
// Inicializar la matriz
function inicio (asientos){
    let butacas = setup();
    let asientos_confirmados = [];
    asientos_confirmados=reserva(asientos, butacas);
    if (asientos>10)
        document.getElementById("resultado").innerHTML = "Asientos exceden la fila seleccionada";
    else
        imprimir(asientos_confirmados);
}


//console.log("Numero de asientos solicitados: " + asientos);
//console.log("La fila reservada es: " + fila_reservada);
//console.log("Los asientos reservados son: " + imprimir(asientos_confirmados));