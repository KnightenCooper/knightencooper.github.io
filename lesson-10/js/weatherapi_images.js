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



















// WORKING CODE FOR DAYS OF WEEK AND TEMPERATURE IN CASE EVERYTHING BREAKS
//     const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=91c15804068ebda77b0923c7c0e7d30b";
//     fetch(apiURL)
//       .then((response) => response.json())
//       .then((jsObject) => {
//         console.log(jsObject);

//         document.getElementById('high').textContent = jsObject.main.temp_max;
//         document.getElementById('windSpeed').textContent = jsObject.wind.speed;
//         document.getElementById('humidity').textContent = jsObject.main.humidity;
//         document.getElementById('currently').textContent = jsObject.weather[0].description;
//         // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
//         // const desc = jsObject.weather[0].description;  // note how we reference the weather array
//         // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
//         // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
//         // document.getElementById('icon').setAttribute('alt', desc);

//     // Calculate Wind Chill
//      var windSpeed = jsObject.wind.speed;
//      var high = jsObject.main.temp_max;
//      var windChill;

//      if (high > 50 || windSpeed < 3.0) {
//       windChill = "N/A";
//     } else {
//       windChill = 35.74 + (0.6215 * high) - (35.75 * ((Math.pow(windSpeed, 0.16)))) + 0.4275 * high * ((Math.pow(windSpeed, 0.16)));
//       windChill = Math.round(windChill * 10) / 10;
//     }
//     document.getElementById("windChill").innerText = windChill; // set HTML with id "windChill" with the value stored in windChill variable
//       });

//     // have to change from weather to forecast in API url in order to get 5 day forecast information
//       const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=91c15804068ebda77b0923c7c0e7d30b";
//     fetch(forecastURL)
//       .then((response) => response.json())
//       .then((jsObjectForecast) => {
//         console.log(jsObjectForecast);
//         var sum = 0;
//     for (i = 0; i < jsObjectForecast.list.length; i++) {

//     var time = jsObjectForecast.list[i].dt_txt;
//     time = String(time);

//     if (time.includes("18:00:00")) {
//     sum = sum + 1;
//     var number;
//     var sumString = String(sum);
//     number = "day-" + sumString;

//     var html = jsObjectForecast.list[i].main.temp + " °F"
//     document.getElementById(number).innerText = html;
//     }
//     }

//       });

//       var date = new Date();
//     var day = date.getDay();
//     var listOfDays = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//     var sum2 = 0;

//     for (i = 0; i < 5; i++) {
//         sum2 = sum2 + 1;

//         var number2;
//         var sumString2 = String(sum2);
//         number2 = "weekday-" + sumString2;
//         day = day + 1;
//         if (day > 6) {
//             day = 0;
//         }
//         var weekday = listOfDays[day];

//         document.getElementById(number2).innerText = weekday;
//         }
