class Game {
    players;
    playerPlayingId = null;
    tableDeck;
    pileDeck;
    constructor(numOfPlayers) {
        this.players = [];
        const player1 = new Player();
        this.players.push(player1);
    }

    cardClicked(player, card) {
        if player.id === this.playerPlayingId....
    }
}