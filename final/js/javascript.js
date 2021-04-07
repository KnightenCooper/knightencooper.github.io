


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





var date = new Date();
var day = date.getDay();
var listOfDays = [
  "Sun",
  "Mon",
  "Tues",
  "Wed",
  "Thurs",
  "Fri",
  "Sat",
];
var sum2 = 0;

for (i = 0; i < 5; i++) {
  sum2 = sum2 + 1;

  var number2;
  var sumString2 = String(sum2);
  number2 = "weekday-" + sumString2;
  day = day + 1;
  if (day > 6) {
    day = 0;
  }
  var weekday = listOfDays[day];

  document.getElementById(number2).innerText = weekday;
}

// Get the events 
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
  return response.json();
})
    .then(function(jsonObject) {
      console.table(jsonObject);
      const towns = jsonObject['towns'];
      const townNumber = [6];

   let card = document.createElement('section');

      for (let i = 0; i<towns.length; i++){
        let p = document.createElement('p');
        p.textContent = towns[townNumber].events[i];
        card.appendChild(p);}

      document.querySelector('div.events').appendChild(card);
    });