
const apiURL =
 "https://api.openweathermap.org/data/2.5/onecall?lat=37.209&lon=93.292&exclude=hourly&units=imperial&appid=91c15804068ebda77b0923c7c0e7d30b";
  
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("temp").textContent = jsObject.current.temp;
    document.getElementById("description").textContent = jsObject.current.weather[0].description;
    document.getElementById("humidity").textContent = jsObject.current.humidity;
  });

  
  
  // have to change from weather to forecast in API url in order to get 5 day forecast information
  const forecastURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=37.209&lon=93.292&exclude=hourly&units=imperial&appid=91c15804068ebda77b0923c7c0e7d30b";
  fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObjectForecast) => {
    console.log(jsObjectForecast);
    var sum = 0;
    for (i = 0; i < 3; i++) {
        sum = sum + 1;
        var number;
        
        var sumString = String(sum);
        number = "day-" + sumString;
        var html = Math.round(jsObjectForecast.daily[i].feels_like.day) + " °F";
        document.getElementById(number).innerText = html;
  
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
  
