document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hambutton.classList.toggle("open");
});


