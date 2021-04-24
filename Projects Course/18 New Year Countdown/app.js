const deadline = new Date('01/01/2022').getTime();
// let year = 


let time = setInterval(() => {
    let now = new Date().getTime();
    let timeLeft = deadline - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(timeLeft % (1000 * 60) / 1000);


    document.getElementsByClassName('days')[0].innerHTML = days
    document.getElementsByClassName('hours')[0].innerHTML = hours
    document.getElementsByClassName('minutes')[0].innerHTML = minutes
    document.getElementsByClassName('seconds')[0].innerHTML = seconds
}, 1000)


