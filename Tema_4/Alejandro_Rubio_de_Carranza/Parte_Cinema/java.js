'use strict'


    // Definir el tamaño de la matriz de butacas
    const N = 8; // Número de filas y columnas
 
// Esperar a que el DOM esté completamente cargado

document.addEventListener('DOMContentLoaded', () => {

    // Obtener referencias a los elementos
    const boton = document.getElementById('aplicarCambios');
    const elementos = document.querySelectorAll('.Casilla');

    boton.addEventListener('click', function() {

        // Obtener el numero de asientos 

         const asientos = parseInt(document.getElementById('asientos').value);

        // Alertas de asientos invalidos

           if (isNaN(asientos) || asientos < 1 || asientos > N) {
               alert(`Por favor, introduce un número entre 1 y ${N}.`);
               return;
        }

        // Cambiar el color de los elementos seleccionados

        for (let i = (elementos.length)-1; i >= ((elementos.length)-asientos); i--) {

              elementos[i].style.backgroundColor = "#fcfc00";
         }

    });

});
