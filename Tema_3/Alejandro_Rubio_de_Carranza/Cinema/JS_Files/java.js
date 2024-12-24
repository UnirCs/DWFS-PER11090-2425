'use strict'

// Definir el tamaño de la matriz de butacas
const N = 6; // Número de filas y columnas


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


function suggest() {

    // Inicializamos la matriz de butacas
    let butacas = setup();

    // Introducimos como numero de butacas seleccionada el numero que introducimos en el panel de html

    let asientos_selec = document.getElementById("myInput").value;

    // Creo el set que voy a devolver

    const asientos_seguidos = new Set();


    if(asientos_selec>N){

        // Devuelvo un set vacio si el numero seleccionado es menor que la butaca

        asientos_seguidos.clear();

    }else{
        // Parte para introducir los asientos

        for (let i=(N-1); i >= 0 && asientos_seguidos.size<asientos_selec; i--){
        

            // Con cada iteracion de filas se reinician a 0 el set de asientos que voy a devolver porque no han cumplido la condicion

           asientos_seguidos.clear();

           // Cuento desde la ultima fila
            for (let j = 0; j < N && asientos_seguidos.size<asientos_selec; j++) {
                
                // Si las butacas estan libres (false), empiezo a crear mi set de asientos seleccionados
                if(butacas[i][j].estado==false){

                    // Contamos uno y cambiamos el estado del asiento

                    asientos_seguidos.add({

                        id: butacas[i][j].id, // Incluyo el ID de 'butacas' del asiento seleccionado. Podria inicializarlo pero prefiero hacerlo mas visual
                        estado: true // Cambio el estado del asiento a ocupado (true)
                    });

                }else {// En este punto no se cumpliria la condicion de 'asientos_seguidos.size<asientos_selec', por lo que inicializo el set de asientos
                    asientos_seguidos.clear();
                }
                }
            }

        }
    


        // Imprimo por consola el set de asientos.
        console.log(asientos_seguidos);

    } 


