const MAX_FILAS = 10;
const MAX_COLUMNAS = 10;

function setup() {
    let butacas = [];
    let idContador = 1;

    for (let i = 0; i < MAX_FILAS; i++) {
        let fila = [];
        for (let j = 0; j < MAX_COLUMNAS; j++) {
            fila.push({
                id: idContador++,
                estado: false
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(numeroButacas){
    if(typeof numeroButacas != "number") throw new Error("El argumento debe ser un número");
    butacasSugeridas = [];

    for (let i = 0; i < butacas.length; i++) {
        let butacaRevisadaID = null;
        let butacasJuntasEnFila = [];
        for (let butaca of butacas[i]) {
            if(butaca.estado === false){
                if(butacaRevisadaID === null){
                    butacasJuntasEnFila.push(butaca.id);
                    butacaRevisadaID = butaca.id;
                }else if(butaca.id === butacaRevisadaID + 1){
                    butacasJuntasEnFila.push(butaca.id);
                    butacaRevisadaID = butaca.id;
                }else{
                    butacasJuntasEnFila = [];
                    butacaRevisadaID = null;
                }
            }else{
                butacasJuntasEnFila = [];
                butacaRevisadaID = null;
            }

            if(butacasJuntasEnFila.length >= numeroButacas){
                butacasSugeridas = butacasJuntasEnFila.slice(-numeroButacas);
            }
        }
    }
    return butacasSugeridas;
}

function printButacas(butacas) {
    for (let i = 0; i < butacas.length; i++) {
        let fila = "";
        for (let j = 0; j < butacas[i].length; j++) {
            fila += butacas[i][j].estado ? "X" : "O";
        }
        console.log(fila);
    }
}

// SETUP
let butacas = setup();
printButacas(butacas);

// TESTING SCENARIO 1
for(let i = 1; i < butacas.length; i++){
    for(let j = 0; j < butacas[i].length; j++){
        if(j % 4 === 0){
            butacas[i][j].estado = true;
        }
    }
}
butacas[0][5].estado = true;

printButacas(butacas);

console.log(suggest(3)); //[96, 97, 98] in last row
console.log(suggest(4)); //Last 4 seats in the first row
console.log(suggest(5)); //First 5 seats in the first row
console.log(suggest(6)); //No seats