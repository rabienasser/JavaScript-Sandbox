const deadline = new Date('01/01/2022').getTime();
const loading = document.getElementById('loading');
const content = document.getElementById('content');

(function load() {
    loading.style.display = 'block'
    setTimeout(displayCountdown, 1000);
    content.style.display = 'none'
})();

function displayCountdown() {
    let time = setInterval(() => {
        let now = new Date().getTime();
        let timeLeft = deadline - now;
    
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(timeLeft % (1000 * 60) / 1000);
        let year = new Date().getFullYear() + 1;
    
    
        document.getElementsByClassName('days')[0].innerHTML = days
        document.getElementsByClassName('hours')[0].innerHTML = hours
        document.getElementsByClassName('minutes')[0].innerHTML = minutes
        document.getElementsByClassName('seconds')[0].innerHTML = seconds
        document.getElementById('year').innerHTML = year

        content.style.display = 'flex';
        loading.style.display = 'none';
    }, 1000)
}
