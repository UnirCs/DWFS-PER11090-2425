import React, { useState } from 'react';

const PaymentProcessing = ({ totalCost, onBack, onComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'cash') {
      if (!email.includes('@') || !email.endsWith('.com')) {
        setEmailError('Por favor, ingresa un correo electrónico válido.');
        return;
      }
      alert('Pago en efectivo seleccionado. Se enviará un código a tu correo electrónico.');
    } else {
      alert('Pago procesado exitosamente.');
    }
    onComplete();
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#1e1e1e', color: 'white', borderRadius: '10px' }}>
      <h2 style={{ color: '#f9a825' }}>Procesamiento de Pago</h2>
      <p>Por favor, selecciona tu método de pago:</p>
      <div>
        <label style={{ marginRight: '10px' }}>
          <input
            type="radio"
            value="credit"
            checked={paymentMethod === 'credit'}
            onChange={handlePaymentMethodChange}
          />
          Tarjeta de Crédito
        </label>
        <label style={{ marginRight: '10px' }}>
          <input
            type="radio"
            value="debit"
            checked={paymentMethod === 'debit'}
            onChange={handlePaymentMethodChange}
          />
          Tarjeta de Débito
        </label>
        <label>
          <input
            type="radio"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={handlePaymentMethodChange}
          />
          Efectivo
        </label>
      </div>
      <h3 style={{ color: '#f9a825', marginTop: '20px' }}>Costo Total: ${totalCost}</h3>
      {paymentMethod && paymentMethod !== 'cash' && (
        <form onSubmit={handlePaymentSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="cardNumber">Número de Tarjeta</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="cardHolder">Nombre del Titular</label>
            <input
              type="text"
              id="cardHolder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="expiryDate">Fecha de Expiración</label>
            <input
              type="date"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
              maxLength="3" // Limitar a 3 dígitos
              style={{ width: '100%', padding: '10px', marginTop: '5px' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#f9a825', color: '#fff', border: 'none', borderRadius: '5px' }}>
            Pagar
          </button>
        </form>
      )}
      {paymentMethod === 'cash' && (
        <form onSubmit={handlePaymentSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', marginTop: '5px' }}
            />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#f9a825', color: '#fff', border: 'none', borderRadius: '5px' }}>
            Confirmar Pago en Efectivo
          </button>
        </form>
      )}
      <button onClick={onBack} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9a825', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Volver
      </button>
    </div>
  );
};

export default PaymentProcessing;