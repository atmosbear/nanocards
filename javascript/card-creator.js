import user from "./user.js";

function getRecentlyCreatedCards() {
  let recentlyCreatedCards = [];
  user.decks.forEach((deck) => {
    deck.cards.forEach((card) => {
      if (card.creationDate > Date.now() - 50000) {
        recentlyCreatedCards.push(card);
      }
    });
  });
  return recentlyCreatedCards;
}

function updateRecentlyCreatedCardsElement() {
  let recentlyCreatedCardsElement = document.querySelector(
    "#recently-created-cards-list"
  );
  recentlyCreatedCardsElement.innerHTML = "";
  let recentlyCreatedCards = getRecentlyCreatedCards();
  recentlyCreatedCards.forEach((card) => {
    recentlyCreatedCardsElement.innerHTML += `
      <div class="recently-created-card">
        <div class="card-front"><span class="f-text">F:</span> ${card.front}</div>
        <div class="card-back"><span class="b-text">B:</span> ${card.back}</div>
        <div class="card-due-date">D: ${new Date(card.dueDate).toLocaleString()}</div>
      </div>
    `;
  //<div class="card-creation-date">C: ${new Date(card.creationDate).toLocaleString()}</div>

  });
}

// make create-card-button clickable
let createCardButton = document.querySelector("#create-card-button");
let frontEl = document.querySelector("#front-input");
let backEl = document.querySelector("#back-input");
[frontEl, backEl].forEach((el) => { 
  el.addEventListener("keydown", (event) => {
    if (el === backEl && event.key === "Enter") {
      createCardButton.click();
    } else {
      el.style.outline = "none";
    }
  });
})
createCardButton.addEventListener("click", () => {
  let front = frontEl.value;
  let back = backEl.value;
  frontEl.style.outline = "none";
  backEl.style.outline = "none";
  if (front && back) {
    let creationDate = Date.now();
    let dueDate = creationDate + (user.settings.defaultDueSeconds * 1000);
    user.currentDeck.cards.push({ front, back, creationDate, dueDate });
    updateRecentlyCreatedCardsElement();
    frontEl.value = "";
    backEl.value = "";
  }
  if (!front) {
    frontEl.style.outline = "1px solid red";
  }
  if (!back) {
    backEl.style.outline = "1px solid red";
  }
});

updateRecentlyCreatedCardsElement();
