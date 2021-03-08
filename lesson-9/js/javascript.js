  var imagesToLoad = document.querySelectorAll("img[data-src]");

  var loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}





//town data
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        var town_numbers = [6, 5, 1]
        for (let i = 0; i < town_numbers.length; i++) {
            let information = document.createElement('article');
            let name = document.createElement('h2');
            let motto = document.createElement('h3');
            let year = document.createElement('h4');
            let population = document.createElement('h4');
            let rainfall = document.createElement('h4');
            let img = document.createElement('img');


            name.textContent = towns[town_numbers[i]].name;
            motto.textContent = '"' + towns[town_numbers[i]].motto + '"';
            year.textContent = 'Year Founded: ' + towns[town_numbers[i]].yearFounded;
            population.textContent = 'Population: ' + towns[town_numbers[i]].currentPopulation;
            rainfall.textContent = 'Annual Rainfall: ' + towns[town_numbers[i]].averageRainfall + '"';
            img.setAttribute('src', 'images/' + towns[town_numbers[i]].photo);
            img.setAttribute('alt', towns[town_numbers[i]].name + 'photo');

            information.appendChild(name);
            information.appendChild(motto);
            information.appendChild(year);
            information.appendChild(population);
            information.appendChild(rainfall);
            information.appendChild(img);

            document.querySelector('div.towns').appendChild(information);



        }
    });