const N = 10; // Número de filas 
const M = 16; // Número de columnas

let butacas=[];
document.addEventListener('DOMContentLoaded', () => {   
    document.getElementById("msgError").style = "display: none";
    document.getElementById('cantidad').addEventListener('change', reservar);
    butacas=setup();
});

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    const elements = document.querySelectorAll('.asiento');
    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < M; j++) {
            elements[idContador-1].id = idContador;
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false  // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function validarCantidad(cantidad) {
    if (cantidad > 0 && cantidad <= 16) {
        document.getElementById("msgError").style = "display: none";
    } else {
        document.getElementById("msgError").style = "display: block";
    }
}

// Imprimir la matriz
//console.log(butacas[9]);

// Función para reservar una butaca
function suggest(cantidaAReservar) {
    validarCantidad(cantidaAReservar);
    if(butacas.length > 0 && cantidaAReservar > 0){
        if(butacas[0].length < cantidaAReservar){
            alert("El número de asientos solicitados excede el tamaño máximo de la fila");
            return new Set();
        }
        let butacasReservadas = new Set();    
        let i = butacas.length -1;
        let fila = butacas[i];   
        while(butacasReservadas.size < cantidaAReservar && i >= 0){          
            let disponible = fila.findIndex(butaca => !butaca.estado);
            if( disponible >= 0 && fila.length - disponible >= cantidaAReservar){
                let j = disponible;
                while(butacasReservadas.size < cantidaAReservar){
                    fila[j].estado = true;
                    butacasReservadas.add(fila[j].id);                    
                    j++;
                }
            }           
            fila = butacas[--i];
        }
        console.log("Butacas reservadas: ", butacasReservadas);
        return butacasReservadas;
    }else{        
        return new Set();
    }
}

function reservar(event){
    let cantidad = event.target.value;
    let butacasReservadas = suggest(cantidad);
    butacasReservadas.forEach(id => {
        let butaca = document.getElementById(id);        
        butaca.children[0].classList.add('ocupado');
        butaca.children[0].children[0].classList.add('ocupado');        
    });
}


//console.log("Butacas a reservar: ", suggest(8));