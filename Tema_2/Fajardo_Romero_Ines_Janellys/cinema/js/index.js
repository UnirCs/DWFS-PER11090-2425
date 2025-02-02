
const filas = 5;
const columnas = 14;

function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
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

function suggest(numeroAsientos) {
    let asientosOcupados = new Set([]);
    let encontrado = false;

    let fila = 0;
    while (fila < butacas.length && !encontrado) {
        let asientosFila = butacas[fila];
        if (asientosFila.length >= numeroAsientos) {
            let asientosDisponibles = butacas[fila].filter(asientos => !asientos.estado).length;
            if (asientosDisponibles >= numeroAsientos) {
                let asientosSeleccionados = 0;
                let columna = 0;

                while (columna < asientosFila.length && asientosSeleccionados < numeroAsientos) {
                    let asiento = asientosFila[columna];
                    if (!asiento.estado) {
                        asiento.estado = true;
                        asientosOcupados.add(asiento.id);
                        asientosSeleccionados++;
                    }
                    columna++;
                }
                encontrado = true;
            }
        }
        fila++;
    }

    return encontrado ? asientosOcupados : new Set();
}





console.log(suggest(14));
console.log(suggest(14));
console.log(suggest(14));
console.log(suggest(14));
console.log(suggest(12));
console.log(suggest(5));


