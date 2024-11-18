var N = 10

function setup() {
    let idContador = 0
    let butacas = []

    for (let i = 0; i < N; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push({
                id: idContador++,
                estado: false // true: ocupado, false: libre
            })
        }
        butacas.push(fila)
    }
    return butacas
}

let butacas = setup()

const divButacas = document.getElementById('butacas')

function setButacas() {
    let rowCount = 0

    butacas.forEach(fila => {
        const seatsRow = document.createElement('div')
        seatsRow.className = 'seat-row'
        seatsRow.id = `fila-${rowCount}`
        
        divButacas.appendChild(seatsRow)

        fila.forEach(butaca => {
            let seatCount = 0

            const seat = document.createElement('div')
            seat.className = 'seat text-center'
            seat.id = `seat-${butaca.id}`
            seat.textContent = butaca.id
            seatsRow.appendChild(seat)

            seatCount++
        })

        rowCount++
    })
}

setButacas()

const inputAsientos = document.getElementById('inputAsientos')
const btnReservar = document.getElementById('btnReservar')

btnReservar.addEventListener('click', () => {
    const amount = parseInt(inputAsientos.value)
    suggest(amount)
})

function suggest(n) {
    if (n > N || n <= 0) {
        alert(`El número debe estar entre 1 y ${N}`);
        return;
    }

    for (let i = N - 1; i >= 0; i--) {
        let freeSeatsCount = 0
        let freeSeats = []

        butacas[i].forEach((butaca, index) => {
            if (!butaca.estado) {
                freeSeats.push(index)
                freeSeatsCount++
            }
        });

        if (freeSeatsCount >= n) {
            for (let j = 0; j < n; j++) {
                let seatIndex = freeSeats[j]
                butacas[i][seatIndex].estado = true; 
                let seatElement = document.getElementById(`seat-${butacas[i][seatIndex].id}`)
                seatElement.className = 'seat-used text-center'
            }
            break
        } else {
            n -= freeSeatsCount
        }
    }
}


