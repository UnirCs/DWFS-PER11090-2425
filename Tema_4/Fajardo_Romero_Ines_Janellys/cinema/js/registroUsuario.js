document.addEventListener('DOMContentLoaded',() => {
    document.getElementById('fullName').addEventListener( "change", validarNombresApellidos);
    document.getElementById('username').addEventListener( "change", validarUsuario);
    document.getElementById('password').addEventListener( "change", validarContrasenia);
    document.getElementById('confirmPassword').addEventListener( "change", validarConfirmacionContrasenia);
    document.getElementById('email').addEventListener( "change", validarCorreo);
})

const crearError = (id, mensaje) => {
    let isMensaje = document.getElementById(id + 'Error');
    if (!isMensaje) {
        let mensajeError = document.createElement('p');
        mensajeError.id = id + 'Error';
        mensajeError.textContent = mensaje;
        mensajeError.classList.add('error');
        document.getElementById(id).insertAdjacentElement('afterend', mensajeError);
    }
};

const borrarError = (id) => {
    let isMensaje = document.getElementById(id + 'Error');
    if (isMensaje) {
        isMensaje.remove();
    }
};

function validarNombresApellidos(){
    let nombresApellidos = document.getElementById("fullName").value;
    if(nombresApellidos.trim() === ""){
        crearError("fullName", "Los nombres y apellidos son obligatorios");
    }else{
        borrarError("fullName");
    }
}

function validarUsuario(){
    let nombresApellidos = document.getElementById("username").value;
    if(nombresApellidos.trim() === ""){
        crearError("username", "El nombre de usuario es obligatorios");
    }else{
        borrarError("username");
    }
}

const validarContrasenia = () => {
    let password = document.getElementById('password').value;
    let passwordRegex = /^[A-Za-z0-9]{8,}$/;
    if (!passwordRegex.test(password)) {
        crearError('password', 'La contraseña debe tener mínimo 8 caracteres y contener números y letras.');
    } else {
        borrarError('password');
    }
};

const validarConfirmacionContrasenia = () => {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        crearError('confirmPassword', 'Las contraseñas no coinciden.');
    } else {
        borrarError('confirmPassword');
    }
};

const validarCorreo = () => {
    let email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
        crearError('email', 'Por favor, introduce un email válido.');
    } else {
        borrarError('email');
    }
};

document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();

    validarNombresApellidos();
    validarUsuario();
    validarContrasenia();
    validarConfirmacionContrasenia();
    validarCorreo();

    let errorMessages = document.querySelectorAll('form p');
    if (errorMessages.length === 0) {
        window.location.replace('butacas.html')
    } else {
        alert('No puede enviar el formulario.');
    }
});

