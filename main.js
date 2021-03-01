let tableDeck = new TableDeck();
tableDeck.createNewFullDeck();
tableDeck.shuffle();
const a = new PlayersDeck();
a.pull5cards(tableDeck);
const b = new PlayersDeck();
b.pull5cards(tableDeck);
const c = new PlayersDeck();
c.pull5cards(tableDeck);
const d = new PlayersDeck();
d.pull5cards(tableDeck);
let players = [
  new Player("avi", 1, a),
  new Player("avia", 2, b ),
  new Player("aviad", 3, c ),
  new Player("aviel", 4, d ),
];
// const player1 = new Player();
// this.players.push(player1);
// function createGame() {
  
// }
//  const tableDeck = new TableDeck();
//  const cards = []
//  for(let i = 0 ; i<5; i++) {
//    cards.push(tableDeck.takeFromTop())
//  }
//  const playersDeck = new PlayersDeck(...cards)
//  const player = new Player("tomer",0, playersDeck);
// PlayersDeck

// d.createCardsDeck();

// let players = [];
// for (let i = 0; i < 5; i++) {
//   const d = new PlayersDeck();
//   d.pull5cardsFromDeck(tableDeck);
//   players.push(new Player(" ", i + 1, d, 0));
// }

document.addEventListener("click", (e) => {
  const cards = document.querySelectorAll(".card");
  //   if (cards.contains(e.target)) {

  //   }
});
window.addEventListener("DOMContentLoaded", () => {
  printGame(players, tableDeck);
});

