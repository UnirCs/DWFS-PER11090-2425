import React, { useState } from 'react';
import Header from './components/Header';
import FormularioRegistro from './components/FormularioRegistro';
import SalaCine from './components/SalaCine';

function App() {
  const [registrado, setRegistrado] = useState(false);

  return (
    <div>
      <Header />
      {!registrado ? (
        <FormularioRegistro onRegistroCompleto={() => setRegistrado(true)} />
      ) : (
        <SalaCine />
      )}
    </div>
  );
}

export default App;
