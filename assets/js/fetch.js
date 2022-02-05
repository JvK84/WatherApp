class Fetch {
    async getWeatherByUrl(url) {

        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${url}`);
        const responseJSON = await response.json();
        const parseJSON = JSON.parse(JSON.stringify(responseJSON));
        const lastWeather = new Object(parseJSON.consolidated_weather).pop();

        return lastWeather;
    }
}