const HTML_WindData = document.querySelector(".wind__data");
const date = new Date();
const ft = new Fetch();
var cityLocation = 766273;

/*window.onload = getWeatherUrlByLocationByDay(location, date)*/
var url = getWeatherUrlByLocationByDay(cityLocation, date);
var data = ft.getWeatherByUrl(cityLocation);
console.log(data);



function getWeatherUrlByLocationByDay(cityLocation, date) {
    let fullDay = {
        dd: date.getDate(),
        mm: date.getMonth() + 1,
        yyyy: date.getFullYear(),
    };
    return `${cityLocation}/${fullDay.yyyy}/${fullDay.mm}/${fullDay.dd}/`;
}