import { Cinema } from './cinema.js';

// Create a new Cinema instance with 5 rows
const cinema = new Cinema(5);
console.log("Cinema instance created");

window.updateCinema = (inputValue) => {
    console.log(`Number of seats to reserve ${inputValue}`);

    // Change the input value to an integer
    let numSeats = parseInt(inputValue);

    if (numSeats <= 0) {
        console.log("Choose a number of seats to reserve");
    } else if (numSeats > cinema.size) {
        console.log("Number of seats exceeds the seats size");
    } else {
        let suggestedSeats = cinema.suggest(numSeats);
        console.log(suggestedSeats);
    }
}