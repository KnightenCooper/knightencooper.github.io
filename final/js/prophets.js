const requestURL =
  "https://knightencooper.github.io/final/json/directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const company = jsonObject["company"];
    console.table(jsonObject);
    for (let i = 0; i < company.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let h4 = document.createElement("h4");
      let img = document.createElement("img");

      h2.textContent = company[i].name + " " + company[i].lastname;
      h3.textContent = "Day of Birth: " + company[i].birthdate;
      h4.textContent = "Location of Birth: " + company[i].birthplace;
      img.setAttribute("src", company[i].imageurl);
      img.setAttribute(
        "alt",
        company[i].name +
          " " +
          company[i].lastname +
          " - " +
          company[i].order
      );

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(img);

      document.querySelector("div.prophet-cards").appendChild(card);
    }
  });
