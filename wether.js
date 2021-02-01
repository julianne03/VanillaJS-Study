const API_KEY = "0b4ff593f501415408714b6b14fe3c23";
const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;  //위도
    const longitude = position.coords.longitude;  //경도
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("Can't access geo location.");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {

    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null || loadedCoords === 'undefined') {
        askForCoords();
    } else {
        //get weather
    }
}

function init() {
    loadCoords();
}

init();