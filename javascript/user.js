const user = {
  name: "default",
  decks: [
    {name: "default", cards: [
      {front: "I'm a card front.", back: "I'm a card back.", creationDate: Date.now()-30}
    ]}
  ],
  currentDeck: undefined,
  settings: {
    theme: "dark",
    notifications: {
      forNewCardsThatBecameDue: true,
      forRemindingDueCards: true,
    },
  },
};
user.currentDeck = user.decks[0];
export default user;
