document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const nombreUsuario = document.getElementById('nombreUsuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    const confirmarContrasena = document.getElementById('confirmarContrasena').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validar que no haya campos vacíos
    if (!nombre || !nombreUsuario || !contrasena || !confirmarContrasena || !email) {
        M.toast({html: 'Por favor, completa todos los campos.', classes: 'red'});
        return;
    }

    // Validar que la contraseña tenga al menos 6 caracteres
    if (contrasena.length < 6) {
        M.toast({html: 'La contraseña debe tener al menos 6 caracteres.', classes: 'red'});
        return;
    }

    // Validar que la contraseña y la confirmación coincidan
    if (contrasena !== confirmarContrasena) {
        M.toast({html: 'Las contraseñas no coinciden.', classes: 'red'});
        return;
    }

    // Validar formato de correo electrónico (ya lo hace el input con type="email")

    // Simular la verificación de nombre de usuario único
    if (nombreUsuario === 'admin') {
        M.toast({html: 'El nombre de usuario ya está en uso.', classes: 'red'});
        return;
    }

    // Guardar los datos en localStorage
    localStorage.setItem('nombreUsuario', nombre);
    localStorage.setItem('nombreDeUsuario', nombreUsuario);
    localStorage.setItem('emailUsuario', email);

    // Mostrar mensaje de éxito
    M.toast({html: '¡Registro completado con éxito!', classes: 'green'});

    // Redirigir a la página de reserva de butacas
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000); // Espera de 2 segundos antes de la redirección
});
