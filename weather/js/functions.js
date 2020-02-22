'use strict';

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
    let hour="one";
    timeBall(hour);
});

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
    let hr = document.querySelectorAll("."+hour);
    for (let item of hr){
        item.classList.add("ball");
    }
}

/* *************************************
* Change Background Image
************************************* */

function changeSummaryImage(weather){
    
}