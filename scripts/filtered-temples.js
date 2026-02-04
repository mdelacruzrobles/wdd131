document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hambutton.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Arequipa Peru",
    location: "Arequipa, Peru",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg"
  },
  {
    templeName: "Nairobi Kenya",
    location: "Nairobi, Kenya",
    dedicated: "2025, May 18",
    area: 19870,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg"
  },
  {
    templeName: "Recife Brasil",
    location: "Recife, Brasil",
    dedicated: "2000, December 15",
    area: 37200,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
  },
  {
    templeName: "Monterrey Mexico",
    location: "Monterrey, Mexico",
    dedicated: "2002, April 28",
    area: 16498,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/monterrey-mexico-temple/monterrey-mexico-temple-1068-main.jpg"
  },
  {
    templeName: "Salta Argentina",
    location: "Salta, Argentina",
    dedicated: "2024, June 16",
    area: 27000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-main.jpg"
  }
];

const oldTemples = document.querySelector('#old');
const newTemples = document.querySelector('#new');
const large = document.querySelector('#large');
const small = document.querySelector('#small');
const home = document.querySelector("#home");
newTemples.addEventListener("click", () => createTemplecard(temples.filter(temple => Number(temple.dedicated.split(",")[0]) > 2000)));
oldTemples.addEventListener("click", () => createTemplecard(temples.filter(temple => Number(temple.dedicated.split(",")[0]) < 1900)));
large.addEventListener("click", () => createTemplecard(temples.filter(temple => temple.area > 90000)));
small.addEventListener("click", () => createTemplecard(temples.filter(temple => temple.area < 10000)));
home.addEventListener("click", () => createTemplecard(temples));

const myDiv = document.getElementById('myDiv');

function createTemplecard(temples) {
myDiv.innerHTML = "";
temples.forEach(temple => {
const section1 = document.createElement('section');
const h2 = document.createElement('h2');
const p1 = document.createElement('p')
const p2 = document.createElement('p')
const p3 = document.createElement('p')
const img = document.createElement('img')
myDiv.appendChild(section1);
section1.appendChild(h2);
section1.appendChild(p1);
section1.appendChild(p2);
section1.appendChild(p3);
section1.appendChild(img)
h2.textContent = temple.templeName;
p1.textContent = `LOCATION: ${temple.location}`;
p2.textContent = `DEDICATED: ${temple.dedicated}`;
p3.textContent = `AREA: ${temple.area} sq ft`;
img.src = temple.imageUrl;
img.alt = temple.templeName;
img.loading = "lazy";
section1.classList.add('temple-card');
})};

createTemplecard(temples);
