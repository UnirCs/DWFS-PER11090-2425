import React from 'react';

const Butaca = ({ butaca, onClick }) => {
  const estilo = butaca.ocupada
    ? 'butaca ocupada'
    : butaca.seleccionada
    ? 'butaca seleccionada'
    : 'butaca';

  return <div className={estilo} onClick={onClick}></div>;
};

export default Butaca;
