const ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suits = ["♠", "♣", "♥", "♦"];

//Card
class Card {
  constructor(rank, suit, isJoker = false) {
    this.rank = rank;
    this.suit = suit;
    this.isJoker = isJoker;
    this.faceDown = true;
  }

  get value() {
    if (this.isJoker) {
      return 0;
    }
    if (this.rank <= 10) {
      return this.rank;
    }
    if (this.rank === "A") {
      return 1;
    }
    return 10;
  }

  toString() {
    return this.isJoker ? "🃏" : `${this.rank} ${this.suit}`;
  }
  flip() {
    this.faceDown ? (this.faceDown = false) : (this.faceDown = true);
  }
}

//Player
class Player {
  constructor(name, id, playerDeck) {
    this.name = name;
    this.id = id;
    this.hand = playerDeck;
    this.score = 0;
  }

  get currentScore() {
    return this.hand.calcScore();
  }

  pullCard(Deck) {
    const card = Deck.useCard();
    this.addCard(card);
  }
}

//Deck
class Deck {
  #cards = [];
  constructor(cards = []) {
    this.#cards = cards;
  }

  get size() {
    return this.#cards.length;
  }

  // createCardsDeck() {
  //   for (let i = 0; i < suits.length; i++) {
  //     for (let x = 0; x < ranks.length; x++) {
  //       if (x < 10) {
  //         this.cards.push(new Card(ranks[x], suits[i]));
  //       } else {
  //         this.cards.push(new Card(ranks[x], suits[i]));
  //       }
  //     }
  //   }
  //   this.cards.push(new Card(null, null, true));
  //   this.cards.push(new Card(null, null, true));
  // }

  // randomCards() {
  //   for (let i = 0; i < 10; i++) {
  //     for (let card in this.cards) {
  //       let randomCardPosition = Math.floor(Math.random() * this.cards.length);
  //       this.cards.push(this.cards[randomCardPosition]);
  //       this.cards.splice(randomCardPosition, 1);
  //     }
  //   }
  // }

  // shuffle() {
  //   this.cards.sort((card1, card2) => Math.random() > 0.5);
  // }

  // removeTopCard() {
  //   return this.cards.shift();
  // }

  // getFirstCard(deck) {
  //   return deck.cards[0];
  // }
}

// const tableDeck = new TableDeck();
// const cards = []
// for(let i = 0 ; i<5; i++) {
//   cards.push(tableDeck.takeFromTop())
// }
// const playersDeck = new PlayersDeck(...cards)
// const player = new Player("tomer",0, playersDeck);
//PlayersDeck
class PlayersDeck extends Deck {
  constructor(card1, card2, card3, card4, card5) {
    super([card1, card2, card3, card4, card5]);
  }
  removeCard(cardToRemove) {
    for (let i = 0; i < this.cards.length; i++) {
      let card = this.cards[i];
      if (card === cardToRemove) {
        // might need to use card.toString
        this.cards.splice(i, 1);
        return cardToRemove;
      }
    }
    throw new Error("Player doesnt have card: " + cardToRemove);
  }

  add(card) {
    this.#cards.push(card);
  }

  calcScore() {
    return this.#cards.reduce((prevScore, card) => prevScore + card.value, 0);
  }
}

//TableDeck
class TableDeck extends Deck {
  constructor() {
    super();
  }
  takeFromTop() {
    if (this.size() === 0) {
      throw new Error("Can't take from empty pile!");
    }
    return this.#cards.shift();
  }
}

//PileDeck
class PileDeck extends Deck {
  revealed = [];
  constructor() {
    super();
  }

  takeFromPile() {
    if (this.size() === 0) {
      throw new Error("Can't take from empty pile!");
    }
    return this.#cards.shift();
  }

  putInPile(cards) {
    if (cards.length === 0) {
      throw new Error("Can't put 0 cards in deck");
    }
    this.revealed = cards;
    cards.forEach((card) => this.#cards.unshift(card));
    return cards;
  }
}

function printGame(players, tableDeck, tablePile) {
  for (let player of players) {
    let playerElement = document.getElementById(`player${player.number}`);

    printPlayer(player, playerElement);
  }
  let tablePileElement = document.createElement("div");
  tablePileElement.classList.add("table-pile");
  let tableDeckElement = document.createElement("div");
  tableDeckElement.classList.add("table-deck");
  let board = document.querySelector(".game-board");
}

function printCard(card) {
  let cardElement = document.createElement("div");
  cardElement.classList.add("card");
  let cardImgPath;
  if (card.isJoker) {
    cardImgPath = `frontEnd/styles/cards/joker.jpg`;
  } else {
    cardImgPath = `frontEnd/styles/cards/${card.rank}${card.suit}.jpg`;
  }
  let imgElement = document.createElement("img");
  imgElement.src = cardImgPath;

  cardElement.append(imgElement);

  return cardElement;
}

function printPlayer(player, playerElement) {
  for (let card of player.deck.cards) {
    playerElement.append(printCard(card));
  }
  let pointsElement = document.createElement("div");
  pointsElement.className = "player-points";
  pointsElement.innerText = player.calcHandScore();
  playerElement.append(pointsElement);
}

// function legalMove(playersDeck) {
//   let legalCards = false;

//   if (playersDeck[i].value === playersDeck[j].value) {
//     legalCards = true;
//   } else if (
//     playersDeck[i].value === playersDeck[j].value - 1 &&
//     playersDeck[i].value === playersDeck[x].value + 1 &&
//     playersDeck[i].suit === playersDeck[j].suit && playersDeck[i].suit === playersDeck[x].suit
//   ) {
//     legalCards = true;
//   }
// }
