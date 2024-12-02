import { Seat } from "../Seat/Seat.js";

export const SeatsGrid = ({ butacas = [] } = {}) => {
  return `
      ${butacas.map((fila) => `
          ${fila.map((butaca) => Seat({ butaca })).join('')}
      `).join('')}
  `
}