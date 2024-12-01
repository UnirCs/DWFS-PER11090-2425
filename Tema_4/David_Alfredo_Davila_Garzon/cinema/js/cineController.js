const N = 10;
let seats = [];
let currentSuggestion = new Set();

//Simula asientos ocupados previamente
function preoccupySeats() {
  const preoccupiedSeats = [
    {row:9, col:3}, {row:9, col:4}, {row:9, col:5}, //Tres asientos en la primera fila
    {row:8, col:6}, {row:8, col:7}, {row:8, col:8}, {row:8, col:9}//Cuatro asientos en la segunda fila
  ];

  preoccupiedSeats.forEach(({row, col}) => {
    if (seats[row] && seats[row][col]) {
      seats[row][col].state = true;
    }
  });
}

function setup() {
  let idCounter = 1;
  seats = [];
  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < N; j++) {
      row.push({id: idCounter++, state: false}); //false -> libre
    }
    seats.push(row);
  }
  preoccupySeats();
  createSeatsUI();
}

function createSeatsUI() {
  const container = document.getElementById('seatsContainer');
  container.innerHTML = '';

  for (let i = 0; i < N; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'seat-row';

    const rowLabel = document.createElement('div');
    rowLabel.className = 'row-label';
    rowLabel.textContent = `F ${N - i}`;
    rowDiv.appendChild(rowLabel);

    for (let j = 0; j < N; j++) {
      const seat = document.createElement('div');
      seat.className = 'seat';
      seat.dataset.id = seats[i][j].id;
      seat.dataset.row = i;
      seat.dataset.col = j;

      if (seats[i][j].state) {
        seat.classList.add('occupied');
      }

      rowDiv.appendChild(seat);
    }
    container.appendChild(rowDiv);
  }
}

function findConsecutiveSeats(row, numSeats) {
  let consecutives = [];
  let bestConsecutives = [];
  let i = 0;

  while (i < N && bestConsecutives.length < numSeats) {
    if (!row[i].state) {
      consecutives.push({id: row[i].id, position: i});
      if (consecutives.length === numSeats) {
        bestConsecutives = [...consecutives];
      }
    } else {
      consecutives = [];
    }
    i++;
  }

  return bestConsecutives;
}

function suggest(numSeats) {
  clearSuggestions();

  if (numSeats > N || numSeats <= 0) {
    return new Set();
  }

  let result = [];
  let i = N - 1;
  let found = false;
  let rowFound = -1;

  while (i >= 0 && !found) {
    const foundSeats = findConsecutiveSeats(seats[i], numSeats);
    if (foundSeats.length === numSeats) {
      result = foundSeats;
      rowFound = i;
      found = true;
    }
    i--;
  }

  if (found && rowFound !== -1) {
    const suggestedSeats = new Set(result.map(seat => seat.id));
    suggestedSeats.forEach(seatId => {
      const seatElement = document.querySelector(`[data-id="${seatId}"]`);
      if (seatElement) {
        seatElement.classList.add('suggested');
      }
    });
    currentSuggestion = suggestedSeats;
    return suggestedSeats;
  }

  return new Set();
}

function clearSuggestions() {
  document.querySelectorAll('.seat.suggested').forEach(seat => {
    seat.classList.remove('suggested');
  });

  if (currentSuggestion.size > 0) {
    currentSuggestion.forEach(seatId => {
      const row = Math.floor((seatId - 1) / N);
      const col = (seatId - 1) % N;
      if (seats[row] && seats[row][col]) {
        seats[row][col].state = false;
      }
    });
    currentSuggestion = new Set();
  }
}

function handleSeats(value) {
  let numSeats = parseInt(value);

  if (!isNaN(numSeats)) {
    suggest(numSeats);
  } else {
    clearSuggestions();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setup();

  const numSeatsInput = document.getElementById('numSeats');
  numSeatsInput.addEventListener('input', function(e) {
    handleSeats(e.target.value);
  });
});
