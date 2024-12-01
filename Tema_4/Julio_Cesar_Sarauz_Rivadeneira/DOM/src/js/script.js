import { Cinema } from './cinema.js';

// Create a new Cinema instance with 5 rows
const cinema = new Cinema(5);
cinema.occupySeats(new Set([25]));

// Get the seat input element and the seat container
const seat = document.getElementById('input-seats');
const typeSeat = document.querySelector('.sillas');

// Iterate over the rows of seats in the cinema
for (let i = cinema.seats.length - 1; i >= 0; i--) {

    // Create a container for the row of seats
    const seatsDiv = document.createElement('div');
    seatsDiv.setAttribute('class', 'general');

    // Iterate over each seat in the row
    cinema.seats[i].forEach(seat => {
        // Create an image element for the seat
        const seatImage = document.createElement('img');
        const seatDiv = document.createElement('div');

        // Set the seat image to available
        seatImage.src = "../public/image/silla-disponible.png";
        seatDiv.setAttribute('class', 'silla');
        seatDiv.setAttribute('id', seat.id);
        seatDiv.appendChild(seatImage);
        seatsDiv.appendChild(seatDiv);

        // Set the image of the seat with ID 25 to "silla-gris.png"
        if (seat.id === 25) {
            seatImage.src = "../public/image/silla-no-disponible.png";
        }
    })
    // Insert the row of seats into the DOM
    typeSeat.insertAdjacentElement('afterend', seatsDiv);
}

// Add an event listener to update the cinema when the seat input changes
seat.addEventListener('input', () => {
    updateCinema(seat.value);
});

// Function to update the cinema based on the input value
window.updateCinema = (inputValue) => {
    let numSeats = parseInt(inputValue);

    // Reset all seats to the original image, except the seat with ID 25
    cinema.seats.flat().forEach(seat => {
        if (seat.id !== 25) {
            const seatDiv = document.getElementById(seat.id);
            if (seatDiv) {
                const seatImage = seatDiv.querySelector('img');
                if (seatImage) {
                    seatImage.src = "../public/image/silla-disponible.png";
                }
            }
        }
    });

    // Update suggested seats to the selected image
    let suggestedSeats = cinema.suggest(numSeats);
    suggestedSeats.forEach(id => {
        const seatDiv = document.getElementById(id);
        if (seatDiv) {
            const seatImage = seatDiv.querySelector('img');
            if (seatImage) {
                seatImage.src = "../public/image/silla-seleccion.png";
            }
        }
    });
}