
function load() {
    cityLocation = 766273;
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

/*function searchLocation() {
    var query = document.getElementById('location__input').value;
    var locationId;

    ft.getLocationByQuery(query)
        .then(data => {
            locationId = data.woeid;
            city = data.title;
        })
    callWeather(locationId);
}*/

/************************** SET UP **************************/
const date = new Date();
const ft = new Fetch();
var stringOfDay = getDayByDate(date);
var city;
var cityLocation;
var defaultData;

/************************** HTML **************************/
let cityName = document.getElementById('city__name');
let dateName = document.getElementById('date__name');
let stateIcon = document.getElementById('state__icon');
let stateName = document.getElementById('state__name');
let tempData = document.getElementById('temp__data');
let windData = document.getElementById('wind__data');
let humidityData = document.getElementById('humidity__data');
let visibilityData = document.getElementById('visibility__data');
let airPreasureData = document.getElementById('airPreasure__data');
let searchForm = document.getElementById('search__form');
let locationInput = document.getElementById('location__input')



navigator.geolocation.getCurrentPosition(
    function (position) {
        console.log(position.coords.latitude, position.coords.longitude);

        function reqListener() {
            console.log(this.responseText);
        }
    }
)


const getWeatherInfo = async (city) => {

    const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${city}&units=metric`, {
        'headers': {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
        }
    });

    const data = response.json();
    console.log(data);

    /*setBackground(data);
    setInfo(data);*/
}

searchForm.addEventListener('submit', x => {
    x.preventDefault();
    console.log(locationInput.value);
    getWeatherInfo(locationInput.value);
})

window.onload = () => {
    cityLocation = 766273;
    city = 'Madrid';
    defaultData = callWeather(cityLocation);
}