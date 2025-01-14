document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nombre').addEventListener('change', validatenombre);
    document.getElementById('snombre').addEventListener('change', validatesnombre);
    document.getElementById('password').addEventListener('change', validatepassword);
    document.getElementById('confirmpassword').addEventListener('change', validateConfirmpassword);
    document.getElementById('email').addEventListener('change', validateEmail);
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

const validatenombre = () => {
    let nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
        createErrorMessage('nombre', 'Coloca el nombre y apellidos');
    } else {
        removeErrorMessage('nombre');
    }
};

const validatesnombre = () => {
    let snombre = document.getElementById('snombre').value;
    if (snombre.trim() === '') {
        createErrorMessage('snombre', 'Coloca el nombre de usuario');
    } else {
        removeErrorMessage('snombre');
    }
};

const validatepassword = () => {
    let password = document.getElementById('password').value;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!passwordRegex.test(password)) {
        createErrorMessage('password', 'La contraseña debe tener mínimo 8 caracteres, contener al menos una letra mayúscula, una letra minúscula y un carácter especial.');
    } else {
        removeErrorMessage('password');
    }
};

const validateConfirmpassword = () => {
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;
    if (password !== confirmpassword) {
        createErrorMessage('confirmpassword', 'Las contraseñas no coinciden.');
    } else {
        removeErrorMessage('confirmpassword');
    }
};

const validateEmail = () => {
    let email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
        createErrorMessage('email', 'Coloca un email válido.');
    } else {
        removeErrorMessage('email');
    }
};

document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();

    validatenombre();
    validatesnombre();
    validatepassword();
    validateConfirmpassword();
    validateEmail();

    let errorMessages = document.querySelectorAll('form p');
    if (errorMessages.length === 0) {
        location.href = "cine.html"
    } else {
        alert('Arregla los errores');
    }
});

const goToCinema = () => {
    location.href = "cine.html"
}
