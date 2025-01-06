document.addEventListener('DOMContentLoaded', () => {
  const formFields = ['fullName', 'username', 'password', 'confirmPassword', 'email'];
  formFields.forEach(field => {
    document.getElementById(field).addEventListener('change', () => validateField(field));
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
  if (existingMessage) existingMessage.remove();
};

// Validaciones específicas de cada campo
const validateField = (field) => {
  let value = document.getElementById(field).value.trim();
  switch (field) {
    case 'fullName':
      value === '' ? createErrorMessage(field, 'El nombre y apellidos son obligatorios.') : removeErrorMessage(field);
      break;
    case 'username':
      value === '' ? createErrorMessage(field, 'El nombre de usuario es obligatorio.') : removeErrorMessage(field);
      break;
    case 'password':
      let passwordRegex = /^[A-Za-z0-9]{8,}$/;
      !passwordRegex.test(value) ? createErrorMessage(field, 'La contraseña debe tener mínimo 8 caracteres y contener números y letras.') : removeErrorMessage(field);
      break;
    case 'confirmPassword':
      let password = document.getElementById('password').value;
      value !== password ? createErrorMessage(field, 'Las contraseñas no coinciden.') : removeErrorMessage(field);
      break;
    case 'email':
      !value.includes('@') || !value.includes('.') ? createErrorMessage(field, 'Por favor, introduce un email válido.') : removeErrorMessage(field);
      break;
  }
};

document.getElementById('userForm').addEventListener('submit', (event) => {
  event.preventDefault();
  ['fullName', 'username', 'password', 'confirmPassword', 'email'].forEach(validateField);

  let errorMessages = document.querySelectorAll('form p');
  if (errorMessages.length === 0) {
    window.location.replace("../cinema/index.html");
  } else {
    alert('Por favor, corrija los errores antes de enviar el formulario.');
  }
});
