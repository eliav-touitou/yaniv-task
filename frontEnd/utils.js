const ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suits = ["♠", "♣", "♥", "♦"];

//Card
class Card {
  constructor(rank, suit, isJoker = false) {
    this.rank = rank;
    this.suit = suit;
    this.isJoker = isJoker;
    if (this.isJoker === true) {
      this.value = 0;
    } else if (this.rank <= 10) {
      this.value = this.rank;
    } else if (this.rank === "A") {
      this.value = 1;
    } else {
      this.value = 10;
    }
    if (this.suit === "♣" || this.suit === "♠") {
      this.color = "black";
    } else {
      this.color = "red";
    }
  }
  getName() {
    return `${this.rank} ${this.suit}`;
  }
}

//Player
class Player {
  constructor(name, number, deck, score = 0) {
    this.name = name;
    this.number = number;
    this.deck = deck;
    this.score = score;
  }
  calcHandScore() {
    let points = 0;
    for (let card of this.deck.cards) {
      points += card.value;
    }
    return points;
  }
  pullCard(Deck) {
    const card = Deck.useCard();
    this.addCard(card);
  }

  
}

//Deck
class Deck {
  constructor(cards = []) {
    this.cards = cards;
  }

  createCardsDeck() {
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < ranks.length; x++) {
        if (x < 10) {
          this.cards.push(new Card(ranks[x], suits[i]));
        } else {
          this.cards.push(new Card(ranks[x], suits[i]));
        }
      }
    }
    this.cards.push(new Card(null, null, true));
    this.cards.push(new Card(null, null, true));
  }

  randomCards() {
    for (let i = 0; i > this.cards.length; i++) {
      let random = Math.floor(Math.random() * i);
      let tmp = this.cards[location1];
      this.cards[i] = this.cards[random];
      this.cards[random] = tmp;
    }
  }
  addCard(...card) {
    this.cards.push(...card);
  }
  useCard() {
    return this.cards.shift();
  }
  firstCard(deck) {
		return deck.cards[0];
	}
}

//PlayersDeck
class PlayersDeck extends Deck {
  constructor() {
    super();
  }
  
  
  pull1cardFromDeck(deck) {
		this.cards.push(this.firstCard(deck));
		this.cards.shift();
	}

	pull5cardsFromDeck(deck) {
		for (let i = 0; i < 5; i++) {
			this.cards.push(this.firstCard(deck));
			deck.cards.shift();
		}
	}
  // startPlayerCards(players, deck) {
  //   for (let player of players) {
  //     player.deck = [];
  //     for (let i = 0; i < 5; i++) {
  //       player.deck.push(deck.pop());
  //     }
  //   }
  // }
}

//TableDeck
class TableDeck extends Deck {
  constructor() {
    super();
  }
  takeFromPile(pileDeck, cardLocation) {
    let set = pileDeck.usePile();
    let setLast = Math.abs(set.length - 1 - cardLocation);
    if (set.length > 1) {
      this.addCard(set[cardLocation]);
      pileDeck.addPile(set[setLast]);
    }
  }
}

//PileDeck
class PileDeck extends Deck {
  constructor() {
    super();
    this.pile = [];
  }
  addPile(set) {
    this.pile.unshift(set);
  }
  usePile() {
    return this.pile.shift();
  }
}

function printGame(players, tableDeck, pileDeck ) {
  for (let player of players) {
    let playerElement = document.getElementById(`player${player.number}`);
    console.log(`#player${player.number}`);
    printPlayer(player, playerElement);
  }
  let tablePileElement = document.createElement("div");
  tablePileElement.classList.add("table-pile");
  let board = document.querySelector(".board");
  board.append(tablePileElement);

  for (let card of pileDeck) {
    tablePileElement.append(printCard(card));
  }

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
