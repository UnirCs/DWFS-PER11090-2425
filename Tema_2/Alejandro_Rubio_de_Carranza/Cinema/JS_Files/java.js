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

// Inicializar la matriz
let butacas = setup();

let asientos_seleccionados = prompt('Indica cuantos asientos quieres reservar (No puedo ser mayor que el numero de asientos de una fila):');


// Funcion para insertar asientos en la matriz butacas. Hay que introducir la matriz butacas previamente creada.

function suggest(butacas,asientos_selec) {

    //Creo un set vacio.
    let butacas_vacio=[];

    //Creo un estado de actualizacion de las butacas.
    let butacas_inicial=butacas;

    // Creo una variable que definira el exito de mi operacion.
    let exito_operacion= false;


    if(asientos_selec>N){

        // Devuelve un set vacio. No estoy seguro de si el problema quiere que devuelva un set vacio o el set sin modificar previo.

        butacas=butacas_vacio;   
        // Caso dos: butacas=butacas_inicial;     

    }else{
        // Parte para introducir los asientos

        let contador_asientos_seguidos=0;



        for (let i=(N-1); i >= 0 && contador_asientos_seguidos<asientos_selec; i--){
        

            // Con cada iteracion de filas se reinician a 0 los asientos elegidos.
            contador_asientos_seguidos=0;

            for (let j = 0; j < N && contador_asientos_seguidos<asientos_selec; j++) {
            
                if(butacas[i][j].estado==false){

                    // Contamos uno y cambiamos el estado del asiento

                    contador_asientos_seguidos++;
                    butacas[i][j].estado=true;

                    // Si al fin conseguimos el numero de asientos elegidos pondremos que la operacion ha sido un exito.

                    if(contador_asientos_seguidos==asientos_selec){
                        exito_operacion=true;
                    }
                    // Si resulta que no llegamos al nuero de asientos elegidos y tenemos un asiento ocupado, iniciaremos el contador.
                    
                }else if(butacas[i][j].estado==true && contador_asientos_seguidos<asientos_selec){
                    contador_asientos_seguidos=0;
                }
            }

        }
    }

    // Si no se ha podido insertar los asientos, devolveremos las butacas sin modificar.
    if(exito_operacion==false && asientos_selec<N){


        butacas=butacas_inicial;

    }

        // Resultado de la funcion. Mi programa devuelve la matriz entera con los asientos seleccionados. 
        return butacas;
    } 


console.log(suggest(butacas,asientos_seleccionados));