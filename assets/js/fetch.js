class Fetch {
    async getWeatherByUrl(location) {
        let response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${location}`);
        let responseJSON = await response.json();
        let parseJSON = JSON.parse(JSON.stringify(responseJSON));
        let lastWeather = new Object(parseJSON.consolidated_weather).pop();
        //console.log(lastWeather);

        return lastWeather;
    }

    async getLocationByQuery(query) {
        response = await fetch(`https://www.metaweather.com/api/location/search/?query=${query}`);
        responseJSON = await response.json();
        parseJSON = JSON.parse(JSON.stringify(responseJSON));
        firstLocation = new Object(parseJSON.consolidated_weather).pop();
        console.log(firstLocation);

        return firstLocation;
    }
}