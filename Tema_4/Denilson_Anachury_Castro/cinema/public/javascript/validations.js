// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Asignar manejadores de eventos a los campos del formulario
  document.getElementById('fullName').addEventListener('change', validateFullName)
  document.getElementById('username').addEventListener('change', validateUsername)
  document.getElementById('password').addEventListener('change', validatePassword)
  document.getElementById('confirmPassword').addEventListener('change', validateConfirmPassword)
  document.getElementById('email').addEventListener('change', validateEmail)
})

// Crear un mensaje de error y mostrarlo bajo el campo correspondiente
const createErrorMessage = (id, message) => {
  let existingMessage = document.getElementById(id + 'Error')
  if (!existingMessage) {
    let errorMessage = document.createElement('p')
    errorMessage.id = id + 'Error'
    errorMessage.textContent = message
    errorMessage.classList.add('error')
    document.getElementById(id).insertAdjacentElement('afterend', errorMessage)
  }
}

// Eliminar el mensaje de error si ya no es necesario
const removeErrorMessage = (id) => {
  let existingMessage = document.getElementById(id + 'Error')
  if (existingMessage) {
    existingMessage.remove()
  }
}

// Validar el campo de nombre completo
export const validateFullName = () => {
  let fullName = document.getElementById('fullName').value
  if (fullName.trim() === '') {
    createErrorMessage('fullName', 'El nombre y apellidos son obligatorios.')
  } else {
    removeErrorMessage('fullName')
  }
}

// Validar el campo de nombre de usuario
export const validateUsername = () => {
  let username = document.getElementById('username').value
  if (username.trim() === '') {
    createErrorMessage('username', 'El nombre de usuario es obligatorio.')
  } else {
    removeErrorMessage('username')
  }
}

// Validar el campo de contraseña
export const validatePassword = () => {
  let password = document.getElementById('password').value
  let passwordRegex = /^[A-Za-z0-9]{8,}$/
  if (!passwordRegex.test(password)) {
    createErrorMessage('password', 'La contraseña debe tener mínimo 8 caracteres y contener números y letras.')
  } else {
    removeErrorMessage('password')
  }
}

// Validar el campo de confirmación de contraseña
export const validateConfirmPassword = () => {
  let password = document.getElementById('password').value
  let confirmPassword = document.getElementById('confirmPassword').value
  if (password !== confirmPassword) {
    createErrorMessage('confirmPassword', 'Las contraseñas no coinciden.')
  } else {
    removeErrorMessage('confirmPassword')
  }
}

// Validar el campo de email
export const validateEmail = () => {
  let email = document.getElementById('email').value
  if (!email.includes('@') || !email.includes('.')) {
    createErrorMessage('email', 'Por favor, introduce un email válido.')
  } else {
    removeErrorMessage('email')
  }
}
