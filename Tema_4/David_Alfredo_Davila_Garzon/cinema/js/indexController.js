document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const names = document.getElementById('names');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const repassword = document.getElementById('repassword');
    const email = document.getElementById('email');
    let isValid = true;

    hideAllErrors();
    if (!names.value.trim()) {
      showError(names);
      isValid = false;
    }

    if (!username.value.match(/^[a-zA-Z0-9_]{4,16}$/)) {
      showError(username);
      isValid = false;
    }

    if (!password.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)) {
      showError(password);
      isValid = false;
    }

    if (password.value !== repassword.value) {
      showError(repassword);
      isValid = false;
    }

    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      showError(email);
      isValid = false;
    }

    if (isValid) {
      window.location.replace('cine.html');
    }
  });

  const showError = element => {
    const errorDiv = element.parentElement.querySelector('.error');
    if (errorDiv) {
      errorDiv.style.display = 'block';
    }
    element.classList.add('invalid');
  }

  const hideAllErrors = () => {
    const errors = document.querySelectorAll('.error');
    const inputs = document.querySelectorAll('input');

    errors.forEach(error => error.style.display = 'none');
    inputs.forEach(input => input.classList.remove('invalid'));
  }

  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      this.classList.remove('invalid');
      const errorDiv = this.parentElement.querySelector('.error');
      if (errorDiv) {
        errorDiv.style.display = 'none';
      }
    });
  });
});
