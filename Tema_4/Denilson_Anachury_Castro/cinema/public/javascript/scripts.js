import { Cinema } from './cinema.js'

const $ = (el) => document.querySelector(el)
const $$ = (el) => document.querySelectorAll(el)

const USER_NAME_KEY = 'UNIRC_USER_NAME'
const CINEMA_SEATS_PRE_RESERVED_KEY = 'UNIRC_SEATS_PRE_RESERVED'

const loading = document.createElement('div')
loading.id = 'loading'
loading.textContent = 'Loading...'

const chairsContainer = $('#chairsContainer')
const seatsInput = $('input')

chairsContainer.appendChild(loading)

window.onload = () => {

  /**
   * @param cinema {Cinema} the cinema selected
   * @param numberOfSeats
   * @returns {Set<string>} the id of reserved seats
   */
  function suggest(cinema, numberOfSeats) {
    if (!cinema) throw new Error('Cinema is not available')
    if (cinema.isFull) throw new Error('Cinema is full')

    return cinema.reserveSeats(numberOfSeats)
  }

  function createRow({ id, seats }) {
    const row = document.createElement('div')
    row.id = 'row' + id
    row.name = 'row' + id
    row.className = 'chairs-row'

    row.appendChild(createRowId(id))
    for (const seat of seats)
      row.appendChild(createRowSeat(seat))

    return row
  }

  function createRowId(id) {
    const rowId = document.createElement('h6')
    rowId.textContent = id
    return rowId
  }

  function createRowSeat({ id, status }) {
    const seat = document.createElement('div')
    seat.id = id
    seat.classList.add('chair', status.toLowerCase())
    seat.textContent = id
    seat.addEventListener('click', ({ target }) => {
      if (!target.classList.contains('occupied')) {
        console.log(target)
      }
    })
    return seat
  }

  /**
   * Render the cinema chairs into the DOM
   * @param cinema {Cinema} the cinema selected
   */
  function renderChairs({ rows }) {

    chairsContainer.innerHTML = ''

    for (const row of rows)
      chairsContainer.appendChild(createRow(row))
  }

  /**
   * @param seatsId {Set<string>} id of chairs pre reserved
   */
  function updateChairsStatus(seatsId) {
    for (const seat of $$(`.chairs-row > .chair`)) {
      seat.classList.remove('selected')
      if (seatsId.has(seat.id))
        seat.classList.add('selected')
    }
  }

  const cinema = new Cinema(1, 5, 11)

  // cinema.rows[3].seats[6].status = 'OCCUPIED'
  // cinema.rows[3].seats[5].status = 'OCCUPIED'
  // cinema.rows[3].seats[4].status = 'OCCUPIED'

  seatsInput.min = 0
  seatsInput.max = cinema.numberOfSeats
  seatsInput.addEventListener('input', ({ target: { value } }) => {
    localStorage.setItem(CINEMA_SEATS_PRE_RESERVED_KEY, String(value))
    updateChairsStatus(suggest(cinema, Number(value)))
  })

  $('#userName').textContent = localStorage.getItem(USER_NAME_KEY) ?? ''
  $('#loading').remove()
  renderChairs(cinema)

  const numberOfSeats = Number(localStorage.getItem(CINEMA_SEATS_PRE_RESERVED_KEY ?? 0))
  updateChairsStatus(suggest(cinema, numberOfSeats))
  seatsInput.value = numberOfSeats
  seatsInput.disabled = false
}
