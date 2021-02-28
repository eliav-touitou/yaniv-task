//SELECTORS------------------------------------------------------
const ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suits = ["♠", "♣", "♥", "♦"];
const loginInput = document.querySelector("#username-input");
const loginButton = document.querySelector("#login-btn");
const invalidLogin = document.querySelector(".invalid-login");
invalidLogin.hidden = true;
const nameInput = document.querySelector("#login");
const nameButton = document.querySelector("#start-button");
nameInput.hidden = true;
nameButton.hidden = true;
const playerName = document.querySelector("#player-name");

//EVENT LISTENERS

function loginUser() {
  if (loginInput.value === "") {
    invalidLogin.hidden = false;
    return;
  }
  loginInput.hidden = true;
  loginButton.hidden = true;
  invalidLogin.hidden = true;
  nameInput.hidden = false;
  nameButton.hidden = false;
}

nameButton.addEventListener("click", () => {
  if (nameInput.value === "") {
    invalidLogin.hidden = false;
    return;
  }
  nameInput.hidden = true;
  nameButton.hidden = true;
  playerName.innerText = `Your name:${nameInput.value}`;
});

//CLASSES---------------------------------------------------------------------------
class Card {
  constructor(ranks, suits, isJoker = false) {
    if (Number.isInteger(ranks)) {
      this.ranks = ranks.toString();
      this.value = ranks;
    } else {
      this.ranks = ranks;
      if (ranks === "A") {
        this.value = 1;
      } else if (isJoker === true) {
        this.value = 0;
      } else {
        this.value = 10;
      }
    }
    this.suits = suits;
    this.isJoker = isJoker;
  }
}

class Deck {
  constructor() {
    this.cardDeck = [];
  }
  makeDeck() {
    ranks.forEach((rank) => {
      suits.forEach((suit) => {
        let card = new Card(rank, suit);
        this.cardDeck.push(card);
      });
    });
    this.cardDeck.push(new Card("joker", "red", true));
    this.cardDeck.push(new Card("joker", "black", true));
  }
  shuffle() {
    for (let card in this.cardDeck) {
      let randomCardPosition = Math.floor(Math.random() * this.cardDeck.length);
      this.cardDeck.push(this.cardDeck[randomCardPosition]);
      this.cardDeck.splice(randomCardPosition, 1);
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.playersDeck = [];
    this.score = 0;
  }
  calcHandScore() {
    for (card in this.playersDeck) {
      score = score + card.value;
    }
  }
}

//FUNCTIONS---------------------------------------------------------------

//TEST AREA-----------------------------------------------------------------
