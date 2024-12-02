window.onload = () => {
    const names = document.getElementById('nombres');
    const user = document.getElementById('usuario');
    const password = document.getElementById('contrasena');
    const rePassword = document.getElementById('reContrasena');
    const mail = document.getElementById('mail');
    const form = document.getElementById('register-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        window.location.replace('Cine.html');
    };

    password.addEventListener('input', () => {

        if (password.value.length < 8 || !password.value.match(/\d/)) {
            password.style.borderColor = 'red';
            if (!document.getElementById('password-error')) {
            let error = document.createElement('p');
            error.id = 'password-error';
            error.innerHTML = 'La contraseña debe tener al menos 8 caracteres y un número';
            document.getElementById('divContraseña').appendChild(error);
            }
        } else {
            password.style.borderColor = 'green'
            if (document.getElementById('password-error')) {
                document.getElementById('password-error').remove();
            }
        }
    });

    rePassword.addEventListener('input', () => {
        if (rePassword.value !== password.value) {
            rePassword.style.borderColor = 'red';
            rePassword.style.borderWidth = '3px';
            if (!document.getElementById('rePassword-error')) {
                let error = document.createElement('p');
                error.id = 'rePassword-error';
                error.innerHTML = 'Las contraseñas no coinciden';
                document.getElementById('divReContraseña').appendChild(error);
            }
        }
        else{
            if (document.getElementById('rePassword-error')) {
                document.getElementById('rePassword-error').remove();
                rePassword.style.borderColor = 'green';
            }
        }
    });

    mail.addEventListener('input', () => {
        if (mail.value.includes('@') && mail.value.includes('.')) {
            document.getElementById('mail').className = 'form-control is-valid';
        }else {
            document.getElementById('mail').className = 'form-control is-invalid';
        }
    });


}