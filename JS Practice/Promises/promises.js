// Fetch API

// Fetching All "Comments"
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    // .then(data => console.log(data[333]))    //fetching 333rd comment
    // .then(data => console.log(data[212].email))  //fetching 212th comment[email]


// Fetching using async/await
const fetchComments = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await res.json()
        console.log('AWAIT/ASYNC EXAMPLE:', data[5])
    } catch {
        console.error(err)
    }
}
fetchComments()


// Using POST method (instead of GET)
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'This is a test',
        body: 'This is a sample body',
        userId: 7,
        userEmail: 'justatest13@gmail.com',
        userAge: 46
    }),
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(res => res.json())
    .then(data => console.log('Post Example', data))


// Updating a Resource
fetch('https://jsonplaceholder.typicode.com/posts/64', {
    method: 'PUT',
    body: JSON.stringify({
        title: 'This is an update',
        body: 'This is a sample update using fetch',
        userId: 7,
        userEmail: 'thisisatest34@gmail.com'
    }),
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(res => res.json())
    .then(data => console.log('Update Example', data))



fetch('https://restcountries.eu/rest/v2/name/Lebanon')
    .then(res => res.json())
    .then (data => console.log(data[0]))



// Promises

// With promises, we no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results;
// Instead of nesting callbacks, we can CHAIN PROMISES for a sequence of asynchronous operations: escaping callback hell

function displayCountry(data) {
    const countriesContainer = document.querySelector('.boxes')

    const html = `
        <div class="country">
        <div class="flag">
        <img src=${data.flag}>
    </div>
    <div class="text">
        <h2>${data.name}</h2>
        <p>${data.region}</p>
        <ul>
            <li>${data.population.toLocaleString()}</li>
            <li>${data.languages[0].name}</li>
            <li>${data.capital}</li>
        </ul>
    </div>
    </div>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html)
}


// Chaining promises
// const getCountryData = function(country) {

//     // Country 1
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             displayCountry(data[0])
//             const neighbor = data[0].borders[0];

//             if(!neighbor) return;

//         // Country 2 (neighbor)
//             return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
//         })
//         .then(res => res.json())
//         .then(data => displayCountry(data))

//         .catch(err => alert(err))  //Error handling w "catch". Only works if fetch promise is rejected
// };

// getCountryData('tanzania')




function whereAmI(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
        if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
        return res.json()
    })
    .then(data => {
        console.log(`You are in ${data.city}, ${data.country}`)

        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
    })
    .then(res => res.json())
    .then(data => displayCountry(data[0]))

    .catch(err => console.log(err, 'an error has occured'))
}

whereAmI(59.437, 24.7536)



// Event loop in practice
console.log('Test Start')   //Executes first because synchronous line of code
setTimeout(() => console.log('0 second timer'), 0)  //Executes last because stored in callback queue which executes AFTER microtasks queue
Promise.resolve('Resolved promise').then (res => console.log(res))  //Executes third because stored in Microtasks which gets priority over regular callbacks
console.log('Test end')     //Executes second because synchronous line of code



// Building a Promise
const lotteryPromise = new Promise(function(resolve, reject) {
    console.log('Lottery draw is happening')

    setTimeout(() => {
        if(Math.random() >= 0.5) {
            resolve('You Win!')
        } else {
            reject('Sorry, you lost')
        }
    }, 3000)
})


// Consuming the Promise
lotteryPromise.then(res => console.log(res))    //Displays succes message
              .catch(err => console.error(err)) //Display failure message




// Async Await
const getCountryData = async function(country) {
    try {
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        const data = await res.json()
        console.log(data)
        displayCountry(data[0])
    
        const neighbor = data[0].borders[0];
    
                if(!neighbor) return;
    
            // Country 2 (neighbor)
            const res2 = await fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
            
            const data2 = await res2.json()
            displayCountry(data2)
    } catch {
        err => console.error(err)  //Error handling w "catch". Only works if fetch promise is rejected
    }
};

getCountryData('haiti')



// More promise practice
const qualified = true

const checkIfQualify = new Promise(function(resolve, reject) {

    if(qualified) {
        resolve('Your nation has qualified')
    } else {
        reject('Sorry your nation did not qualify')
    }
})

checkIfQualify.then(answer => console.log(answer))
       .catch(err => console.error(err))




// Multiple promises
function cleanRoom() {
    return new Promise((resolve, reject) => {
        resolve('Cleaned the room')
    })
}
function removeGarbage() {
    return new Promise((resolve, reject) => {
        resolve('Removed garbage')
    })
}
function winIceCream() {
    return new Promise((resolve, reject) => {
        resolve('Won icecream!')
    })
}

Promise.all([cleanRoom(), removeGarbage(), winIceCream()])
.then(() => {
    console.log('all finished')
})