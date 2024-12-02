const form = document.getElementById('form');
const nameLastName = document.getElementById('nameLastName');
const nickname = document.getElementById('nickname');
const password = document.getElementById('password');
const rePassword = document.getElementById('password-repeat');
const email = document.getElementById('email');

let validatePassword = false;

nameLastName.addEventListener('input', () => {
    if (nameLastName.value !== "") {
        nameLastName.setAttribute('class', '_form_item _form_item-valid');
    } else {
        nameLastName.setAttribute('class', '_form_item');
    }
});

nickname.addEventListener('input', () => {
    if (nickname.value !== "") {
        nickname.setAttribute('class', '_form_item _form_item-valid');
    } else {
        nickname.setAttribute('class', '_form_item');
    }
});

email.addEventListener('input', () => {
    for (let value of email.value) {
        if (value === '@') {
            email.setAttribute('class', '_form_item _form_item-valid');
        }
    }
});

rePassword.addEventListener('input', () => {
    if (password.value !== rePassword.value) {
        password.setAttribute('class', '_form_item _form_item-invalid');
        rePassword.setAttribute('class', '_form_item _form_item-invalid');

    } else {
        password.setAttribute('class', '_form_item _form_item-valid');
        rePassword.setAttribute('class', '_form_item _form_item-valid');
        validatePassword = true;
    }
});

form.addEventListener('submit', (e) => {
    console.log(form)
    e.preventDefault();
    if (validatePassword === true) {
        window.location.href = './views/cinema.html';
    }
});
