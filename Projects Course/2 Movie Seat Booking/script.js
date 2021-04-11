const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const clearBtn = document.querySelector('.clear-btn');

populateUI();

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


// Get data from local storage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

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

clearBtn.addEventListener('click', e => {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    localStorage.removeItem('selectedSeats');
    location.reload();
})


// Inital count and total set
addSeats();

