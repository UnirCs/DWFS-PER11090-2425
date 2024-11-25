class Seat {
	/**
	 * Seat constructor
	 * @param {number} id the seat id
	 * @param {boolean} status the status is represented by a boolean, true if the seat is taken, false if it is free
	 */
	constructor(id, status = false) {
		this.id = id
		this.status = status
	}
}

class Row {
	/**
	 * Cinema row constructor
	 * @param {string} id the row id, e.g: A, B, C, etc.
	 * @param {Array<Seat>} seats seats of the row
	 */
	constructor(id, seats) {
		this.id = id
		this.seats = seats
	}

	get isFull() {
		return this.availableSeats.length === 0
	}

	get availableSeats() {
		return structuredClone(this.seats.filter((seat) => !seat.status))
	}
}

class Cinema {
	/**
	 * Cinema constructor
	 * @param {number} id the id of the cinema
	 * @param {Array<Row>} rows the rows of the cinema
	 */
	constructor(id, rows) {
		this.id = id
		this.rows = rows
	}

	get isFull() {
		return this.rows.every((row) => row.isFull)
	}

	/**
	 * Find for a row with available seats
	 * @param numberOfSeats
	 * @returns {Row}
	 */
	findRowWithFreeSeats(numberOfSeats) {
		return this.rows
			.toReversed()
			.find((row) => row.availableSeats.length >= numberOfSeats)
	}

	/**
	 * Pre reserve a number of seats.
	 * @param {number} numberOfSeats number of seats to reserve
	 * @param {Row} row the row with available seats
	 * @returns {Array<Seat>} with the pre reserved seats
	 */
	preReserveSeats(numberOfSeats, row) {
		const seatsToReserve = row.seats
			.filter((seat) => !seat.status)
			.slice(-numberOfSeats)
			.map((seat) => {
				seat.status = true
				return seat
			})

		console.log(
			`Pre reserved ${seatsToReserve.length} seats in cinema: ${this.id}`
		)

		return seatsToReserve
	}

	/**
	 * Confirm the seats reservation
	 * @param {Row} row the row with new seats reserved
	 */
	confirmReservation(row) {
		const rowIndex = this.rows.findIndex((r) => r.id === row.id)
		this.rows[rowIndex] = row
		console.log(
			`Seats reservation confirmed in row: ${row.id}, cinema: ${this.id}`
		)
	}

	/**
	 * Reserve a {@link numberOfSeats}
	 * @param {number} numberOfSeats number of seats to reserve
	 * @returns {Set<number>} the id of reserved seats
	 */
	reserveSeats(numberOfSeats) {
		if (!numberOfSeats) throw new Error('Select at least one seat to reserve')

		const row = this.findRowWithFreeSeats(numberOfSeats)

		if (!row) {
			console.log(`No enough seats available to reserve ${numberOfSeats} seats`)
			return new Set()
		}

		console.log(`Reserving ${numberOfSeats} seats in cinema: ${this.id}`)

		const seatsToReserve = this.preReserveSeats(numberOfSeats, row)

		row.seats = row.seats.map((seat) => {
			const seatToReserve = seatsToReserve.find(({ id }) => id === seat.id)
			if (seatToReserve) seat.status = seatToReserve.status
			return seat
		})

		this.confirmReservation(row)

		return new Set(seatsToReserve.map((seat) => seat.id))
	}
}

function range(start, end) {
	return Array.from(Array(end).keys()).map((i) => i + start)
}

/**
 * @param {string} id id of the {@link Row}
 * @param {number} numberOfSeats number of seats that should be in the row
 * @returns {Row} row instance
 */
function createCinemaRow(id, numberOfSeats) {
	return new Row(
		id,
		range(1, numberOfSeats).map((seatId) => new Seat(seatId))
	)
}

/**
 * @param {number} numberOfSeats number of seats that should be in the cinema room
 * @returns {Array<Row>} array of {@link Row}
 */
function setup(numberOfSeats) {
	return range(1, numberOfSeats)
		.map((i) => String.fromCharCode(64 + i))
		.map((rowId) => createCinemaRow(rowId, numberOfSeats))
}

function validateCinema(cinema) {
	if (!cinema) throw new Error('Cinema is not available')

	if (cinema.isFull) throw new Error('Cinema is full')
}

function suggest(numberOfSeats) {
	validateCinema(cinema)

	return cinema.reserveSeats(numberOfSeats)
}

// Initialize the cinema
const cinema = new Cinema(1, setup(10))

// Simulate the cinema reservations and checks tha cinema is full
suggest(10)
suggest(5)
suggest(4)
suggest(10)
suggest(4)
suggest(1)
suggest(5)
suggest(5)
suggest(2)
suggest(3)
suggest(3)
suggest(7)
suggest(5)
suggest(3)
suggest(2)
suggest(1)
suggest(1)
suggest(10)
suggest(8)
suggest(10)
suggest(2)
suggest(1)

console.log(`Cinema is full: ${cinema.isFull}`)
