
let seats = [];
document.addEventListener('DOMContentLoaded', () => {
    // Get the seats and add an id to each one.
    let row = [];
    let cont = 0;
    document.querySelectorAll('.seats__seat, .seats__seat__reserved, .seats__seat__occupied').forEach((seat, index) => {
        seat.id = index;
        row.push(seat);
        cont++;

        if(cont-1 === 12){
            seats.push(row);
            row = [];
            cont = 0;
        }
    });

    document.getElementById('reservSeats').addEventListener('input', () => {
        let value = document.getElementById('reservSeats').value;
        reserveSeats(suggest(value));
    });
});


function suggest(n){

    if (n > seats[0].length){                //Check if there are enough seats
        return new Set();
    }

    //********VARIABLES*********//
    let contSeats = new Set();
    let rows = seats.length - 1;
    let found = false;
    //**************************//

    while (rows >= 0 && !found) {
        //New row
        contSeats.clear();
        let columns = seats[rows].length - 1;
        
        while (columns >= 0 && !found) {
            //New seat
            if(seats[rows][columns].getAttribute("class") != "seats__seat__occupied"){           //If seat is avaliable, add it to the set
                contSeats.add(seats[rows][columns].id);

                if(contSeats.size == n){
                    found = true;
                    console.log(found);
                }
            }else{
                contSeats.clear();          //If seat is occupied, clear the set
            }
            columns--;
        }
        rows--;
    }

    if(contSeats.size != n) contSeats.clear();         //The last seats in the first row are chosen but no the desired amount

    return contSeats
}

function reserveSeats(seatsIdList){

    //Reset all seats
    document.querySelectorAll('.seats__seat__reserved').forEach((seat) => {
        seat.setAttribute("class", "seats__seat");
    });

    //Reserve the seats
    seatsIdList.forEach((seatId) => {
        document.getElementById(seatId).setAttribute("class", "seats__seat__reserved");
    });
}
