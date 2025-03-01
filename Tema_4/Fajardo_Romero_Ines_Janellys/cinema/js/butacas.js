
const filas = 5;
const columnas = 14;

function setup() {
    let idContador = 1;
    let butacas = [];
    let asientos = document.getElementById("butacas");
    let html = "";

    for (let i = 0; i < filas; i++) {
        html += `    
        <div class="row">
            <div class="col-10">
                <div class="row">
                    <div class="col-1 p-3 fila-desc">Fila ${i + 1}</div>
                    <div class="col-11">
                        <div class="row">`;

        let fila = [];

        for (let j = 0; j < columnas; j++) {
            if(j <= 11){
                html += `<div class="col p-3" id="${idContador}">${j + 1}</div>`
            }
            if (j === 11) {
                html += `
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-9">
                        <div class="row">`;
            }
            if (j > 11) {
                html += `<div class="col p-3" id="${idContador}">${j + 1}</div>`;
            }
            fila.push({
                id: idContador,
                estado: false
            });
            idContador++;
        }

        html += `     </div>
                    </div>
                </div>
            </div>
        </div>`;
        butacas.push(fila);
    }
    asientos.innerHTML = html;
    return butacas.reverse();
}

let butacas = setup();

function suggest() {
    let numeroAsientos = parseInt(document.getElementById("num_asientos").value);
    let encontrado = false;

    for (let fila = 0; fila < butacas.length && !encontrado; fila++) {
        if(butacas[fila].length >= numeroAsientos ) {
            let numeroAsientosDesOcupados = butacas[fila].filter(asientos => !asientos.estado).length;
            if (numeroAsientosDesOcupados >= numeroAsientos) {
                let asientosSeleccionados = 0;
                for (let column = 0; column < butacas[fila].length && asientosSeleccionados < numeroAsientos; column++) {
                    if (!butacas[fila][column].estado) {
                        let asientos = document.getElementById(butacas[fila][column].id);
                        butacas[fila][column].estado = true;
                        asientos.className += ' butacas_escogidas';
                        asientosSeleccionados++;
                    }
                }
                encontrado = true;
            }
        }

    }

    if (!encontrado) {
        removerAsiento();
        butacas = setup();
        return new Set();
    }
}

const removerAsiento = () => {
    let asientos = Array.from(document.getElementsByClassName('butacas_escogidas'));
    for(let i = 0; i < asientos.length; i++){
        asientos[i].classList.remove('butacas_escogidas');
    }
}

document.getElementById("button_reserva").addEventListener("click", suggest);