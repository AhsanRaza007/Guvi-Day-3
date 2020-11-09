// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


let API_KEY = "d4de9a989817001b17091776b492bea1";

function getDataByCityName(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data));
}

function getDataByCityId(city_id){
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${API_KEY}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data));
}
function getDataByLatLon(lon, lat){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data));
}

getDataByCityName('kolkata');
//lon: 88.37, lat: 22.57
getDataByLatLon(88.37, 22.57);
//city_id:1275004
getDataByCityId(1275004);
