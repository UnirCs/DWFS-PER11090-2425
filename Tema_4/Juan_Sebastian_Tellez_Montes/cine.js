const N = 10;

function setup() {
    let idContador = 1;
    let butacas = [];
    let table = document.getElementById('tabla_butaca').getElementsByTagName('tbody')[0];
    for (let i = 0; i < N; i++) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const cellFila = document.createTextNode("Fila"+(i+1));
        td.className="fila";
        td.appendChild(cellFila);
        tr.appendChild(td);

        let fila = [];
        let ocupada = false;
        for (let j = 0; j < N; j++) {

            let idButaca = idContador++;
            ocupada = idButaca === (N*N);

            fila.push({
                id: idButaca,
                estado: ocupada
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

let butacas = setup();

function suggest(num_seats) {

    let selected_seats = new Set();
    let found = true

    if (num_seats > N) {
        console.log(selected_seats)

       alert("No se pueden reservar más de 10 butacas");
    }

        const div = Array.from(document.querySelectorAll('div.butaca--seleccionada'));
        div.forEach(row => {
            row.classList.remove('butaca--seleccionada');
        });

    for (let i = N - 1; i >= 0; i--) { 
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

    for (let idButaca of selected_seats) {
        let butaca = document.getElementById('butaca_'+idButaca);
        butaca.classList.add('butaca--seleccionada');
    }
    console.log(selected_seats)
}

document.getElementById('num_seats').addEventListener('input', function (event) {
    event.preventDefault();
    suggest(parseInt(this.value))
});

