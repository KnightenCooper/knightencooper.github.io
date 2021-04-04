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