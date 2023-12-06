// Assuming these variables are declared somewhere in your code
let cases, deaths, hospitalizations;

document.getElementById("cases").innerHTML = cases;
document.getElementById("deaths").innerHTML = deaths;
document.getElementById("hospitalizations").innerHTML = hospitalizations;

const apiUrl = "https://api.opencovid.ca/summary";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Assuming the API response has properties cases, deaths, and hospitalizations
    cases = data.cases;
    deaths = data.deaths;
    hospitalizations = data.hospitalizations;

    // Update the HTML content with the new data
    document.getElementById("cases").innerHTML = cases;
    document.getElementById("deaths").innerHTML = deaths;
    document.getElementById("hospitalizations").innerHTML = hospitalizations;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
