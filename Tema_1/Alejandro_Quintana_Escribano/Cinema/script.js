document.addEventListener("DOMContentLoaded", function() {
    const seatsContainer = document.getElementById("seatsContainer");
    const totalSeats = 100; // 10 filas x 10 columnas
    const occupiedSeats = Math.floor(totalSeats * 0.2); // 20% ocupados

    // Generar asientos y asignar ocupación aleatoria
    let seatsArray = Array(totalSeats).fill("free").map((seat, index) => {
        return { id: index + 1, status: "free" };
    });

    for (let i = 0; i < occupiedSeats; i++) {
        const randomIndex = Math.floor(Math.random() * totalSeats);
        if (seatsArray[randomIndex].status === "free") {
            seatsArray[randomIndex].status = "occupied";
        }
    }

    // Crear los elementos de asiento en el DOM
    seatsArray.forEach(seat => {
        const seatElement = document.createElement("div");
        seatElement.classList.add("seat");
        if (seat.status === "occupied") {
            seatElement.classList.add("occupied");
        }
        seatElement.innerText = seat.id;
        seatsContainer.appendChild(seatElement);
    });
});

function confirmSeats() {
    const numSeats = document.getElementById("numSeats").value;
    alert(`Ha seleccionado ${numSeats} asiento(s).`);
}