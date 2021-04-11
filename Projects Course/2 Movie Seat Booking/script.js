const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = Number(movieSelect.value);


// Functions
function addSeats() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // Copy selected seats into new Arr
    // Map through Array
    // return a new array indexes
    const seatsIndex = [...selectedSeats].map(seat => {
        return [...seats].indexOf(seat);
    });

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}


function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


// Event Listeners
container.addEventListener('click', e => {
    const click = e.target;
    
    if(click.classList.contains('seat') && !click.classList.contains('occupied')) {
       click.classList.toggle('selected');

       addSeats();
    }
})

movieSelect.addEventListener('change', e => {
    ticketPrice = Number(e.target.value)
    setMovieData(e.target.selectedIndex, e.target.value)
    addSeats();
})

