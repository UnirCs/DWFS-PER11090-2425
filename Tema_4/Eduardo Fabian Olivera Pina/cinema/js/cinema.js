// variables declaradas en el ambito global
const N = 6; // Número de filas y columnas
let seats = [];

  // Función para inicializar la matriz de butacas
  function setup() {
      let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
      let butacas = [];
  
      for (let i = 0; i < N; i++) {
          // Nueva fila
          let fila = [];
          for (let j = 0; j < N; j++) {
              // Nuevo asiento
              fila.push({
                  id: idContador++,
                  estado: false // Estado inicial libre
                  //presel: false  // Si esta preseleccionada
              });
          }
          butacas.push(fila);
      }
      return butacas;
  }

  // Genera los id de las butacas en el HTML
  function idsGenerate() {
    // Obtengo todos los elementos con la clase "seat"
    const seatsHtml = document.querySelectorAll(".seat");

    seatsHtml.forEach((seat, index) => {
      const seatId = `r${index + 1}`;
      seat.setAttribute("id", seatId);
    });
  }
  
  function suggest(seats, numberOfSeats) {
    const seatIds = new Set();
    let foundSeats = false; // Si se encontraron los asientos consecutivos
  
    // Si el número de asientos solicitados excede el tamaño máximo de la fila, devolver set vacío
    if (numberOfSeats > N) return new Set();
  
    // itera partiendo desde la última fila
    for (let row = N - 1; row >= 0 && !foundSeats; row--) {
  
      seatIds.clear();  // limpiar los IDs de asientos previos
  
      // Recorre cada asiento en la fila actual
      for (let seat = 0; seat < N && !foundSeats; seat++) {
  
        // Si el asiento está libre
        if (seats[row][seat].estado === false) {
          seatIds.add(seats[row][seat].id);  // agrega su id al set        
          if (seatIds.size === numberOfSeats) { // si se encontraron los asientos consecutivos que se buscaban
            foundSeats = true;
          }
  
        } else {
          seatIds.clear(); // Asiento ocupado, inicializa el Set
        }
      }
    }
    return foundSeats ? seatIds : new Set();  
  }
  
  function reserveSeat(seats, idSeat) {
    let seatReserved  = false
    for (let i = 0; i < N && !seatReserved ; i++) {
      for (let j = 0; j < N && !seatReserved ; j++) {
        if (seats[i][j].id === idSeat) {
          seats[i][j].estado = true;
          seatReserved  = true;
        }
      }
    }
    return seatReserved ;
  }
  
  function confirmReservation() {
    const numSeats = parseInt(document.getElementById("num-seats").value);
    if (isNaN(numSeats) || numSeats <= 0) return;    
    const free = suggest(seats, numSeats);
    
    if (free.size === 0) {
      alert(`No se encontraron ${numSeats} asientos contiguos.`)
      return;
    }
    
    // Establece las reservas
    let seatElement;
    free.forEach((id) => {
      if (reserveSeat(seats, id)) {
        seatElement = document.getElementById("r"+id.toString());
        if (seatElement) {
          seatElement.className = "seat reserved";
        } else {
            console.error(`No se encontró el asiento con id: r${id}`);
        }   
      } else {
        console.error(`No se encontró el asiento con id: ${id}`);
      }
    });
    //console.log(seats);
  }

  function preselection(numSeats) {
    const freeSeats = suggest(seats, Number(numSeats));
    clearPreselection();
     
    let seatElement;
    freeSeats.forEach((id) => {
        seatElement = document.getElementById("r"+id.toString());
        if (seatElement) {
          seatElement.className = "seat preselected";
        } else {
            console.error(`No se encontró el asiento con id: r${id}`);
        }   
    });
  }

  function clearPreselection() {
    seats.forEach( row =>  {
      row.forEach(seat => {
        seatElement = document.getElementById("r"+seat["id"].toString());
        if (seatElement) {
          if (seatElement.className === "seat preselected") {
            seatElement.className = "seat";
          }
        } else {
            console.error(`No se encontró el asiento con id: r${row}`);
        }   
      });
      
    });
  }


// Pagina cargada completamente
window.onload = function () {
  seats = setup(); // carga matriz de asientos
  idsGenerate();  // genera los id para cada asiento en el HTML

  // Asignar evento al input con id=num-seats
  document.getElementById('num-seats').addEventListener('input', function() {
    preselection(this.value);
  });
  
  // Asignar evento al boton con id = "confirm".
  document.getElementById("confirm").onclick = confirmReservation;

}

// DOM cargado completamente
/*document.addEventListener("DOMContentLoaded", function() {
  seats = setup(); // carga matriz de asientos
  idsGenerate();  // genera los id para cada asiento en el HTML

  // Asignar evento al boton con id = "confirm".
  document.getElementById("confirm").onclick = confirmReservation;

 }
);*/

