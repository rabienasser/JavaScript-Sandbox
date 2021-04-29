const userName = document.querySelector('.username')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirm-password')
const submit = document.querySelector('button')


function createUserName() {
    console.log(userName.value)
}

function createEmail() {
    console.log(email.value)
}

function createPassword() {
    console.log(password.value)
}

function checkPassword() {
    console.log(confirmPassword.value)
}


submit.addEventListener('click', (e) => {
    createUserName();
    createEmail();
    createPassword();
    checkPassword();
    e.preventDefault();
})