const reservationSystem = new SeatHandler(7, ".seats-container");
document.addEventListener("seats-reserved", ({ detail: { count } }) => {
  const seats = reservationSystem.findSeats(count);
  if (seats.size > 0) {
    alert(`Asientos reservados: ${[...seats].join(", ")}`);
  }
});
