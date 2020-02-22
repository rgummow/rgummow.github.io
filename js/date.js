//moved to the functions.js file
document.getElementById('copyrightyear').textContent= new Date().getFullYear();
const options = {weekday: 'long', day:'numeric', month:'long', year: 'numeric'};
document.getElementById('currentdate').textContent= new Date().toLocaleDateString('en-us', options);
document.getElementById('lastmodified').textContent = document.lastModified;