// Init weather object
const weather = new Weather('Cleveland', 'United States');

weather.getWeather()
.then(results => {
    console.log(results);
})
.catch(err => console.log(err));