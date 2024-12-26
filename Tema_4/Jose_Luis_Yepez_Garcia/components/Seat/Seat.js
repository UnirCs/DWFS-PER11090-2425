export const Seat = ({ butaca }) => {
  return `
  <div id="${butaca.id}" class="butaca ${butaca.estado ? 'reservada' : ''}"></div>
  `
}