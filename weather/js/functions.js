'use strict';

// var pageNav = document.querySelector('#page-nav');
// var statusContainer = document.querySelector('#status');
// var contentContainer = document.querySelector('#main-content');

// var $ = document.querySelector.bind(document);
// var $$ = document.querySelectorAll.bind(document);
// // var pageNav = $('#page-nav');

// var locStore = window.localStorage;
// var sessStore = window.sessionStorage;
// // locStore.setItem("itemLabel",valueVariable);

/* *************************************
*  Weather Site JavaScript Functions
************************************* */

// Listen for the DOM to finish building
document.addEventListener("DOMContentLoaded", function(){
    buildModDate();
    const menuButton = document.querySelector(".ham");
    menuButton.addEventListener('click', mobileMenu);
    // Variables for Wind Chill function
     let temp = 18;
    let speed = 36;
    let feelTemp = document.getElementById('feelTemp');
    feelTemp.innerHTML = buildWC(speed, temp);
    // The Time Indictor function
    let hour="3";
    timeBall(hour);
    //Implement the current weather background image
    let condition ="snow";
    changeSummaryImage(condition);
    //Get weather json data
    // let weatherURL = "/rgummow.github.io/weather/js/idahoweather.json";
    // fetchWeatherData(weatherURL);
});

//Builds copyright date
document.getElementById('copyrightyear').textContent= new Date().getFullYear();

// Build the last modified date
function buildModDate(){
    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let lastMod = new Date(document.lastModified);
    const dayName = dayArray[lastMod.getDay()];
    const monthName = monthArray[lastMod.getMonth()];
    const formattedDate = dayName+", "+lastMod.getDate() +" "+monthName+", "+lastMod.getFullYear();
    document.querySelector('#lastmodified').innerText = formattedDate;
   }
      
   // Handles Small Screen Menu
   const menuButton = document.querySelector(".ham");
   menuButton.addEventListener('click',function(event){
     const navList = document.querySelector('#navList');
     navList.classList.toggle("mobileNav");
   })

   function mobileMenu(event){
    const navList = document.querySelector('#navList');
    navList.classList.toggle("mobileNav");
  }

/* *************************************
*  Calculate Wind Chill Temperature
************************************* */
  
function buildWC(speed, temp) {
    let feelTemp = document.getElementById('feelTemp');
    //Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);
    // Round the answer down to integer
    wc = Math.floor(wc);
    // If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;
    // Display the windchill
    console.log(wc);
    wc = 'Feels like: ' + wc + '&deg;F';
    //feelTemp.innerHTML = wc;
    return wc;
}

/* *************************************
*  Time Indicator Function
************************************* */

function timeBall(hour){
    // Find all "ball" classes and remove them
    let x = document.querySelectorAll(".ball");
    for (let item of x) {
        console.log(item);
        item.classList.remove("ball");
    }
    
    // Find all hours that match the parameter and add the "ball" class
    let hr = document.querySelectorAll(".i"+hour);
    for (let item of hr){
        item.classList.add("ball");
    }
}

/* *************************************
* Change Background Image
************************************* */
function changeSummaryImage(condition){
    let container = document.querySelector("#curWeather");
    console.log(condition);
    container.classList.add(condition);
}

// /* *************************************
// *  Fetch Weather Data
// ************************************* */
// function fetchWeatherData(weatherURL){
//     let cityName = 'Preston'; // The data we want from the weather.json file
//     fetch(weatherURL)
//     .then(function(response) {
//     if(response.ok){
//     return response.json();
//     }
//     throw new ERROR('Network response was not OK.');
//     })
//     .then(function(data){
//       // Check the data object that was retrieved
//       console.log(data);
//       // data is the full JavaScript object, but we only want the preston part
//       // shorten the variable and focus only on the data we want to reduce typing
//       let p = data[cityName];
  
//       // **********  Get the location information  **********
//       let locName = p.City;
//       let locState = p.State;
//       // Put them together
//       let fullName = locName+', '+locState;
//       // See if it worked, using ticks around the content in the log
//       console.log(`fullName is: ${fullName}`);
//       // Get the longitude and latitude and combine them to
//       const latLong = p.properties.relativeLocation.geometry.coordinates[1] + ","+ p.properties.relativeLocation.geometry.coordinates[0];
//       console.log(latLong);
//       // a comma separated single string
//       // Create a JSON object containing the full name, latitude and longitude
//       // and store it into local storage.
//       const prestonData = JSON.stringify({fullName,latLong});
//       locStore.setItem("Preston,ID", prestonData);
  
//       // **********  Get the current conditions information  **********
//       // As the data is extracted from the JSON, store it into session storage
//       // Get the temperature data
  
  
//       // Get the wind data 
  
  
//       // Get the hourly data using another function - should include the forecast temp, condition icons and wind speeds. The data will be stored into session storage.
  
//     })
//     .catch(function(error){
//     console.log('There was a fetch problem: ', error.message);
//     statusContainer.innerHTML = 'Sorry, the data could not be processed.';
//     })
//   }