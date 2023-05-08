const user = {
  name: "default",
  decks: [
    {name: "default", cards: [
      {front: "I'm a card front.", back: "I'm a card back.", creationDate: Date.now()-30000, dueDate: Date.now()+30000},
    ]}
  ],
  currentDeck: undefined,
  settings: {
    theme: "dark",
    notifications: {
      forNewCardsThatBecameDue: true,
      forRemindingDueCards: true,
    },
    defaultDueSeconds: 300,
  },
};
user.currentDeck = user.decks[0];
export default user;
