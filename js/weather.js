const weather = document.querySelector("#Weather span:first-child");
const city = document.querySelector("#Weather span:last-child");
const API_KEY = "842e5aa5e296462eaea5ef1511485b8c";

function onGeoPass(position){
    const lat= position.coords.latitude;
    const lng= position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(Response=> Response.json())
        .then(data=>{
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Cant find you, no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoPass,onGeoError); 
