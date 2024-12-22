const reservationSystem = new SeatHandler(7, ".seats-container");
document.addEventListener("seats-reserved", ({ detail: { count } }) => reservationSystem.findSeats(count)
);
