var url="r"

function getWeatherData(url) {
    fetch(url)
    .then (function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not OK.');
    }
})
.then (function (data) {
    console.log(data);
    let cityName= data.Preston.properties.relativeLocation.properties.city;
    console.log(cityName);
    let sessStore = window.sessionStorage;
    sessStore.setItem("cityName", cityName);
    document.getElementsByTagName("h1")[0].innerHTML = sessStore.getItem("cityName");
})
.catch (function(error) {
    console.log('There was a fetch problem: ', error.message);
})
}
 
getWeatherData (url);