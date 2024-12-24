import React, { useState } from 'react';

const FormularioRegistro = ({ onRegistroCompleto }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    usuario: '',
    contrasena: '',
    confirmarContrasena: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.contrasena !== formData.confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }
    onRegistroCompleto();
  };
  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Registro</h2>
      <input type="text" name="nombre" placeholder="Nombre completo" onChange={handleChange} required />
      <input type="text" name="usuario" placeholder="Nombre de usuario" onChange={handleChange} required />
      <input type="password" name="contrasena" placeholder="Contraseña" onChange={handleChange} required />
      <input type="password" name="confirmarContrasena" placeholder="Confirmar Contraseña" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default FormularioRegistro;
