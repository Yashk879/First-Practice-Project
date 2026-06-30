let places = [
  {
    name: "Mount Fuji",
    photo: "https://japanupclose.web-japan.org/files/100462016.jpeg",
    details: "Mount Fuji is located in Japan."
  },
  {
    name: "Eiffel Tower",
    photo: "https://eskipaper.com/images/paris-france-eiffel-tower-1.jpg",
    details: "The Eiffel Tower is one of the most famous landmarks in Paris, France."
  },
  {
    name: "Great Wall of China",
    photo: "https://tse1.mm.bing.net/th/id/OIP.zJkosca6OTCmzhTk4V8UPAHaFD?pid=Api&P=0&h=180",
    details: "The Great Wall stretches across northern China and is a UNESCO World Heritage Site."
  },
  {
    name: "Statue of Liberty",
    photo: "https://images.wallpapersden.com/image/download/statue-of-liberty-new-york-city-liberty-island_ZmttbmaUmZqaraWkpJRnaGZnrWZrbGo.jpg",
    details: "The Statue of Liberty stands on Liberty Island in New York, USA."
  },
  {
    name: "Taj Mahal",
    photo: "https://tse4.mm.bing.net/th/id/OIP.XqEeXG8EwP4rD9GO1wGEIQHaE8?pid=Api&P=0&h=180",
    details: "The Taj Mahal is a white marble mausoleum located in Agra, India."
  },
  {
    name: "Machu Picchu",
    photo: "https://tse2.mm.bing.net/th/id/OIP.JPIQ508oDJcBaS7ITKTGiwHaE8?pid=Api&P=0&h=180",
    details: "Machu Picchu is an ancient Incan city located in the Andes Mountains of Peru."
  },
  {
    name: "Sydney Opera House",
    photo: "https://tse4.mm.bing.net/th/id/OIP.V7xsHXeHn3LzxsxJNffp7gHaE4?pid=Api&P=0&h=180",
    details: "The Sydney Opera House is an iconic performing arts center in Sydney, Australia."
  },
  {
    name: "Santorini",
    photo: "https://tse2.mm.bing.net/th/id/OIP.sRjle4RZ-0zNGWdEX-PmiQHaE7?pid=Api&P=0&h=180",
    details: "Santorini is a beautiful Greek island known for its whitewashed buildings and blue domes."
  },
  {
    name: "Niagara Falls",
    photo: "https://tse4.mm.bing.net/th/id/OIP.Y_fE43FQkHBi0fZ_HEVr0wHaEo?pid=Api&P=0&h=180",
    details: "Niagara Falls is a famous waterfall located on the border of the USA and Canada."
  }
];

// Main profile
let profile = document.createElement("div");
profile.classList.add("profile");

// Search bar
let searchb = document.createElement("div");
searchb.classList.add("searchbar");

let Search = document.createElement("input");
Search.classList.add("Search");
Search.type = "text";
Search.placeholder = "Search...";

searchb.appendChild(Search);
profile.appendChild(searchb);

// Cards container
let cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards");
profile.appendChild(cardsContainer);

document.body.appendChild(profile);

// Function to display places
function showplaces(arr) {
    cardsContainer.innerHTML = "";

    arr.forEach((place) => {

        let card = document.createElement("div");
        card.classList.add("card");
        card.style.backgroundImage = `url(${place.photo})`;

        let name = document.createElement("h2");
        name.classList.add("name");
        name.textContent = place.name;

        let content = document.createElement("p");
        content.classList.add("content");
        content.textContent = place.details;

        card.appendChild(name);
        card.appendChild(content);

        cardsContainer.appendChild(card);
    });
}

// Show all cards initially
showplaces(places);

// Search
Search.addEventListener("input", function () {

    let newplaces = places.filter((place) => {
        return place.name.startsWith(Search.value);
    });

    showplaces(newplaces);
});
