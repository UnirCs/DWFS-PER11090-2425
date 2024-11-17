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
    for (let i = butacas.length - 1; i >= 0; i--) {
        const fila = butacas[i];
        let seatFree = 0;
        reserva.asientosReserva = [];


        for (const seat of fila.fila) {
            if (seat.estado === false) {
                seatFree++;
                reserva.asientosReserva.push(seat.id);


                if (seatFree === number) {
                    reserva.filaReserva = fila.idFila;
                    for (let k = reserva.asientosReserva.length - 1; k >= 0; k--) {
                        const asiento = fila.fila.find(s => s.id === reserva.asientosReserva[k]);
                        if (asiento) {
                            asiento.estado = true;
                        }
                    }
                    return true;
                }
            } else {
                seatFree = 0;
                reserva.asientosReserva = [];
            }
        }
    }
    return false;
}
