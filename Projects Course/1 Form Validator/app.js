const userName = document.querySelector('.username')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirm-password')
const submit = document.querySelector('button')


function createUserName() {
    re = /^(\w{1})((\w|\W){2,15})$/;

    if(!re.test(userName.value)) {
        console.log('Username must be between 3 and 15 characters')
        userName.classList.add('invalid')
    } else {
        console.log('success')
    }
}


function createEmail() {
    re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if(!re.test(email.value)) {
        console.log('Please enter a valid email address')
        email.classList.add('invalid')
    } else {
        console.log('success')
    }
}


function createPassword() {
    re = /^(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\W]{8,15}$/;

    if(password.value.length < 8) {
       console.log('password must be at least 8 characters')
       password.classList.add('invalid')
    } else if(password.value.length > 15) {
        console.log('password must not exceed 15 characters')
        password.classList.add('invalid')
    } else {
        if(!re.test(password.value)) {
            console.log('Password must contain at least 1 uppercase letter, 1 number, and 1 special character')
            password.classList.add('invalid')
        } else {
            console.log('success')
        }
    }
}


function checkPassword() {
    if(password.value !== confirmPassword.value) {
        console.log('passwords do not match')
        confirmPassword.classList.add('invalid')
    } else {
        console.log('success')
    }
}


submit.addEventListener('click', (e) => {
    createUserName();
    createEmail();
    createPassword();
    checkPassword();
    e.preventDefault();
})