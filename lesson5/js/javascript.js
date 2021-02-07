const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */
 var year = new Date().getFullYear();
 // sends current year to <span id="year"></span> in footer
 document.querySelector("#year").innerHTML = year;
  
var date = new Date();
var day = date.getDay();
var listOfDays = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//console.log("Today is : " + daylist[day] + ".");
var weekday = listOfDays[day];
  // adds the last modified time to variable lastModified
var lastModified = document.lastModified;
var numberDate = date.getDate();
var monthNumber = date.getMonth();
var listOfMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var month = listOfMonths[monthNumber];
// sends lastmodified time to <span id="last_modified"></span> in footer
document.querySelector("#last_modified").innerHTML = weekday + ", " + numberDate + " " + month + " " + year;


// gets current year and stores in year


  if (day != 5) {
     document.getElementById("banner").style.display = "none";
 }  

  


