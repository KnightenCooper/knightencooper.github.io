// const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// fetch(requestURL)
//   .then(function(response) {
//       return response.json();
//   })
//   .then(function(jsonObject) {
//       console.table(jsonObject);
//       const towns = jsonObject['events'];
//       var town_numbers = [6, 2, 0]
//       for (let i = 0; i < towns.length; i++) {
//           let name = document.createElement('h2');
//           let motto = document.createElement('h3');
//           let year = document.createElement('h4');
//           let population = document.createElement('h4');
//           let rainfall = document.createElement('h4');
//           let img = document.createElement('img');


//           name.textContent = towns[town_numbers[i]].name;
//           motto.textContent = '"' + towns[town_numbers[i]].motto + '"';
//           year.textContent = 'Year Founded: ' + towns[town_numbers[i]].yearFounded;
//           population.textContent = 'Population: ' + towns[town_numbers[i]].currentPopulation;
//           rainfall.textContent = 'Annual Rainfall: ' + towns[town_numbers[i]].averageRainfall + '"';
//           img.setAttribute('src', 'images/' + towns[town_numbers[i]].photo);
//           img.setAttribute('alt', towns[town_numbers[i]].name + 'photo');

//           information.appendChild(name);
//           information.appendChild(motto);
//           information.appendChild(year);
//           information.appendChild(population);
//           information.appendChild(rainfall);
//           information.appendChild(img);

//           document.querySelector('div.towns').appendChild(information);



//       }
//   });









const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
  return response.json();
})
    .then(function(jsonObject) {
      console.table(jsonObject);
      const towns = jsonObject['towns'];
      const townNumber = [0];

   let card = document.createElement('section');

      for (let i = 0; i<towns.length; i++){
        let p = document.createElement('p');
        p.textContent = towns[townNumber].events[i];
        card.appendChild(p);}

      document.querySelector('div.events').appendChild(card);
    });