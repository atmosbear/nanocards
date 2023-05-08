import user from "./user.js";

let recentlyCreatedCards = [];

user.decks.forEach((deck) => {
  deck.cards.forEach((card) => {
    if (card.creationDate > Date.now() - 300) {
      recentlyCreatedCards.push(card);
    }
  });
});

console.log(recentlyCreatedCards);
function updateRecentlyCreatedCardsElement() {
  let recentlyCreatedCardsElement = document.querySelector(
    "#recently-created-cards-list"
  );
  recentlyCreatedCardsElement.innerHTML = "";
  recentlyCreatedCards.forEach((card) => {
    recentlyCreatedCardsElement.innerHTML += `
      <div class="recently-created-card">
        <div class="card-front"><span class="f-text">F:</span> ${card.front}</div>
        <div class="card-back"><span class="b-text">B:</span> ${card.back}</div>
      </div>
    `;
  });
}

updateRecentlyCreatedCardsElement();