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
        const townsA = [5, 1, 6]
        for (let i = 0; i < townsA.length; i++) {
            let information = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let h3_1 = document.createElement('h4');
            let h3_2 = document.createElement('h4');
            let h3_3 = document.createElement('h4');
            let img = document.createElement('img');

            h2.textContent = towns[townsA[i]].name;
            h3.textContent = '"' + towns[townsA[i]].motto + '"';
            h3_1.textContent = 'Year Founded: ' + towns[townsA[i]].yearFounded;
            h3_2.textContent = 'Population: ' + towns[townsA[i]].currentPopulation;
            h3_3.textContent = 'Annual Rainfall: ' + towns[townsA[i]].averageRainfall + '"';
            img.setAttribute('src', 'images/' + towns[townsA[i]].photo);
            img.setAttribute('alt', towns[townsA[i]].name + 'photo');

            information.appendChild(h2);
            information.appendChild(h3);
            information.appendChild(h3_1);
            information.appendChild(h3_2);
            information.appendChild(h3_3);
            information.appendChild(img);

            document.querySelector('div.towns').appendChild(information);



        }
    });