// https://rithm-students-assets.s3.us-west-1.amazonaws.com/tlg/exercises/memory-game/handout/index.html
// min 16 cards
const game = document.querySelector(".mem-game");


const bgColors = [
  "purple",
  "red",
  "blue",
  "green",
  "gray",
  "pink",
  "yellow",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "gray",
  "pink",
  "yellow",
  "orange",
];

let card1;
let card2;
let flipped = 0;
let noClick = false;

function randomDeck(arr) {
  let counter = arr.length;

  while (counter > 0) {
    let num = Math.floor(Math.random() * counter);
    counter--;

    let tempNum = arr[counter];
    arr[counter] = arr[num];
    arr[num] = tempNum;
  }
  return arr;
}

let randomColors = randomDeck(bgColors);

function makeDivs(colorArr) {
  for (let color of colorArr) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id', 'color');
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleClick);
    game.append(newDiv);
  }
}

function handleClick(e) {
  if(noClick) return;
  if(e.target.classList.contains('flipped')) return;

  let current = e.target;
  current.style.backgroundColor = current.classList[0];

  if (!card1 || !card2) {
    current.classList.add('flipped');
    card1 = card1 || current;
    card2 = current === card1 ? null : current;
  }
  if (card1 && card2) {
    noClick = true;
    let flip1 = card1.className;
    let flip2 = card2.className;

    if (flip1 === flip2) {
      flipped += 2;
      card1.removeEventListener("click", handleClick);
      card2.removeEventListener("click", handleClick);
      card1 = null;
      card2 = null;
      noClick = false;
    } else {
      setTimeout(function() {
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        noClick = false;
      }, 1000);
    }
}
if (flipped === bgColors.length) alert("game over!");

}

makeDivs(randomColors);
