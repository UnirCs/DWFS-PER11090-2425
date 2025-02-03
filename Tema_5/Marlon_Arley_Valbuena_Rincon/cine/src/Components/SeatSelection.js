import React, { useState } from 'react';

const SeatSelection = ({ movie, onBack, onConfirm }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [numSeats, setNumSeats] = useState(0);
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const seats = Array.from({ length: 30 }, (_, i) => i + 1);
  const occupiedSeats = [5, 10, 15, 20, 25, 30]; // Más asientos ocupados

  if (!movie) {
    return <div>Loading...</div>;
  }

  const handleNumSeatsChange = (e) => {
    setNumSeats(parseInt(e.target.value, 10));
  };

  const handleNumSeatsSubmit = () => {
    if (numSeats > seats.length - occupiedSeats.length) {
      alert('Lo siento, la cantidad de asientos no está disponible.');
    } else {
      setStep(2);
    }
  };

  const toggleSeat = (seat) => {
    if (!occupiedSeats.includes(seat)) {
      setSelectedSeats((prev) => {
        if (prev.includes(seat)) {
          return prev.filter((s) => s !== seat);
        } else if (prev.length < numSeats) {
          return [...prev, seat];
        } else {
          setError(`No puedes seleccionar más de ${numSeats} asientos.`);
          return prev;
        }
      });
    }
  };

  const calculateTotalCost = () => {
    const frontRowSeats = seats.slice(0, 10); // Asientos más cercanos a la pantalla
    const middleRowSeats = seats.slice(10, 20); // Asientos en el medio
    const backRowSeats = seats.slice(20, 30); // Asientos más alejados de la pantalla

    let totalCost = 0;
    selectedSeats.forEach(seat => {
      if (frontRowSeats.includes(seat)) {
        totalCost += 10; // Precio más económico
      } else if (middleRowSeats.includes(seat)) {
        totalCost += 15; // Precio medio
      } else if (backRowSeats.includes(seat)) {
        totalCost += 20; // Precio más costoso
      }
    });

    return totalCost;
  };

  const handleConfirm = () => {
    if (selectedSeats.length !== numSeats) {
      setError(`No es válida la reserva. Tienes que reservar ${numSeats} asientos.`);
    } else {
      const totalCost = calculateTotalCost();
      onConfirm(totalCost);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#1e1e1e', color: 'white', borderRadius: '10px' }}>
      <h2 style={{ color: '#f9a825' }}>Reservar Asientos para {movie.title}</h2>
      {step === 1 && (
        <div>
          <label style={{ color: '#bbb' }}>¿Cuántos asientos quieres reservar?</label>
          <input
            type="number"
            value={numSeats}
            onChange={handleNumSeatsChange}
            style={{ margin: '10px', padding: '5px', borderRadius: '5px' }}
          />
          <button 
            onClick={handleNumSeatsSubmit}
            style={{
              backgroundColor: '#f9a825',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              color: '#1e1e1e',
              cursor: 'pointer',
              margin: '10px'
            }}
          >
            Confirmar
          </button>
        </div>
      )}
      {step === 2 && (
        <>
          <div style={{ marginBottom: '20px', color: '#bbb' }}>Pantalla</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px', margin: '20px 0' }}>
            {seats.map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                style={{
                  padding: '10px',
                  backgroundColor: occupiedSeats.includes(seat)
                    ? '#555'
                    : selectedSeats.includes(seat)
                    ? '#f9a825'
                    : '#333',
                  color: occupiedSeats.includes(seat) ? '#999' : selectedSeats.includes(seat) ? '#1e1e1e' : '#fff',
                  borderRadius: '5px',
                  cursor: occupiedSeats.includes(seat) ? 'not-allowed' : 'pointer',
                  textAlign: 'center'
                }}
              >
                {seat}
              </div>
            ))}
          </div>
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
          <button 
            onClick={handleConfirm}
            style={{
              backgroundColor: '#f9a825',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              color: '#1e1e1e',
              cursor: 'pointer',
              margin: '10px'
            }}
          >
            Confirmar Reserva
          </button>
        </>
      )}
      <button 
        onClick={onBack}
        style={{
          backgroundColor: '#ccc',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          color: '#1e1e1e',
          cursor: 'pointer',
          margin: '10px'
        }}
      >
        Volver
      </button>
    </div>
  );
};

export default SeatSelection;