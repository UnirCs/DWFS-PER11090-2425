//DOM
document.addEventListener('DOMContentLoaded',()=>{
    //Asignar manejadores de eventos a los campos del formulario
    document.getElementById('nombreCompleto').addEventListener('change', validateNombreCompleto);
    document.getElementById('usuario').addEventListener('change', validateUsuario);
    document.getElementById('password').addEventListener('change', validatepassword);
    document.getElementById('confirmacion').addEventListener('change', validateConfirmacion);
    document.getElementById('correo').addEventListener('change', validateCorreo);
});
//Crear un mensaje de error y mostrarlo bajo el campo correspondiente
const createErrorMensaje=(id, mensaje)=>{
    let existingMensaje=document.getElementById(id+'Error');
    if(!existingMensaje){
        let errorMensaje = document.createElement('p');
        errorMensaje.id=id+'Error';
        errorMensaje.textContent=mensaje;
        errorMensaje.classList.add('error');
        document.getElementById(id).insertAdjacentElement('afterend', errorMensaje);
    }
};

//Eliminar el mensaje de error si ya no es necesario
const removeErrorMensaje=(id)=>{
    let existingMensaje=document.getElementById(id+'Error');
    if(existingMensaje){
        existingMensaje.remove();
    }
};

//Validar el campo de nombre completo
const validateNombreCompleto=()=>{
    let nombreCompleto=document.getElementById('nombreCompleto').value;
    if (nombreCompleto.trim() === ''){
        createErrorMensaje('nombreCompleto','Escriba su nombre y apellidos.');
        }
    else{
        removeErrorMensaje('nombreCompleto');
    }
};

//Validar el campo de usuario
const validateUsuario =()=>{
    let usuario=document.getElementById('usuario').value;
    if(usuario.trim() === ''){
        createErrorMensaje('usuario', 'El nombre de usuario es obligatorio.');
    }
    else{
        removeErrorMensaje('usuario');
    }
}

//Validar el campo de contraseña
const validatepassword=()=>{
    let password = document.getElementById('password').value;
    let passwordError = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!passwordError.test(password)){
        createErrorMensaje('password', 'La contraseña debe tener mínimo 8 caracteres, con números y letras mayúsculas y minúsculas.');
    }
    else{
        removeErrorMensaje('password');
    }
}

//Validar confirmacion de la contraseña
const validateConfirmacion=()=>{
    let password= document.getElementById('password').value;
    let confirmacion=document.getElementById('confirmacion').value;
    if(password!==confirmacion){
        createErrorMensaje('confirmacion', 'Las contraseñas no coinciden.');
    }
    else{
        removeErrorMensaje('confirmacion');
    }
}

//Validar correo
const validateCorreo=()=>{
    let correo=document.getElementById('correo').value;
    if(!correo.includes('@')||!correo.includes('.')){
        createErrorMensaje('correo', 'Introduce un correo válido.');
    }
    else{
        removeErrorMensaje('correo');
    }
};

//Manejar el evento de envío del formulario
document.getElementById('formulario').addEventListener('submit', (event)=>{
    event.preventDefault();
    //Ejecutar todas las validaciones antes de enviar el formulario
    validateNombreCompleto();
    validateUsuario();
    validatepassword();
    validateConfirmacion();
    validateCorreo();

    //Comprobar si hay mensajes de error
    let errorMensajes=document.querySelectorAll('form p');
    if(errorMensajes.length===0){
        //No hay errores, se puede procesar el formulario
        alert('Formulario enviado con éxito!');
        window.location.replace("cinema.html");
    }
    else{
        //Hay errores, se informa al usuario
        alert('Por favor, corrija los errores antes de enviar el formulario.');
    }
});