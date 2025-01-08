// Agregar evento focus para mover el label al hacer clic en el input
const setupFloatingLabelBehavior = (id) => {
    let inputField = document.getElementById(id);
    let label = inputField.nextElementSibling;

    inputField.addEventListener('focus', () => {
        label.style.top = '-15px';
        label.style.fontSize = '12px';
        
    });

    inputField.addEventListener('blur', () => {
        if (!inputField.value.trim()) {
            label.style.top = '10px';
            label.style.fontSize = '14px';
            label.style.color = '#fff'; 
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const fields = ['fullName', 'username', 'password', 'confirmPassword', 'email'];
    fields.forEach(setupFloatingLabelBehavior);
    document.getElementById('fullName').addEventListener('change', validateFullName);
    document.getElementById('username').addEventListener('change', validateUsername);
    document.getElementById('password').addEventListener('change', validatePassword);
    document.getElementById('confirmPassword').addEventListener('change', validateConfirmPassword);
    document.getElementById('email').addEventListener('change', validateEmail);
});

const createErrorMessage = (id, message) => {
    let existingMessage = document.getElementById(id + 'Error');
    if (!existingMessage) {
        let errorMessage = document.createElement('div');
        errorMessage.id = id + 'Error';
        errorMessage.className = 'alert alert-danger mt-2';
        errorMessage.textContent = message;
        document.getElementById(id).insertAdjacentElement('afterend', errorMessage);
    }
};

const removeErrorMessage = (id) => {
    let existingMessage = document.getElementById(id + 'Error');
    if (existingMessage) {
        existingMessage.remove();
    }
};

// Validar el campo de nombre completo
const validateFullName = () => {
    let fullName = document.getElementById('fullName');
    if (fullName.value.trim() === '') {
        createErrorMessage('fullName', 'El nombre y apellidos son obligatorios.');
        fullName.classList.remove('valid');
        fullName.classList.add('invalid');
    } else {
        removeErrorMessage('fullName');
        fullName.classList.remove('invalid');
        fullName.classList.add('valid');
    }
};

// Validar el campo de nombre de usuario
const validateUsername = () => {
    let username = document.getElementById('username');
    if (username.value.trim() === '') {
        createErrorMessage('username', 'El nombre de usuario es obligatorio.');
        username.classList.remove('valid');
        username.classList.add('invalid');
    } else {
        removeErrorMessage('username');
        username.classList.remove('invalid');
        username.classList.add('valid');
    }
};

// Validar el campo de contraseña
const validatePassword = () => {
    let password = document.getElementById('password');
    let passwordRegex = /^[A-Za-z0-9]{8,}$/;
    if (!passwordRegex.test(password.value)) {
        createErrorMessage('password', 'La contraseña debe tener mínimo 8 caracteres y contener números y letras.');
        password.classList.remove('valid');
        password.classList.add('invalid');
    } else {
        removeErrorMessage('password');
        password.classList.remove('invalid');
        password.classList.add('valid');
    }
};

// Validar el campo de confirmación de contraseña
const validateConfirmPassword = () => {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword');
    if (password !== confirmPassword.value) {
        createErrorMessage('confirmPassword', 'Las contraseñas no coinciden.');
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
    } else {
        removeErrorMessage('confirmPassword');
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.add('valid');
    }
};

// Validar el campo de email
const validateEmail = () => {
    let email = document.getElementById('email');
    if (!email.value.includes('@') || !email.value.includes('.')) {
        createErrorMessage('email', 'Por favor, introduce un email válido.');
        email.classList.remove('valid');
        email.classList.add('invalid');
    } else {
        removeErrorMessage('email');
        email.classList.remove('invalid');
        email.classList.add('valid');
    }
};

// Manejar el evento de envío del formulario
document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();

    // Ejecutar todas las validaciones antes de enviar el formulario
    validateFullName();
    validateUsername();
    validatePassword();
    validateConfirmPassword();
    validateEmail();

    // Comprobar si hay mensajes de error
    let errorMessages = document.querySelectorAll('form .alert-danger');
    if (errorMessages.length === 0) {
        // No hay errores, se puede procesar el formulario
        alert('Formulario enviado con éxito!');
        window.location.href = 'indx.html';
    } else {
        // Hay errores, se informa al usuario
        alert('Por favor, corrija los errores antes de enviar el formulario.');
    }
});
