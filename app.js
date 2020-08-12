
const allCards = Array.from(document.querySelectorAll(".card"));
// w sumie nie użyłem tej tablicy, później użyje
let alreadyClicked = false;
let disableClick = false;
let firstCard, secondCard;

function matchCards() {
  if (
    firstCard.getAttribute("data-pic") === secondCard.getAttribute("data-pic")
  ) {
    // disableClick = false;
  } else {
    disableClick = true;
    setTimeout(function () {
      firstCard.classList.add("hidden");
      secondCard.classList.add("hidden");
      disableClick = false;
    }, 500);
  }
}

allCards.forEach((el) => {
  el.addEventListener("click", checkCard);
});

function checkCard() {
  if (disableClick) {
    return;
  }
  if (!alreadyClicked) {
    alreadyClicked = true;
    firstCard = this;
    firstCard.classList.remove("hidden");
  } else {
    alreadyClicked = false;
    disableClick = true;
    secondCard = this;
    this.classList.remove("hidden");
    matchCards();
    // allCards.forEach(el => el.removeEventListener('click', checkCard))
  }
  // allCards.forEach(el => el.addEventListener('click', checkCard))
}
