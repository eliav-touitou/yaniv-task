class Game {
  players;
  playerPlayingId = null;

  constructor(namefPlayers, tableDeck, pileDeck) {
    this.players = [];
    this.tableDeck = tableDeck;
    this.pileDeck = pileDeck;
    this.turn = 0;
  }

  // cardClicked(player, card) {
  //     if player.id === this.playerPlayingId
  // }
  addPlayer(player) {
    this.players.push(player);
  }
  dealCards(tableDeck) {
    this.players.forEach((player) => {
      for (let i = 0; i < 5; i++) {
        player.hand.add(tableDeck.takeFromTop());
      }
    });
  }
  newRound() {
    this.players.forEach((player) => (player.hand.cards.length = 0));
    this.pileDeck.cards.length = 0;
    this.tableDeck.cards = new Deck();
  }
}

function yanivCalled(
  game,
  yanivCalled,
  isCardToGetFromTableDeck,
  cardPickedFromSet
) {
  let playersRoundSum = [];
  for (const player of players) {
    playersRoundSum.push(player.calcScore());
  }

  if (Math.min(...playersRoundSum) === playerInTurn.calcScore()) {
    // check corner case whre other player has same lowest score
    // Yaniv successful
    for (player of players) {
      if (playerInTurn !== player) {
        player.points += player.calcScore();
      }
    }
  } else {
    // Assaf
    playerInTurn.points += 30;
    for (player of players) {
      if (Math.min(...playersRoundSum) !== playerInTurn.calcScore()) {
        player.points += player.calcScore();
      }
    }
    Game.newRound();
  }
}

function choseLegalCards(chosenCards) {
  if (chosenCards.length === 0) {
    return true;
  } else {
    for (let card of chosenCards) {
      if (card.rank === chosenCards[0].rank) {
        return true;
      }
    }

    for (let card of arr) {
    }
  }

  //מסדר לפי סדר סדר עולה
  arr = [1, 2, 3, 6];
  arr.sort(function (a, b) {
    return a - b;
  });
  // קלפים לפי סדר עולה
  const x = arr.slice(1).map(function (n, i) {
    return n - arr[i];
  });
  const isDifference = x.every((value) => value == 1);
  console.log(isDifference);

  // if(arr === !isDifference) {
  //     for(let card of arr) {

  //             return arr = true;
  //         }
  //     }
  //     console.log(arr);
  // }else if{
  //     throw Error("cant do this move!");
  // }
}
function arrayPyramid(arr) {
  let count = 0;
  return arr.reduce((prev, val) => {
    if (count++ === 0) return [[prev], val];
    return [prev, val];
  });
}
console.log(arrayPyramid([10, "j", "Q", "K"]));

//  [[[[10]"J"]"Q"]"K"]

function throwLegalCards(cards) {
  playerInTurn.playersDeck.removeCard(chosenCards);
  game.pileDeck.putInPile(chosenCards);
}

// };
//         // discard cards???
//         // discarded cards

//     //     // taking card/ cards --> where from??
//     //     if(isCardToGetFromTableDeck) {
//     //         // taking card from tabledeck
//     //         // update tabledeck
//     //     } else {
//     //         // taking card from pileDeck --> which one??
//     //         // update pileDeck
//     //         if (cardPickedFromSet... condition??) {
//     //             playerInTurn.giveCardPileDeck()
//     //         }
//     //     }

//     // }

//     // game.playerInTurn = game.players[(game.playerInTurn + 1) % game.numberOfPlayers]
//     // game.turnsSinceStart++;
