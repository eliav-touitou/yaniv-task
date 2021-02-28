let tableDeck = new Deck();
 tableDeck.createCardsDeck();
 tableDeck.randomCards();

// d.createCardsDeck();

let players = [];
for (let i = 0; i<5; i++) {
  const d = new PlayersDeck();
  d.pull5cardsFromDeck(tableDeck);
  players.push(new Player(" ",1, d, 0))
}
console.log(players[0]);

window.addEventListener("DOMContentLoaded", () => {
  printGame(players,tableDeck);

});
