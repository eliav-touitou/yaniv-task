class Game {
    players;
    playerPlayingId = null;
    
    constructor(namefPlayers, tableDeck, pileDeck) {
        this.players = [];
        this.tableDeck = tableDeck;
        this.pileDeck =  pileDeck;
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
              for (let i = 0; i<5; i++) {
                  player.hand.add(tableDeck.takeFromTop())
              }
          })
      }
}
function makeTurn(game, yanivCalled, cardsToDiscard, isCardToGetFromTableDeck, cardPickedFromSet) {
    if(yanivCalled) {
        let playersRoundSum = [];
        for (const player of players) {
            playersRoundSum.push(player.calcScore());
            
        }
       
        if (Math.min(...playersRoundSum)=== playerInTurn.calcScore()) {
            // check corner case whre other player has same lowest score
            // Yaniv successful
            for(player of players) {
                if(playerInTurn !== player) {
                    player.points += player.calcScore()
                }
            }
        } else {
            // Assaf
            playerInTurn.points += 30;
            for(player of players) {
                if(Math.min(...playersRoundSum) !== playerInTurn.calcScore()) {
                    player.points += player.calcScore()
                }
            }
        }
        

        console.log(min)
        
        playerInTurn //won?

        playerWithLowestSum // assaf
        // count players points
        // check who won
        // penalty???
        // Assaf
        // update players points
    } else {
        // no yaniv
        // discard cards???
        // discarded cards

        // taking card/ cards --> where from??
        if(isCardToGetFromTableDeck) {
            // taking card from tabledeck
            // update tabledeck
        } else {
            // taking card from pileDeck --> which one??
            // update pileDeck
            if (cardPickedFromSet... condition??) {
                playerInTurn.giveCardPileDeck()
            }
        }


    }



    game.playerInTurn = game.players[(game.playerInTurn + 1) % game.numberOfPlayers]
    game.turnsSinceStart++;
}