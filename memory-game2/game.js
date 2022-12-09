const cards = document.querySelectorAll(".mem-card");

let hasFlippedCard = false;
let lockBoard = false;
let card1, card2;

function flipCard() {
  if (lockBoard) return;
  if (this === card1) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    card1 = this;
    // console.log({hasFlippedCard, card1});

    return;
  }

  card2 = this;
  checkMatch();
}

function checkMatch() {
  // console.log(card1.dataset.card)
  // console.log(card2.dataset.card)
  let isMatch = card1.dataset.card === card2.dataset.card;
  isMatch ? disableCards() : unflipCards();
//  if      do this^^       else do this^^

//   if (card1.dataset.card === card2.dataset.card) {
//     disableCards();
//   } else {
//     unflipCards;
//   }

  //   if (card1.dataset.card === card2.dataset.card) {
  //     card1.removeEventListener('click', flipCard);
  //     card2.removeEventListener('click', flipCard);
  //   } else {
  //     setTimeout(() => {
  //         card1.classList.remove('flip');
  //         card2.classList.remove('flip');

  //         resetBoard();
  //       }, 2000);
  //   }
}

function disableCards() {
  card1.removeEventListener("click", flipCard);
  card2.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true; // lock until cards finish flipping

  setTimeout(() => {
    card1.classList.remove("flip");
    card2.classList.remove("flip");

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false]; // es6 destructuring 
  [card1, card2] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12); //0-11
    card.style.order = randomPosition;
  });
})(); // wrapping function in () and adding an extra () means that it will be immediately invoked

cards.forEach((card) => card.addEventListener("click", flipCard));
