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

    /**
     * Creates a grid of seats with unique IDs and initial state set to available (false).
     * @returns {Array} - A 2D array representing rows of seats in the cinema.
     */
    createSeats() {
        let idCounter = 1;
        let seats = [];
        for (let i = 0; i < this.size; i++) {
            let row = [];
            for (let j = 0; j < this.size; j++) {
                row.push(new Seat(idCounter++, false)); // Create each seat with a unique ID and available state
            }
            seats.push(row); // Add the entire row to the seats array
        }
        return seats;
    }

    /**
     * Prints the current state of the cinema seats to the console.
     */
    printSeats() {
        this.seats.forEach(row => {
            console.log(row.map(seat => `id: ${seat.id}, state: ${seat.state ? 'Occupied' : 'Available'}`));
        });
    }

    /**
     * Searches for a specified number of consecutive available seats in the cinema.
     * @param {number} numSeats - The number of seats to reserve.
     * @returns {Set} - A set of seat IDs if a consecutive block is found, or an empty set if not.
     */
    suggest(numSeats) {
        if (numSeats > this.size) return new Set(); // Return an empty set if the request exceeds row size

        let suggestedSeats = new Set();
        let found = false;

        // Loop through rows from back to front
        for (let i = this.size - 1; i >= 0 && !found; i--) {
            let row = this.seats[i];
            let availableSeats = [];

            // Search for consecutive available seats in the row
            for (let j = 0; j < this.size; j++) {
                if (!row[j].state) {
                    availableSeats.push(row[j].id);

                    // If the required number of consecutive seats is found, store and set flag
                    if (availableSeats.length === numSeats) {
                        suggestedSeats = new Set(availableSeats);
                        found = true;
                    }
                } else {
                    // Reset the search if an occupied seat is encountered
                    availableSeats = [];
                }
            }
        }

        return suggestedSeats; // Return the suggested seats or an empty set if no block is found
    }

    /**
     * Marks specified seats as occupied by their IDs.
     * @param {Set} seatIds - Set of seat IDs to be marked as occupied.
     */
    occupySeats(seatIds) {
        seatIds.forEach(id => {
            for (let row of this.seats) {
                let seat = row.find(seat => seat.id === id);
                if (seat) {
                    seat.state = true;
                }
            }
        });
    }
}

// Create a 5x5 cinema hall
const cinema = new Cinema(5);

// Show the initial seats
console.log("Initial seat arrangement:");
cinema.printSeats();

// Occupy some specific seats
cinema.occupySeats(new Set([21, 23, 25, 13, 14]));

// Show the seats after marking some as occupied
console.log("\nSeat arrangement after occupying some seats:");
cinema.printSeats();

// Try to suggest 3 consecutive seats
let suggestedSeats = cinema.suggest(3);
console.log("\nSuggested seats for booking 3:", suggestedSeats);

// Try to reserve 6 seats (more than there are in a row)
suggestedSeats = cinema.suggest(6);
console.log("Suggested seats for booking 6:", suggestedSeats); 
