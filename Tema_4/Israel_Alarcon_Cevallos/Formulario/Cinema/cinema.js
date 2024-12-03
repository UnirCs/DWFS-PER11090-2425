// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas
const M = 4; // numero de columnas
let divs = document.querySelectorAll('.seat');

function inicio(){
    asignIdToDiv(divs);
}


// Función para escoger los asientos de las reservas
function reserva(asientos)
{
    let j= N;
    let ids = divs.length - 2;
    let cont = 0;

    inicio();
    for (let i = M - 1; i > 0; i--) {
            while (j > 0) {
                j = j - 1;
                if (!divs[ids].estado && cont < asientos) {
                    cont = cont + 1;
                    divs[ids].estado = true;
                    divs[ids].className = "seat_occupied";
                }
                ids = ids - 1;
            }
    }
}

function asignIdToDiv(divs) {
    for(let i=0; i < divs.length; i++) {
        divs[i].id=(i).toString();
        if (divs[i].id === "39"){
            divs[i].className = "seat_occupied";
            divs[i].estado = true;
        }
        else {
            divs[i].className = "seat";
            divs[i].estado = false;
        }
    }
}
