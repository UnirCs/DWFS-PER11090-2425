class Seat {
  /**
   * Seat constructor
   * @param {string} id the seat id
   * @param {string} status the status of the seat
   */
  constructor(id, status = 'AVAILABLE') {
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
    return this.seats.filter((seat) => seat.status === 'AVAILABLE')
  }
}

class Cinema {
  /**
   * Cinema constructor
   * @param {number} id the id of the cinema
   * @param {number} numberOfRows number of rows in the cinema
   * @param {number} seatsByRow number of seats by row
   */
  constructor(id, numberOfRows, seatsByRow) {
    this.id = id
    this.numberOfSeats = numberOfRows * seatsByRow
    this.rows = setup(numberOfRows, seatsByRow)
  }

  get isFull() {
    return this.rows.every((row) => row.isFull)
  }

  /**
   * Find for a row with available seats
   * @returns {Array<Seat>} rows with free seats
   */
  findFreeSeats() {
    return this.rows
      .flatMap((row) => row.availableSeats)
  }

  /**
   * Pre reserve a number of seats.
   * @param {number} numberOfSeats number of seats to reserve
   * @param {Array<Seat>} seats the row with available seats
   * @returns {Array<Seat>} with the pre reserved seats
   */
  preReserveSeats(numberOfSeats, seats) {
    const seatsToReserve = seats
      .slice(-numberOfSeats)
      .map((seat) => (new Seat(seat.id, 'SELECTED')))

    console.log(
      `Pre reserved ${seatsToReserve.length} seats in cinema: ${this.id}`
    )

    return seatsToReserve
  }

  /**
   * Confirm the seats reservation
   * @param {Array<Seat>} seats the row with new seats reserved
   */
  confirmReservation(seats) {

    for (const seat of seats) {
      const row = this.rows.find((row) => row.availableSeats.includes(seat.id))
      if (row) {
        const seatIndex = row.seats.findIndex(({ id }) => id === seat.id)
        row[seatIndex] = new Seat(seat.id, 'OCCUPIED')
      }

      console.log(
        `Seats ${seats.map(({ id }) => id).join(',')} reservation confirmed in row: ${row.id}, cinema: ${this.id}`
      )
    }
  }

  /**
   * Reserve a {@link numberOfSeats}
   * @param {number} numberOfSeats number of seats to reserve
   * @returns {Set<string>} the id of reserved seats
   */
  reserveSeats(numberOfSeats) {

    if (!numberOfSeats || numberOfSeats < 0 || numberOfSeats > this.numberOfSeats)
      return new Set()

    const seats = structuredClone(this.findFreeSeats())

    if (seats.length === 0) {
      console.log(`No enough seats available to reserve ${numberOfSeats} seats`)
      return new Set()
    }

    console.log(`Reserving ${numberOfSeats} seats in cinema: ${this.id}`)

    const seatsToReserve = this.preReserveSeats(numberOfSeats, seats)

    const seatsIds = new Set(seatsToReserve.map((seat) => seat.id))
    console.log(`Seats reserved:`, seatsIds)

    return seatsIds
  }
}

/**
 * Creates a range array with the given params
 * @param start {number} the range start number
 * @param end {number} the range end number
 * @returns {number[]}
 */
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
    range(1, numberOfSeats).map((seatId) => new Seat(id + seatId))
  )
}

/**
 * @param {number} rows number of rows in the cinema
 * @param {number} seatsByRow number of seats by row
 * @returns {Array<Row>} array of {@link Row}
 */
function setup(rows = 10, seatsByRow = 10) {
  return range(1, rows)
    .map((i) => String.fromCharCode(64 + i))
    .map((rowId) => createCinemaRow(rowId, seatsByRow))
}

export { Cinema }
