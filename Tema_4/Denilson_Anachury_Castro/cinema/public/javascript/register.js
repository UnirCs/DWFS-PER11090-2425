import {
  validateConfirmPassword,
  validateEmail,
  validateFullName,
  validatePassword,
  validateUsername
} from './validations.js'

const $ = (el) => document.querySelector(el)
const $$ = (el) => document.querySelectorAll(el)

const USER_NAME_KEY = 'UNIRC_USER_NAME'

window.onload = () => {

  $('form').addEventListener('submit', (event) => {
    console.log(event)
    event.preventDefault()

    // validate form inputs
    validateFullName()
    validateUsername()
    validatePassword()
    validateConfirmPassword()
    validateEmail()

    if ($$('form .error').length === 0) {
      localStorage.setItem(USER_NAME_KEY, $('#fullName').value)
      window.location.replace('cinema.html')
    } else {
      alert('Por favor, corrija los errores antes de enviar el formulario.')
    }
  })
}
