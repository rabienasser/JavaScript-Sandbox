class Weather {
    constructor(city, state) {
        this.appKey = '3ad9369f5dd481e8bc0a070cb5745947';
        this.city = city;
        this.state = state
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

        const responseData = await
    }
}