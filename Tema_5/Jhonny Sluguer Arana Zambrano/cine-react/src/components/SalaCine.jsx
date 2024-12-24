import React, { useState } from 'react';
import Butaca from './Butaca';

const SalaCine = () => {
  const filas = 7;
  const columnas = 7;

  const [butacas, setButacas] = useState(
    Array.from({ length: filas }, (_, fila) =>
      Array.from({ length: columnas }, (_, col) => ({
        id: `${fila + 1}-${col + 1}`, // IDs como "1-1", "1-2"
        seleccionada: false,
        ocupada: false
      }))
    )
  );

  const [mensaje, setMensaje] = useState('');

  // Función para seleccionar o deseleccionar butacas
  const seleccionarButaca = (filaIndex, colIndex) => {
    const nuevasButacas = butacas.map((fila, i) =>
      fila.map((butaca, j) => {
        if (i === filaIndex && j === colIndex && !butaca.ocupada) {
          return { ...butaca, seleccionada: !butaca.seleccionada };
        }
        return butaca;
      })
    );
    setButacas(nuevasButacas);
  };

  // Función para confirmar la reserva
  const confirmarReserva = () => {
    let nuevasButacas = [...butacas];
    let butacasReservadas = [];

    nuevasButacas = nuevasButacas.map((fila) =>
      fila.map((butaca) => {
        if (butaca.seleccionada) {
          butacasReservadas.push(butaca.id);
          return { ...butaca, seleccionada: false, ocupada: true };
        }
        return butaca;
      })
    );

    if (butacasReservadas.length > 0) {
      setButacas(nuevasButacas);
      setMensaje(`Reserva confirmada para butacas: ${butacasReservadas.join(', ')}`);
    } else {
      setMensaje('No has seleccionado ninguna butaca.');
    }
  };

  return (
    <div className="sala-cine">
      <h2>Sala de Cine</h2>
      {butacas.map((fila, filaIndex) => (
        <div key={filaIndex} className="fila">
          {fila.map((butaca, colIndex) => (
            <Butaca
              key={butaca.id}
              butaca={butaca}
              onClick={() => seleccionarButaca(filaIndex, colIndex)}
            />
          ))}
        </div>
      ))}

      {/* Botón de Confirmar Reserva */}
      <div className="confirmar-reserva">
        <button className="btn" onClick={confirmarReserva}>
          Confirmar Reserva
        </button>
      </div>

      {/* Mensaje de Confirmación */}
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
};

export default SalaCine;
