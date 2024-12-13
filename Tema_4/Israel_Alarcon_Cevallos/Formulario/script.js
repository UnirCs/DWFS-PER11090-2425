// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Asignar manejadores de eventos a los campos del formulario
    document.getElementById('fullName').addEventListener('focusout', validateFullName);
    document.getElementById('lastName').addEventListener('focusout', validateLastName);
    document.getElementById('address').addEventListener('focusout', validateDireccion);
    document.getElementById('city').addEventListener('focusout', validateCiudad);
    document.getElementById('username').addEventListener('focusout', validateUserName);
    document.getElementById('password').addEventListener('focusout', validatePassword);
    document.getElementById('confirmPassword').addEventListener('change', validateConfirmPassword);
    document.getElementById('email').addEventListener('change', validateEmail);
});

// Crear un mensaje de error y mostrarlo bajo el campo correspondiente
const createErrorMessage = (id, message) => {
    let existingMessage = document.getElementById(id + 'Error');
    if (!existingMessage) {
        let errorMessage = document.createElement('p');
        errorMessage.id = id + 'Error';
        errorMessage.textContent = message;
        errorMessage.classList.add('error');
        document.getElementById(id).insertAdjacentElement('beforebegin', errorMessage);
    }
};

// Eliminar el mensaje de error si ya no es necesario
const removeErrorMessage = (id) => {
    let existingMessage = document.getElementById(id + 'Error');
    if (existingMessage) {
        existingMessage.remove();
    }
};

// Validar el campo de nombre completo
const validateFullName = () => {
    let fullName = document.getElementById('fullName').value;
    if (fullName.trim() === '') {
        createErrorMessage('fullName', 'Los nombres son obligatorios.');
    } else {
        removeErrorMessage('fullName');
    }
};

// Validar el campo de apellidos completo
const validateLastName = () => {
    let lastName = document.getElementById('lastName').value;
    if (lastName.trim() === '') {
        createErrorMessage('fullName', 'Los apellidos son obligatorios.');
    }
  else {
    removeErrorMessage('fullName');
}
};

// Validar el campo Direccion
const validateDireccion = () => {
    let address = document.getElementById('address').value;
    if (address.trim() === '') {
        createErrorMessage('address', 'La Dirección es obligatoria de ingresar.');
    }
    else {
        removeErrorMessage('address');
    }
};

// Validar el campo Ciudad
const validateCiudad = () => {
    let city = document.getElementById('city').value;
    if (city.trim() === '') {
        createErrorMessage('city', 'La Ciudad es importante mencionar.');
    }
    else {
        removeErrorMessage('city');
    }
};


// Validar el campo de nombre de usuario
const validateUserName = () => {
    let username = document.getElementById('username').value;
    if (username.trim() === '') {
        createErrorMessage('username', 'El nombre de usuario es obligatorio.');
    } else {
        removeErrorMessage('username');
    }
};

// Validar el campo de contraseña
const validatePassword = () => {
    let password = document.getElementById('password').value;
    let passwordRegex = /^[A-Za-z0-9]{8,}$/;
    if (!passwordRegex.test(password)) {
        createErrorMessage('password', 'La contraseña debe tener mínimo 8 caracteres y contener números y letras.');
    } else {
        removeErrorMessage('password');
    }
};

// Validar el campo de confirmación de contraseña
const validateConfirmPassword = () => {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        createErrorMessage('confirmPassword', 'Las contraseñas no coinciden.');
    } else {
        removeErrorMessage('confirmPassword');
    }
};

// Validar el campo de email
const validateEmail = () => {
    let email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
        createErrorMessage('email', 'Por favor, introduce un email válido.');
    } else {
        removeErrorMessage('email');
    }
};

// Manejar el evento de envío del formulario
document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();

    // Ejecutar todas las validaciones antes de enviar el formulario
    validateFullName();
    validateLastName();
    validateDireccion();
    validateCiudad();
    validateUserName();
    validatePassword();
    validateConfirmPassword();
    validateEmail();

    // Comprobar si hay mensajes de error
    let errorMessages = document.querySelectorAll('form p');
    if (errorMessages.length === 0) {
        // No hay errores, se puede procesar el formulario
        window.location.replace('Cinema/index.html');
    } else {
        // Hay errores, se informa al usuario
        alert('Por favor, corrija los errores antes de enviar el formulario.');
    }
});
