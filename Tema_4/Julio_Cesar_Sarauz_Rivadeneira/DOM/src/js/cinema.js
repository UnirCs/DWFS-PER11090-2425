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
                    // asientosIds.forEach(id => {fila.find(asiento => asiento.id === id).estado = true;});// Marcar ocupados
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
function sugerir(numeroAsiento) {
    return suggest(butacas, +numeroAsiento, pantalla);
}



//DOM 
document.addEventListener('DOMContentLoaded', () => {
    const filas = 10;
    const columnas = 10;
    const matrizContainer = document.getElementById('mtz-butacas');
    const imgSrc = "./../imagenes/aciento.png";
    let contador = 1;
    for (let i = 1; i <= filas; i++) {
        const rowDiv = document.createElement('div');//Creamos las filas
        rowDiv.classList.add('row');//agregamos la clase                                                                           
        const filaLabel = document.createElement('div');
        filaLabel.classList.add('col');
        filaLabel.textContent = `Fila ${i}`;
        rowDiv.appendChild(filaLabel);
        for (let j = 1; j <= columnas; j++) {
            // Crear columna para asiento
            const colDiv = document.createElement('div');
            colDiv.classList.add('col', 'asiento');
            // Crear imagen para asiento
            const asientoImg = document.createElement('img');
            const asientoId = `F${contador}`; // ID único (Fila-Columna)
            asientoImg.setAttribute('src', imgSrc);
            asientoImg.setAttribute('alt', asientoId);
            asientoImg.setAttribute('id', asientoId);
            asientoImg.setAttribute('class', "vacio");
            // Agregar imagen a la columna
            colDiv.appendChild(asientoImg);
            // Agregar columna a la fila
            rowDiv.appendChild(colDiv);
            contador++;
        }
        // Agregar fila al contenedor principal
        matrizContainer.appendChild(rowDiv);
    }
    document.getElementById('txt_numerob').addEventListener('input', (event) => {
        const elementosOcupados = document.querySelectorAll('.ocupado');
        elementosOcupados.forEach((elemento) => {
            elemento.setAttribute('class', 'vacio');
        });        
        const valorIngresado = event.target.value;
        if (valorIngresado) {
            const sugerencias = sugerir(valorIngresado);
            console.log(sugerencias);            
            sugerencias.forEach(asiento => {                
                console.log(asiento);
                document.getElementById('F'+asiento).setAttribute('class',"ocupado");
            });   
        }
    });
});

