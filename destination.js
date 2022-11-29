// destination.html page

// Dom Elements
const moonButton = document.getElementsByClassName("moon")[0];
const marsButton = document.getElementsByClassName("mars")[0];
const europaButton = document.getElementsByClassName("europa")[0];
const titanButton = document.getElementsByClassName("titan")[0];
const destinationName = document.getElementsByClassName(
  "destination-title-span"
)[0];
const destinationParagraph = document.getElementsByClassName(
  "destination-paragraph"
)[0];
const destinationDistance = document.getElementsByClassName(
  "destination-distance"
)[0];
const destinationTravelTime = document.getElementsByClassName(
  "destination-travel-time"
)[0];
const destinationImage =
  document.getElementsByClassName("destination-image")[0];

// Destination Data

import data from "./data.json" assert { type: "json" };
const destinationData = data.destinations;
const moonData = destinationData[0];
const marsData = destinationData[1];
const europaData = destinationData[2];
const titanData = destinationData[3];

//onClick functions

function moonClicked() {
  return (
    (destinationName.innerHTML = moonData.name.toUpperCase()),
    (destinationParagraph.innerHTML = moonData.description),
    (destinationDistance.innerHTML = moonData.distance.toUpperCase()),
    (destinationTravelTime.innerHTML = moonData.travel.toUpperCase()),
    (destinationImage.src = moonData.images.png)
  );
}
function marsClicked() {
  return (
    (destinationName.innerHTML = marsData.name.toUpperCase()),
    (destinationParagraph.innerHTML = marsData.description),
    (destinationDistance.innerHTML = marsData.distance.toUpperCase()),
    (destinationTravelTime.innerHTML = marsData.travel.toUpperCase()),
    (destinationImage.src = marsData.images.png)
  );
}
function europaClicked() {
  return (
    (destinationName.innerHTML = europaData.name.toUpperCase()),
    (destinationParagraph.innerHTML = europaData.description),
    (destinationDistance.innerHTML = europaData.distance.toUpperCase()),
    (destinationTravelTime.innerHTML = europaData.travel.toUpperCase()),
    (destinationImage.src = europaData.images.png)
  );
}
function titanClicked() {
  return (
    (destinationName.innerHTML = titanData.name.toUpperCase()),
    (destinationParagraph.innerHTML = titanData.description),
    (destinationDistance.innerHTML = titanData.distance.toUpperCase()),
    (destinationTravelTime.innerHTML = titanData.travel.toUpperCase()),
    (destinationImage.src = titanData.images.png)
  );
}

// Event Listeners
moonButton.addEventListener("click", moonClicked);
marsButton.addEventListener("click", marsClicked);
europaButton.addEventListener("click", europaClicked);
titanButton.addEventListener("click", titanClicked);
