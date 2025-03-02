
const filas = 5;
const columnas = 14;

function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            if( j === 13){
                fila.push({
                    id: 0,
                    estado: false
                });
            }
            fila.push({
                id: idContador++,
                estado: false
            });
        }
        butacas.push(fila);
    }
    return butacas.reverse();
}

let butacas = setup();

function suggest() {
    let numeroAsientos = document.getElementById("num_asientos").value;
    let asientosOcupados = new Set([]);
    let encontrado = false;

    for (let fila = 0; fila < butacas.length && !encontrado; fila++) {
        if(butacas[fila].length - 1 >= numeroAsientos ) {
            let numeroAsientosDesOcupados = butacas[fila].filter(asientos => !asientos.estado).length;
            if(numeroAsientosDesOcupados  >= numeroAsientos ){
                let asientosSeleccionados = 0;
                for(let column = 0; column < butacas[fila].length  && asientosSeleccionados < numeroAsientos; column++) {
                    if(!butacas[fila][column].estado && butacas[fila][column].id !== 0){
                        butacas[fila][column].estado = true;
                        asientosOcupados.add(butacas[fila][column].id);
                        asientosSeleccionados++;
                    }
                }
                encontrado = true;
            }
        }
    }

    if (!encontrado) {
        return new Set();
    }
    console.log(asientosOcupados);
}





