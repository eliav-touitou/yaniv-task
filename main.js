const players = ["avi", "shlomi", "baruh", "menash"];
const game1 = new Game(players);

const d = new Deck();
d.createNewFullDeck();
d.shuffle();
console.log(d);
document.addEventListener("click", (e) => {
  const cards = document.querySelectorAll(".card");
  //   if (cards.contains(e.target)) {

  //   }
});
window.addEventListener("DOMContentLoaded", () => {
  printGame(game1.players, game1.tableDeck);
});
