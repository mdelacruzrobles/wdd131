document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
const selectElement = document.getElementById("product")
if (selectElement) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.textContent = product.name;
    option.value = product.id;
    selectElement.append(option);
  });
}
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function () {
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
  });
}
const reviewDisplay = document.getElementById("reviewTotal");

if (reviewDisplay) {
  const count = localStorage.getItem("reviewCount") || 0;
  reviewDisplay.textContent = count;
}
