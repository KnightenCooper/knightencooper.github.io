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



 // Calculate Wind Chill
 var high = parseFloat(document.getElementById('high').innerText); // get temp high from html
 var windSpeed = parseFloat(document.getElementById('windSpeed').innerText); // get windspeed from html
 var windChill;

 if (high > 50 || windSpeed < 3.0) {
  windChill = "N/A";
} else {
  windChill = 35.74 + (0.6215 * high) - (35.75 * ((Math.pow(windSpeed, 0.16)))) + 0.4275 * high * ((Math.pow(windSpeed, 0.16)));
  windChill = Math.round(windChill * 10) / 10;
}

document.getElementById("windChill").innerText = windChill;

const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=91c15804068ebda77b0923c7c0e7d30b";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("high").textContent = jsObject.main.temp_max;
    document.getElementById("windSpeed").textContent = jsObject.wind.speed;
    document.getElementById("humidity").textContent = jsObject.main.humidity;
    document.getElementById("currently").textContent =
      jsObject.weather[0].description;

    // Calculate Wind Chill
    var windSpeed = jsObject.wind.speed;
    var high = jsObject.main.temp_max;
    var windChill;

    if (high > 50 || windSpeed < 3.0) {
      windChill = "N/A";
    } else {
      windChill =
        35.74 +
        0.6215 * high -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * high * Math.pow(windSpeed, 0.16);
      windChill = Math.round(windChill * 10) / 10;
    }
    document.getElementById("windChill").innerText = windChill; // set HTML with id "windChill" with the value stored in windChill variable
  });

// have to change from weather to forecast in API url in order to get 5 day forecast information
const forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=91c15804068ebda77b0923c7c0e7d30b";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObjectForecast) => {
    console.log(jsObjectForecast);
    var sum = 0;
    for (i = 0; i < jsObjectForecast.list.length; i++) {
      var time = jsObjectForecast.list[i].dt_txt;
      time = String(time);

      if (time.includes("18:00:00")) {
        sum = sum + 1;
        var number;
        var image;
        var sumString = String(sum);
        number = "day-" + sumString;
        image = "image-" + sumString;
        var html = Math.round(jsObjectForecast.list[i].main.temp) + " °F";
        document.getElementById(number).innerText = html;

        var image_src =
          "https://openweathermap.org/img/w/" +
          jsObjectForecast.list[i].weather[0].icon +
          ".png";
        var image_alt = (alt = jsObjectForecast.list[i].weather[0].description);

        document.getElementById(image).setAttribute("src", image_src); // focus on the setAttribute() method
        document.getElementById(image).setAttribute("alt", image_alt);
      }
    }
  });

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

