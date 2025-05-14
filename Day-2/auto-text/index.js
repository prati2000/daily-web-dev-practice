const container = document.querySelector(".container");

const careers = ["Web Developer", "Front-end Developer"];

let careersIndex = 0;
let characterIndex = 0;
updateText();

function updateText() {
  characterIndex++;
  container.innerHTML = ` <h1>I am a ${careers[careersIndex].slice(
    0,
    characterIndex
  )}<h1>`;
  if (characterIndex === careers[careersIndex].length) {
    careersIndex++;
    characterIndex = 0;
  }
  if (careersIndex === careers.length) {
    careersIndex = 0;
  }
  setTimeout(updateText, 200);
}
