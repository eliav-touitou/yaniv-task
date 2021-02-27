const d = new PlayersDeck()
let tableDeck = new Deck(); tableDeck.createCardsDeck();
d.createCardsDeck();
let players = [
  new Player("avi", 1, d, 0),
  new Player("avia", 2, d, 0),
  new Player("aviad", 3, d, 0),
  new Player("aviel", 4, d, 0),
];
console.log(d);
console.log(players[0]);

window.addEventListener("DOMContentLoaded", () => {
  printGame(players,tableDeck);

});
