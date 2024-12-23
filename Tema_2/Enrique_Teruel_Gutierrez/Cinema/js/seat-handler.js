class SeatHandler {
  constructor(size, containerSelector) {
    this.size = size;
    this.container = document.querySelector(containerSelector);
    this.seats = this.createSeats();
    this.renderSeats();
  }

  createSeats() {
    return Array.from({ length: this.size }, (_, i) =>
      Array.from({ length: this.size }, (_, j) => ({
        row: String.fromCharCode(65 + i),
        column: j + 1,
        id: `${String.fromCharCode(65 + i)}${j + 1}`,
        available: true,
      }))
    );
  }

  renderSeats() {
    this.seats.forEach((row) => {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
      row.forEach(({ id }) => {
        const seatElement = document.createElement("div");
        seatElement.classList.add("seat");
        seatElement.id = id;
        rowElement.appendChild(seatElement);
      });
      this.container.appendChild(rowElement);
    });
  }

  findSeats(number) {
    if (number > this.size) {
      alert(`No se pueden reservar más de ${this.size} asientos a la vez`);
      return new Set();
    }

    let foundSeats = new Set();
    let stopSearch = false;

    for (let i = this.seats.length - 1; i >= 0 && !stopSearch; i--) {
      let consecutiveSeats = new Set();
      let count = 0;

      for (let j = 0; j < this.seats[i].length && !stopSearch; j++) {
        const seat = this.seats[i][j];

        if (seat.available) {
          consecutiveSeats.add(seat.id);
          count++;

          if (count === number) {
            consecutiveSeats.forEach((seatId) => {
              const row = seatId[0];
              const column = parseInt(seatId.slice(1), 10);
              this.markSeatAsReserved(row, column);
            });

            foundSeats = consecutiveSeats;
            stopSearch = true;
          }
        } else {
          consecutiveSeats.clear();
          count = 0;
        }
      }
    }

    if (foundSeats.size === 0) {
      alert("No hay suficientes asientos consecutivos disponibles.");
    }

    return foundSeats;
  }

  markSeatAsReserved(row, column) {
    const seat = this.seats[row.charCodeAt(0) - 65][column - 1];
    if (seat) {
      seat.available = false;
      const seatElement = document.getElementById(seat.id);
      if (seatElement) {
        seatElement.classList.add("seat__selected");
      }
    }
  }
}
