document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registroForm').addEventListener('submit', function(event) {
      event.preventDefault();
      // Validaciones
      validateNombre();
      validateEmail();
      validatePassword();
      validateConfirmPassword();
  
      // Comprobar si hay mensajes de error
      let errorMessages = document.querySelectorAll('.error');
      if (errorMessages.length === 0) {
        // No hay errores, redirigir a la página de reserva de butacas  
        window.location.href = 'reserva.html';
      } else {
        alert('Por favor, corrija los errores antes de enviar el formulario.');
      }
    });
  });
  
  const createErrorMessage = (id, message) => {
    let existingMessage = document.getElementById(id + 'Error');
    if (!existingMessage) {
      let errorMessage = document.createElement('p');
      errorMessage.id = id + 'Error';
      errorMessage.textContent = message;
      errorMessage.classList.add('error');
      document.getElementById(id).insertAdjacentElement('afterend', errorMessage);
    }
  };
  
  const removeErrorMessage = (id) => {
    let existingMessage = document.getElementById(id + 'Error');
    if (existingMessage) {
      existingMessage.remove();
    }
  };
  
  const validateNombre = () => {
    let nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
      createErrorMessage('nombre', 'El nombre es obligatorio.');
    } else {
      removeErrorMessage('nombre');
    }
  };
  
  const validateEmail = () => {
    let email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
      createErrorMessage('email', 'Por favor, introduce un email válido.');
    } else {
      removeErrorMessage('email');
    }
  };
  
  const validatePassword = () => {
    let password = document.getElementById('password').value;
    let passwordRegex = /^[A-Za-z0-9]{8,}$/;
    if (!passwordRegex.test(password)) {
      createErrorMessage('password', 'La contraseña debe tener mínimo 8 caracteres y contener números y letras.');
    } else {
      removeErrorMessage('password');
    }
  };
  
  const validateConfirmPassword = () => {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
      createErrorMessage('confirmPassword', 'Las contraseñas no coinciden.');
    } else {
      removeErrorMessage('confirmPassword');
    }
  };
  