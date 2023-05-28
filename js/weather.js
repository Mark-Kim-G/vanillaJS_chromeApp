function onGeoPass(position){
    const lat= position.coords.latitude;
    const lng= position.coords.longitude;
    console.log("you live in", lat , lng);
}

function onGeoError(){
    alert("Cant find you, no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoPass,onGeoError);