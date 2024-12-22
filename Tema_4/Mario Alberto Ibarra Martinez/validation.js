document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validación de campos
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Si las validaciones pasan, redirigir a cinema.html
    window.location.href = 'cinema/index.html';
});