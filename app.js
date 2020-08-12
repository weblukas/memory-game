
const allCards = Array.from(document.querySelectorAll(".card"));
const score = document.querySelector(".score-number");

console.log(score);
let firstClick = false;
let secondClick = false;
let firstCard, secondCard;

allCards.forEach((el) => {
  el.addEventListener("click", checkCard);
});

function checkCard() {
  if (secondClick) {
    return;
  }
  if (!firstClick) {
    firstClick = true;
    firstCard = this;
    firstCard.classList.remove("hidden");
  } else {
    firstClick = false;
    secondCard = this;
    this.classList.remove("hidden");
    matchCards();  
  }
}

function matchCards() {
  const match = (firstCard.getAttribute("data-pic") === secondCard.getAttribute("data-pic"))
  if (match) {
    firstCard.removeEventListener("click", checkCard);
    secondCard.removeEventListener("click", checkCard);
   score.innerHTML ++
  } else {
    secondClick = true;
    score.innerHTML --
    setTimeout(function () {
      firstCard.classList.add("hidden");
      secondCard.classList.add("hidden");
      secondClick = false;
    }, 1000);
  }
}

