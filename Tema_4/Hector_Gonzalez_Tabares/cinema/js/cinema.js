// Definir el tamaño de la matriz de butacas
const N = 7; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    let table = document.getElementById('tabla_butaca').getElementsByTagName('tbody')[0];
    for (let i = 0; i < N; i++) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const cellFila = document.createTextNode("Fila"+(i+1));
        td.className="fila";
        td.appendChild(cellFila);
        tr.appendChild(td);
        // Nueva fila
        let fila = [];
        let ocupada = false;
        for (let j = 0; j < N; j++) {

            let idButaca = idContador++;
            ocupada = idButaca === (N*N);
            // Nuevo asiento
            fila.push({
                id: idButaca,
                estado: ocupada // Estado inicial libre
            });
            const tdButaca = document.createElement("td");
            const divButaca = document.createElement("div");
            divButaca.id = "butaca_"+(idButaca);

            if(idButaca === (N*N)){
                divButaca.className="butaca--reservada";
            }else{
                divButaca.className="butaca";
            }

            tdButaca.appendChild(divButaca);
            tr.appendChild(tdButaca);
        }
        butacas.push(fila);
        table.appendChild(tr);
    }
    return butacas;
}

// Inicializar la matriz de butacas
let butacas = setup();

// Función para sugerir asientos disponibles
function suggest(num_seats) {

    let selected_seats = new Set();
    let found = true
    // Si el número de asientos solicitados excede el tamaño máximo de la fila, devolver un set vacío
    if (num_seats > N) {
        console.log(selected_seats)
       // return selected_seats;
    }
    //inicializo toas las butacas seleccionada
        const div = Array.from(document.querySelectorAll('div.butaca--seleccionada'));
        div.forEach(row => {
            row.classList.remove('butaca--seleccionada');
        });

    // Encontrar asientos disponibles
    for (let i = N - 1; i >= 0; i--) { // Comenzar desde la última fila (la más lejana a la pantalla)
        let consecutive_count = 0;
        let available_seats = [];
        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                consecutive_count++;
                available_seats.push(butacas[i][j].id);
                if (consecutive_count === num_seats && found===true) {
                    selected_seats = new Set(available_seats);
                    found = false
                 }
            } else {
                consecutive_count = 0;
                available_seats = [];
            }
        }
    }

    //seleccionada las butacas de acuerdo al numero de asiento disponible
    for (let idButaca of selected_seats) {
        let butaca = document.getElementById('butaca_'+idButaca);
        butaca.classList.add('butaca--seleccionada');
    }
    console.log(selected_seats)
   // return selected_seats;
}

//setup();
//console.log(setup());
document.getElementById('num_seats').addEventListener('input', function (event) {
    event.preventDefault();
    suggest(parseInt(this.value))
});

