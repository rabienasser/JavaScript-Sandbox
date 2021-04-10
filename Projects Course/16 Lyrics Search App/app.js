const form = document.querySelector('#form');
const search = document.querySelector('.search');
const result = document.querySelector('#result');
const more = document.querySelector('#more');

const apiURL = 'https://api.lyrics.ovh';

// Search by song or artist
async function searchSongs(term) {
    // Using .then
    // fetch(`${apiURL}/suggest/${term}`)
    // .then(res => res.json())
    // .then(data => console.log(data));

    // Using async and await
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();

    console.log(data);

    showData(data);
}

// Show song and artist in DOM
function showData(data) {
    let output = '';

    data.data.forEach(song => {
       output += `
      <li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" data-artist="${song.artist.name}" data-songtitle=" ${song.title}">Get Lyrics</button>
      </li>
       `;
    });

    result.innerHTML = `
    <ul class="songs">${output}</ul>
    `;

    if(data.prev || data.next) {
        more.innerHTML = `
        ${data.prev ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>` : '' }
        ${data.next ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Next</button>` : '' }
        `;
    } else {
        more.innerHTML = '';
    }
}

 // get prev and Next results
 async function getMoreSongs(url) {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/$`);
    const data = await res.json();

    console.log(data);

    showData(data);
}


// Get lyrics for song
async function getLyrics(artist, song) {
    const res = await fetch(`${apiURL}/v1/${artist}/${song}`);
    const data = await res.json();

    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

    result.innerHTML = `<h2><strong>${artist}</strong> - ${song}</h2>
    <span>${lyrics}</span>`;

    more.innerHTML = '';
}


// Event listeners
form.addEventListener('submit', (e) => {

    const searchTerm = search.value.trim();     //.trim() just eliminates the whitespace 

    if(!searchTerm) {
        alert('Please type in a search term')
    } else {
        searchSongs(searchTerm);    
    }
    
    e.preventDefault();
});


// Get lyrics button click
result.addEventListener('click', e => {
    const clickedEl = e.target;

    if(clickedEl.tagName === 'BUTTON') {
        const artist = clickedEl.getAttribute('data-artist');
        const songTitle = clickedEl.getAttribute('data-songtitle');

        getLyrics(artist, songTitle);
    }

})

