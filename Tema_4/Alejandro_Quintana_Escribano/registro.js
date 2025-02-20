document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");

        let isValid = true;

        // Limpiar errores anteriores
        [name, email, password, confirmPassword].forEach(input => {
            input.classList.remove("error");
            const label = document.querySelector(`label[for="${input.id}"]`);
            label.classList.remove("error");
        });

        // Validación de campos vacíos
        if (name.value.trim() === "") {
            name.classList.add("error");
            document.querySelector("label[for='name']").classList.add("error");
            isValid = false;
        }

        if (email.value.trim() === "") {
            email.classList.add("error");
            document.querySelector("label[for='email']").classList.add("error");
            isValid = false;
        }

        if (password.value.trim() === "") {
            password.classList.add("error");
            document.querySelector("label[for='password']").classList.add("error");
            isValid = false;
        }

        if (confirmPassword.value.trim() === "") {
            confirmPassword.classList.add("error");
            document.querySelector("label[for='confirmPassword']").classList.add("error");
            isValid = false;
        }

        // Verificar que las contraseñas coincidan
        if (password.value !== confirmPassword.value) {
            password.classList.add("error");
            confirmPassword.classList.add("error");
            document.querySelector("label[for='password']").classList.add("error");
            document.querySelector("label[for='confirmPassword']").classList.add("error");
            isValid = false;
            alert("Las contraseñas no coinciden.");
        }

        if (isValid) {
            localStorage.setItem("userName", name.value);
            window.location.href = "index.html";
        }
    });
});
