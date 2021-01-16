// adds the last modified time to variable lastModified
var lastModified = document.lastModified;
// sends lastmodified time to <span id="last_modified"></span> in footer
document.querySelector("#last_modified").innerHTML = lastModified;

// gets current year and stores in year
var year = new Date().getFullYear();
// sends current year to <span id="year"></span> in footer
document.querySelector("#year").innerHTML = year;

