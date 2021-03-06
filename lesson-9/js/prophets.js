const requestURL =
  "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];
    console.table(jsonObject);
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let h4 = document.createElement("h4");
      let img = document.createElement("img");

      h2.textContent = prophets[i].name + " " + prophets[i].lastname;
      h3.textContent = "Day of Birth: " + prophets[i].birthdate;
      h4.textContent = "Location of Birth: " + prophets[i].birthplace;
      img.setAttribute("src", prophets[i].imageurl);
      img.setAttribute(
        "alt",
        prophets[i].name +
          " " +
          prophets[i].lastname +
          " - " +
          prophets[i].order
      );

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(img);

      document.querySelector("div.prophet-cards").appendChild(card);
    }
  });
