let butacas=[];
document.addEventListener('DOMContentLoaded', () => {
    asignIdToDiv();
    document.getElementById('num_reserva').addEventListener('change', reserve);
    butacas=setup();
});

function asignIdToDiv() {
    let divs = document.querySelectorAll('.cuadro');

    for(let i=0; i < divs.length; i++) {
        divs[i].id=(i+1).toString();
    }

}

let previousInput=0;
const reserve = () => {
    let input=document.getElementById('num_reserva');
    if(previousInput > input.value && input.value !== 0) {
        cleanSeats();
    }
    let sitios_selected=suggest(input.value)
    console.log(sitios_selected);
    for(let sitio of sitios_selected) {
        let div=document.getElementById(sitio.toString());
        div.className="col cuadro amarillo";

    }
    previousInput=input.value;

};

const FILAS = 5;
const COLUMNAS = 12;

function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < FILAS; i++) {

        let fila = [];
        for (let j = 0; j < COLUMNAS; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    butacas[4][3].estado=true;
    butacas[4][6].estado=true;
    butacas[4][9].estado=true;
    return butacas;
}

function suggest(reservas) {
    reservas=parseInt(reservas);
    let count = 0;
    let set = [];
    for (let i = FILAS - 1; i >= 0 && count !== reservas && reservas <= COLUMNAS; i--) {
        clean(set);
        set = [];
        count = 0;
        for (let j = 0; j < COLUMNAS && count !== reservas; j++) {
            if (!butacas[i][j].estado) {
                set.push(butacas[i][j].id);
                count++;
            } else {
                clean(set);
                set = [];
                count = 0;
            }

        }
    }
    return set;
}

function clean(set){
    for (let asiento of set) {
        let div = document.getElementById(asiento);
        div.className="col cuadro";
    }
}

function cleanSeats(){
    let divs=document.querySelectorAll('.amarillo');
    for (let div of divs) {
        div.className="col cuadro";
    }
}



