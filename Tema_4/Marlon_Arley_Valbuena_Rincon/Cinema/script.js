document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
  
    // Validación de correo electrónico
    emailInput.addEventListener('input', function() {
      const emailError = document.getElementById('emailError');
      const emailValue = emailInput.value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
      if (!emailPattern.test(emailValue)) {
        emailError.textContent = 'Por favor ingresa un correo válido';
        emailError.style.display = 'block';
      } else {
        emailError.style.display = 'none';
      }
    });
  
    // Validación de la contraseña
    passwordInput.addEventListener('input', function() {
      const passwordError = document.getElementById('passwordError');
      const passwordValue = passwordInput.value;
  
      if (passwordValue.length < 8 || !/[A-Za-z]/.test(passwordValue) || !/[0-9]/.test(passwordValue)) {
        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres, con letras y números';
        passwordError.style.display = 'block';
      } else {
        passwordError.style.display = 'none';
      }
    });
  
    // Validación de la confirmación de la contraseña
    confirmPasswordInput.addEventListener('input', function() {
      const confirmError = document.getElementById('confirmError');
      const confirmPasswordValue = confirmPasswordInput.value;
      const passwordValue = passwordInput.value;
  
      if (confirmPasswordValue !== passwordValue) {
        confirmError.textContent = 'Las contraseñas no coinciden';
        confirmError.style.display = 'block';
      } else {
        confirmError.style.display = 'none';
      }
    });
  
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const emailError = document.getElementById('emailError');
      const passwordError = document.getElementById('passwordError');
      const confirmError = document.getElementById('confirmError');
  
      
      if (emailError.style.display === 'block' || passwordError.style.display === 'block' || confirmError.style.display === 'block') {
        alert('Por favor corrige los errores antes de enviar el formulario');
        return;
      }
  
      
      window.location.href = 'eleccion_asientos/index.html'; 
    });
  });
  
  