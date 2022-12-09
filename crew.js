// crew.html page

// Dom Elements
const douglasButton = document.getElementsByClassName("douglas")[0];
const markButton = document.getElementsByClassName("mark")[0];
const victorButton = document.getElementsByClassName("victor")[0];
const anoushehButton = document.getElementsByClassName("anousheh")[0];
const crewName = document.getElementsByClassName("crew-title-span")[0];
const crewParagraph = document.getElementsByClassName("crew-paragraph")[0];
const crewImage = document.getElementsByClassName("crew-image")[0];
const crewTitle = document.getElementsByClassName("crew-title")[0];
const imageContainer = document.getElementsByClassName(
  "pick-crew-header-img-container"
)[0];
const buttonContainer = document.getElementsByClassName(
  "footer-buttons-container"
)[0];
// Crew Data
// test2
import data from "./data.json" assert { type: "json" };
const douglasData = data.crew[0];
const markData = data.crew[1];
const victorData = data.crew[2];
const anoushehData = data.crew[3];

// Crew Functions
function douglasButtonClicked() {
  return (
    (crewName.innerHTML = douglasData.name.toUpperCase()),
    (crewParagraph.innerHTML = douglasData.bio),
    (crewImage.src = douglasData.images.png),
    (crewTitle.innerHTML = douglasData.role.toUpperCase()),
    (imageContainer.style.marginTop = "0em"),
    (buttonContainer.style.marginTop = "5em")
  );
}
function markButtonClicked() {
  return (
    (crewName.innerHTML = markData.name.toUpperCase()),
    (crewParagraph.innerHTML = markData.bio),
    (crewImage.src = markData.images.png),
    (crewTitle.innerHTML = markData.role.toUpperCase()),
    (imageContainer.style.marginTop = "0em"),
    (buttonContainer.style.marginTop = "5em")
  );
}
function victorButtonClicked() {
  return (
    (crewName.innerHTML = victorData.name.toUpperCase()),
    (crewParagraph.innerHTML = victorData.bio),
    (crewImage.src = victorData.images.png),
    (crewTitle.innerHTML = victorData.role.toUpperCase()),
    (imageContainer.style.marginTop = "5em"),
    (buttonContainer.style.marginTop = "3.4em")
  );
}
function anoushehButtonClicked() {
  return (
    (crewName.innerHTML = anoushehData.name.toUpperCase()),
    (crewParagraph.innerHTML = anoushehData.bio),
    (crewImage.src = anoushehData.images.png),
    (crewTitle.innerHTML = anoushehData.role.toUpperCase()),
    (imageContainer.style.marginTop = "8em"),
    (buttonContainer.style.marginTop = "5em")
  );
}

// Crew Event Listeners
douglasButton.addEventListener("click", douglasButtonClicked);
markButton.addEventListener("click", markButtonClicked);
victorButton.addEventListener("click", victorButtonClicked);
anoushehButton.addEventListener("click", anoushehButtonClicked);
