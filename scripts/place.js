document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();

const temperature = 32;
const windSpeed = 10;

function calculateWindChill(temp, wind) {
  return 35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16;
}

let windChill = "N/A";

if (temperature <= 50 && windSpeed > 3) {
  windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
}

document.getElementById("windChillValue").textContent = windChill;
