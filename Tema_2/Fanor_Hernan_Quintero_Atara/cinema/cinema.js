class Seat {
    /**
     * Class to create seats.
     * @param {number} id - Unique identifier for the seat.
     * @param {boolean} state - The state of the seat, where false = available and true = occupied.
     */
    constructor(id, state = false) {
        this.id = id;     // Stores the unique identifier of the seat.
        this.state = state; // State of the seat, where false = available and true = occupied.
    }
}

class Cinema {
    /**
     * Class to create a cinema hall.
     * @param {number} size - The size of the cinema hall (number of rows/columns).
     */
    constructor(size) {
        this.size = size;
        this.seats = this.createSeats();
    }

    createSeats() {
        let idCounter = 1;
        let seats = [];
        for (let i = 0; i < this.size; i++) {
            let row = [];
            for (let j = 0; j < this.size; j++) {
                row.push(new Seat(idCounter++, false));
            }
            seats.push(row);
        }
        return seats;
    }

    printSeats() {
        this.seats.forEach(row => {
            console.log(row.map(seat => `${seat.id}`));
        });
    }

    /**
     * Searches for a number of consecutive available seats in the hall.
     * @param {number} numSeats - Number of seats to reserve.
     * @returns {Set} - A set with the IDs of the selected seats, or an empty set if not enough seats are available.
     */
    suggest(numSeats) {
        // If the requested number of seats exceeds the size of the row, return an empty set
        if (numSeats > this.size) return new Set();

        // Loop through the rows from back to front
        for (let i = this.size - 1; i >= 0; i--) {
            let row = this.seats[i];
            let availableSeats = [];

            // Search for consecutive available seats
            for (let j = 0; j < this.size; j++) {
                if (!row[j].state) {
                    availableSeats.push(row[j].id);
                    // If enough consecutive available seats are found, return a set with the seat IDs
                    if (availableSeats.length === numSeats) {
                        return new Set(availableSeats);
                    }
                } else {
                    // If an occupied seat is found, restart the search
                    availableSeats = [];
                }
            }
        }

        // If not enough consecutive seats are found, return an empty set
        return new Set();
    }
}


// Create a 5x5 cinema hall
const cinema = new Cinema(5);

// Show the initial seats
cinema.printSeats();

// Try to reserve 3 seats
let suggestedSeats = cinema.suggest(3);
console.log("Suggested seats for booking 3:", suggestedSeats);

// Try to reserve 6 seats (more than there are in a row)
suggestedSeats = cinema.suggest(6);
console.log("Suggested seats for booking 6:", suggestedSeats);
