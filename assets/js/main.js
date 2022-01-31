const API_URL = 'https://www.metaweather.com/api/location/';

var cityLocation = 766273;
var date = new Date();

/*window.onload = weatherByLocationByDay(location, date)*/
var fullUrl = getWeatherUrlByLocationByDay(cityLocation, date)

function getWeatherUrlByLocationByDay(cityLocation, date) {
    let fullDay = {
        dd: date.getDate(),
        mm: date.getMonth() + 1,
        yyyy: date.getFullYear()
    };
    return API_URL + cityLocation + '/' + fullDay.yyyy + '/' + fullDay.mm + '/' + fullDay.dd + '/';
}

fetch('https://www.metaweather.com/api/location/766273/2022/01/31', { mode: 'cors' })
    .then((response) => console.log(response))/*response.json())
    .then((weathers) => {
        const tpl = weathers.map((weather) => '<li>${weather.min_temp} ${weather.max_temp}</li>');
    })*/