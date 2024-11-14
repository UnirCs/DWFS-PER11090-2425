const N = 10;

function setup() {
  let idCounter = 1;
  let seats = [];
  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < N; j++) {
      row.push({id: idCounter++, state: false});
    }
    seats.push(row);
  }
  return seats;
}

function suggest(seats, numSeats) {
  if (numSeats > N) {
    return new Set();
  }
  for (let i = N - 1; i >= 0; i--) {
    let consecutives = [];
    for (let j = 0; j < N; j++) {
      if (!seats[i][j].state) {
        consecutives.push(seats[i][j].id);
        if (consecutives.length === numSeats) {
          return new Set(consecutives);
        }
      } else {
        consecutives = [];
      }
    }
  }
  return new Set();
}

let seats = setup();
//Coloco algunos asientos como ocupados:
seats[9][5].state = true;cd
seats[9][6].state = true;
seats[8][2].state = true;
seats[7][0].state = true;

console.log(suggest(seats, 5));