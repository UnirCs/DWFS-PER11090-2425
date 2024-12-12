/*
* Mismo numero de filas y columnas
* Una matriz que represente los asientos
* 2 atributos id: entero y estado: bool (true - ocupado ; false - libre)
* Crear la funcion suggest con argumentos numero de asientos 
--Condiciones: 
    * Si el número de asientos supera la fila debe devolver un set vacío
    * Si ninguna fila devuelve suficientes asientos disponibles JUNTOS devolver set vacío
    * Se comienza a buscar los asientos desde la fila mas lejana de la pantalla.
    * El resultado debe ser un SET con los ids de los asientos pre-seleccionados
-- IMPORTANTE: 
nO SE ACEPTAN SOLUCIONES QUE VIOLEN LAS INVARIANTES DE UN BUCLE
*/


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

function suggest(butacas, nasiento) {        
    let resultado = new Set();
    let encontrado = false; 
    for (let fila of butacas) {         
        let secuencial = 0;
        let asientosIds = [];
        for (let columna of fila) {
            if (!columna.estado && !encontrado) { // Solo buscamos si no hemos encontrado los asientos
                secuencial++;
                asientosIds.push(columna.id);
                if (secuencial === nasiento) {                    
                    asientosIds.forEach(id => {fila.find(asiento => asiento.id === id).estado = true;});// Marcar ocupados
                    resultado = new Set(asientosIds); // Devolver SET con valores
                    encontrado = true; // Actualizamos la variable de estado
                }
            } else {
                secuencial = 0;
                asientosIds = [];
            }
        }
    }
    return resultado;
}

// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas
// Inicializar la matriz
let butacas = setup();
// Definir lugar pantalla: (0 - arriba ; 1 - abajo)
const pantalla = 0;
if (!pantalla) butacas.reverse(); 
//Imprimir disponibilidad 
function sugerir(numeroAsiento){ 
    console.log(suggest(butacas, +numeroAsiento, pantalla));      
}

