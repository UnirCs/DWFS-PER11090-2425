// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Asignar manejadores de eventos a los campos del formulario
    document.getElementById('txtNombre').addEventListener('change', validarTxtNombre);
    document.getElementById('txtUsuario').addEventListener('change', validarTxtUsuario);
    document.getElementById('txtClave').addEventListener('change', validarTxtClave);
    document.getElementById('txtClave2').addEventListener('change', validarTxtClave2);
    document.getElementById('txtCorreo').addEventListener('change', validarTxtCorreo);
});

//funcion para aumentar mensaje de error
const crearMensajeError = (id, msg) =>{
    let msgActual = document.getElementById(id + 'Error');
    if (!msgActual){
        let msgError = document.createElement('p');
        msgError.id = id + 'Error';
        msgError.textContent = msg;
        msgError.classList.add('error');
        document.getElementById(id).insertAdjacentElement('afterend', msgError);
    }
};

//funcion para quitar mensaje de error
const quitarMensajeError = (id) =>{
    let msgActual = document.getElementById(id + 'Error');
    if (msgActual){
        msgActual.remove();
    }
};

// Validar el nombre y appellido
const validarTxtNombre = () => {
  let txtNombre = document.getElementById("txtNombre").value;
  if (txtNombre.trim() === "") {
      crearMensajeError('txtNombre', 'Ingrese el Nombre y Apellido');
  }else{
      quitarMensajeError('txtNombre');
  }
};


// Validar el campo de nombre de usuario
const validarTxtUsuario = () => {
    let username = document.getElementById('txtUsuario').value;
    if (username.trim() === '') {
        crearMensajeError('txtUsuario', 'El nombre de usuario es obligatorio.');
    } else {
        quitarMensajeError('txtUsuario');
    }
};

// Validar el campo de contraseña
const validarTxtClave = () => {
    let password = document.getElementById('txtClave').value;

    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        crearMensajeError('txtClave', 'La contraseña debe tener mínimo 8 caracteres y contener números y letras.');
    } else {
        quitarMensajeError('txtClave');
    }
};

// Validar el campo de confirmación de contraseña
const validarTxtClave2 = () => {
    let password = document.getElementById('txtClave').value;
    let confirmPassword = document.getElementById('txtClave2').value;
    if (password !== confirmPassword) {
        crearMensajeError('txtClave2', 'Las contraseñas no coinciden.');
    } else {
        quitarMensajeError('txtClave2');
    }
};

// Validar el campo de email
const validarTxtCorreo = () => {
    let email = document.getElementById('txtCorreo').value;
    if (!email.includes('@') || !email.includes('.')) {
        crearMensajeError('txtCorreo', 'Por favor, introduce un email válido.');
    } else {
        quitarMensajeError('txtCorreo');
    }
};

// Manejar el evento de envío del formulario
document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formulario', event.target);

    // Ejecutar todas las validaciones antes de enviar el formulario
    validarTxtNombre();
    validarTxtUsuario();
    validarTxtClave();
    validarTxtClave2();
    validarTxtCorreo();

    // Comprobar si hay mensajes de error
    let errorMessages = document.querySelectorAll('form p');
    if (errorMessages.length === 0) {
        // No hay errores, se puede procesar el formulario
        window.location.replace('cinemaUnirCC.html');
    } else {
        // Hay errores, se informa al usuario
        alert('Por favor, corrija los errores antes de enviar el formulario.');
    }
});
