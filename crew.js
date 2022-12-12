// crew.html page

// Dom Elements
const douglasButton = document.getElementsByClassName("douglas")[0];
const markButton = document.getElementsByClassName("mark")[0];
const victorButton = document.getElementsByClassName("victor")[0];
const anoushehButton = document.getElementsByClassName("anousheh")[0];
const allButtons = document.getElementsByClassName("footer-button");
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
import data from "./data.json" assert { type: "json" };
const douglasData = data.crew[0];
const markData = data.crew[1];
const victorData = data.crew[2];
const anoushehData = data.crew[3];

// Variables
let position = 1;
// for (let i = 0; i < allButtons.length; i++) {
// }
console.log(allButtonsArr());
// Function that checks current position with if statement.
// Then uses for loop to change opacity of all buttons in "allButtonsArr" and current button opacity.
function positionCheck() {
  for (let i = 0; i < allButtons.length; i++) {
    if (position === 1) {
      (allButtonsArr()[i].style.opacity = "0.4"),
        (douglasButton.style.opacity = 1);
    } else if (position === 2) {
      (allButtonsArr()[i].style.opacity = "0.4"),
        (markButton.style.opacity = 1);
    } else if (position === 3) {
      (allButtonsArr()[i].style.opacity = "0.4"),
        (victorButton.style.opacity = 1);
    } else if (position === 4) {
      (allButtonsArr()[i].style.opacity = "0.4"),
        (anoushehButton.style.opacity = 1);
    }
  }
}
// Crew Functions
// Creates Array of all crew buttons (Helps with scope visability and styling of multiple elements at once)
function allButtonsArr() {
  let arr = [];
  arr.push(allButtons);
  return arr[0];
}
// Crew Button Clicked functions
function douglasButtonClicked() {
  return (
    (crewName.innerHTML = douglasData.name.toUpperCase()),
    (crewParagraph.innerHTML = douglasData.bio),
    (crewImage.src = douglasData.images.png),
    (crewTitle.innerHTML = douglasData.role.toUpperCase()),
    (imageContainer.style.marginTop = "0em"),
    (buttonContainer.style.marginTop = "5em"),
    (position = 1),
    positionCheck()
  );
}
function markButtonClicked() {
  return (
    (crewName.innerHTML = markData.name.toUpperCase()),
    (crewParagraph.innerHTML = markData.bio),
    (crewImage.src = markData.images.png),
    (crewTitle.innerHTML = markData.role.toUpperCase()),
    (imageContainer.style.marginTop = "0em"),
    (buttonContainer.style.marginTop = "5em"),
    (position = 2),
    positionCheck()
  );
}
function victorButtonClicked() {
  return (
    (crewName.innerHTML = victorData.name.toUpperCase()),
    (crewParagraph.innerHTML = victorData.bio),
    (crewImage.src = victorData.images.png),
    (crewTitle.innerHTML = victorData.role.toUpperCase()),
    (imageContainer.style.marginTop = "5em"),
    (buttonContainer.style.marginTop = "3.4em"),
    (position = 3),
    positionCheck()
  );
}
function anoushehButtonClicked() {
  return (
    (crewName.innerHTML = anoushehData.name.toUpperCase()),
    (crewParagraph.innerHTML = anoushehData.bio),
    (crewImage.src = anoushehData.images.png),
    (crewTitle.innerHTML = anoushehData.role.toUpperCase()),
    (imageContainer.style.marginTop = "8em"),
    (buttonContainer.style.marginTop = "5em"),
    (position = 4),
    positionCheck()
  );
}
console.log(position);

// Crew Event Listeners
douglasButton.addEventListener("click", douglasButtonClicked);
markButton.addEventListener("click", markButtonClicked);
victorButton.addEventListener("click", victorButtonClicked);
anoushehButton.addEventListener("click", anoushehButtonClicked);
