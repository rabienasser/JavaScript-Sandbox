const userName = document.querySelector('.username')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirm-password')
const small = document.querySelectorAll('small')
const form = document.querySelector('form')


function createUserName() {
    re = /^(\w{1})((\w|\W){2,15})$/;
    const error = document.querySelector('.username-error')

    if(!re.test(userName.value)) {
        userName.classList.add('invalid')
        error.style.display = 'flex';
    } else {
        userName.classList.add('valid')
        error.style.display = 'none'
    }
}


function createEmail() {
    re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    const error = document.querySelector('.email-error')

    if(!re.test(email.value)) {
        email.classList.add('invalid')
        error.style.display = 'flex'
    } else {
        email.classList.add('valid')
        error.style.display = 'none'
    }
}


function createPassword() {
    re = /^(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\W]{8,15}$/;
    const error = document.querySelector('.password-error')

    if(password.value.length < 8) {
       password.classList.add('invalid')
       error.textContent = 'password must be at least 8 characters'
       error.style.display = 'flex'
    } else if(password.value.length > 15) {
        password.classList.add('invalid')
        error.textContent = 'Password must not exceed 15 characters'
        error.style.display = 'flex'
    } else if(password.value.length >= 8 && password.value.length <= 15){
        if(!re.test(password.value)) {
            password.classList.add('invalid')
            error.textContent = 'Password must contain at least 1 uppercase letter, 1 number, and 1 special character'
            error.style.display = 'flex'
        } else {
            password.classList.add('valid')
            error.style.display = 'none'
        }
    }
}


function checkPassword() {
    const error = document.querySelector('.confirm-error')

    if(password.value !== confirmPassword.value || confirmPassword.value === '') {
        confirmPassword.classList.add('invalid')
        error.style.display = 'flex'
    } else {
        confirmPassword.classList.add('valid')
        error.style.display = 'none'
    }
}


form.addEventListener('submit', (e) => {
    createUserName();
    createEmail();
    createPassword();
    checkPassword();
    e.preventDefault();
})