document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();

function windChillConversion(temperature, wind) {
    let result = 13.12 + 0.6215 * temperature - 11.37 * (wind ** 0.16) + 0.3965 * (temperature * (wind ** 0.16));
    return result
}
let windChill = windChillConversion(0, 20);
let rounded = Number(windChill.toFixed(1));
document.getElementById("windChillValue").textContent = rounded;