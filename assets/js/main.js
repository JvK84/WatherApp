function getWeatherUrlByLocationByDay(cityLocation, date) {
    let fullDay = {
        dd: date.getDate(),
        mm: date.getMonth() + 1,
        yyyy: date.getFullYear(),
    };
    return `${cityLocation}/${fullDay.yyyy}/${fullDay.mm}/${fullDay.dd}/`;
}

const HTML_WindData = document.querySelector(".wind__data");
/************************** SET UP **************************/
const date = new Date();
const ft = new Fetch();
var cityLocation = 766273;
var city = 'Madrid';

/************************** HTML **************************/
const cityName = document.getElementById('city__name');
const stateIcon = document.getElementById('state__icon');
const stateName = document.getElementById('state__name');
const tempData = document.getElementById('temp__data');
const windData = document.getElementById('wind__data');
const humidityData = document.getElementById('humidity__data');
const visibilityData = document.getElementById('visibility__data');
const airPreasureData = document.getElementById('airPreasure__data');

var url = getWeatherUrlByLocationByDay(cityLocation, date);
var data = ft.getWeatherByUrl(cityLocation)
    .then(data => {
        stateIcon.src = `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`;
        stateName.innerHTML = data.weather_state_name;
        tempData.innerHTML = Math.round(data.wind_speed) + '<span>ยบC</span>';
        cityName.innerHTML = `<i class="uil uil-map-marker"></i> ${city}`;
        windData.innerHTML = `${data.wind_speed} nmp`;
        humidityData.innerHTML = data.visibility;
        visibilityData.innerHTML = data.wind_speed;
        airPreasureData.innerHTML = data.air_pressure;

    });
        /*
data.air_pressure = wth.air_pressure,
data.humidity = wth.humidity,
data.max_temp = wth.max_temp,
data.min_temp = wth.humidimin_tempty,
data.the_temp = wth.the_temp,
data.visibility = wth.visibility,
data.wind_direction = wth.wind_direction,
data.wind_direction_compass = wth.wind_direction_compass,
data.wind_speed = wth.wind_speed*/