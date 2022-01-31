class Fetch {
    async getWeatherByUrl(url) {

        const response = await fetch(

            `https://www.metaweather.com/api/location/${url}`,
            {
                mode: 'no-cors',

            }
        );
        const data = await response.text();
        const json = data === "" ? {} : JSON.parse(data);

        return json;
    }
}