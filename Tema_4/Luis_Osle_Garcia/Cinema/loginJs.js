

document.addEventListener('DOMContentLoaded', function() {
    const registrarButton = document.getElementById('registrarButton');
    
    registrarButton.addEventListener('click', function(event) {
        event.preventDefault();

        const emailField = document.getElementById('email');
        const passwordField = document.getElementById('password');
        const confirmPasswordField = document.getElementById('confirmPassword');

        let valid = true;

        // Comprobación del campo email
        if (!emailField.value.includes('@')) {
            emailField.style.borderColor = 'red';
            alert('El campo email debe contener un @.');
            valid = false;
        } else {
            emailField.style.borderColor = '';
        }

        // Comprobación de la contraseña
        if (passwordField.value !== confirmPasswordField.value) {
            passwordField.style.borderColor = 'red';
            confirmPasswordField.style.borderColor = 'red';
            alert('Las contraseñas no coinciden.');
            valid = false;
        } else {
            passwordField.style.borderColor = '';
            confirmPasswordField.style.borderColor = '';
        }

        // Si todos los campos son válidos, redirigir a index.html
        if (valid) {
            window.location.href = 'index.html';
        }
    });
});