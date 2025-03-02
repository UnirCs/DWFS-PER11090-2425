
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistro");
    const errGeneral = document.getElementById("errorGeneral");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío automático


        errGeneral.textContent = "";

        const nombreCompleto = document.getElementById("nombreCompleto").value.trim();
        const nombreUsuario = document.getElementById("nombreUsuario").value.trim();
        const pass1 = document.getElementById("pass1").value;
        const pass2 = document.getElementById("pass2").value;
        const correo = document.getElementById("correo").value.trim();


        if (!nombreCompleto || !nombreUsuario || !pass1 || !pass2 || !correo) {
            errGeneral.textContent = "Por favor, completa todos los campos.";
            return;
        }

        if (pass1.length < 8) {
            errGeneral.textContent = "La contraseña debe tener al menos 8 caracteres.";
            return;
        }

        if (pass1 !== pass2) {
            errGeneral.textContent = "Las contraseñas no coinciden.";
            return;
        }

        if (!correo.includes("@") || !correo.includes(".")) {
            errGeneral.textContent = "El formato de email no es válido.";
            return;
        }

        // Si pasamos todas las validaciones...
        // Redirigimos a la página de reserva:
        //   - window.location.href   => crea historial
        //   - window.location.replace => no crea historial (el usuario no puede volver atrás)
        window.location.href = "butacas.html";
    });
});
