const showRulesBtn = document.querySelector('.rules-btn');
const closeShowRulesBtn = document.querySelector('#close-btn');
const rules = document.querySelector('.rules');

showRulesBtn.addEventListener('click', (e) => {
    rules.classList.add('show');
})

closeShowRulesBtn.addEventListener('click', (e) => {
    rules.classList.remove('show');
})