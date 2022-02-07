function load() {
    var cityLocation = 766273;
    city = 'Madrid';
    defaultData = callWeather(cityLocation);
}

function getDayByDate(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return days[date.getDay()] + ', ' + date.getDate() + ' ' + monthNames[date.getDate()];
}

function callWeather(cityLocation) {
    ft.getWeatherByUrl(cityLocation)
        .then(data => {
            stateIcon.src = `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`;
            stateName.innerHTML = data.weather_state_name;
            dateName.innerHTML = `${stringOfDay}`;
            tempData.innerHTML = Math.round(data.the_temp) + '<span>ºC</span>';
            cityName.innerHTML = `<i class="uil uil-map-marker"></i> ${city}`;
            windData.innerHTML = Math.round((data.wind_speed * 1.6093449)) + ' km/h';
            humidityData.innerHTML = data.humidity + ' %';
            visibilityData.innerHTML = Math.round((data.visibility * 1.6093449)) + ' km/h';
            airPreasureData.innerHTML = `${data.air_pressure} mb`;
        });
}

function searchLocation() {
    var query = document.getElementById('location__input').value;
    var locationId;

    ft.getLocationByQuery(query)
        .then(data => {
            locationId = data.woeid;
            city = data.title;
        })
    callWeather(locationId);
}

/************************** SET UP **************************/
const date = new Date();
const ft = new Fetch();
var stringOfDay = getDayByDate(date);
var city;
var defaultData;

/************************** HTML **************************/
const cityName = document.getElementById('city__name');
const dateName = document.getElementById('date__name');
const stateIcon = document.getElementById('state__icon');
const stateName = document.getElementById('state__name');
const tempData = document.getElementById('temp__data');
const windData = document.getElementById('wind__data');
const humidityData = document.getElementById('humidity__data');
const visibilityData = document.getElementById('visibility__data');
const airPreasureData = document.getElementById('airPreasure__data');

window.onload = load();