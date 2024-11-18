const MatixDimension = 10;

function MatrixStart(){
    let butacas=[];
    let idFila=1;
    for(let i=0;i<MatixDimension;i++){
        let idButaca = 1;
        let fila = [];
        for(let j=0;j<MatixDimension;j++){
            fila.push({
                id: idButaca++,
                estado: false
            });
        }
        butacas.push({fila,idFila});
        idFila++;
    }
    return butacas;
}
let butacas = MatrixStart();
let reserva={filaReserva : 0, asientosReserva:[]};

SelectSeats(5);
SelectSeats(6);
SelectSeats(2);
SelectSeats(1);
SelectSeats(3);
SelectSeats(8);
SelectSeats(8);
SelectSeats(8);


function  SelectSeats(number=0){
    if(CheckAvailability(number)){
        console.log("Su reserva coresponde a la fila "+reserva.filaReserva+" Butacas "+ reserva.asientosReserva);


    }else {
        console.log("Lo sentimos no hay asientos");
    }
}

function CheckAvailability(number = 0) {
    let found = false; 

    for (let i = butacas.length - 1; i >= 0 && !found; i--) {
        const fila = butacas[i];
        let seatFree = 0;
        let tempReservas = [];

        for (let j = 0; j < fila.fila.length; j++) {
            const seat = fila.fila[j];

            if (seat.estado === false) {
                seatFree++;
                tempReservas.push(seat.id);

                if (seatFree === number) {
                    found = true;
                    reserva.filaReserva = fila.idFila;
                    reserva.asientosReserva = [...tempReservas];
                }
            } else {

                seatFree = 0;
                tempReservas = [];
            }
        }

        // Actualizar estado de los asientos si ya encontramos
        if (found) {
            for (let id of reserva.asientosReserva) {
                const asiento = fila.fila.find(s => s.id === id);
                if (asiento) {
                    asiento.estado = true;
                }
            }
        }
    }

    return found;
}
