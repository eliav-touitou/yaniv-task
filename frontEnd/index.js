

const rank = [ 
"A",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"J",
"Q",
"K"
];
const suits = ["♠", "♣", "♥", "♦"];

class Card {
    constructor(rank, suits,isJoker = false) {
        this.rank = rank;
        this.suits = suits;
        this.isJoker = isJoker;
        if (this.rank === "black joker" || "red joker") this.isJoker = true;
    }
}

class Player {
    constructor(name, score, playersDeck) {
        this.name = name;
        this.playersDeck = playersDeck;
        this.score = score;

    }
}
let player1 = new Player("Shira");
let player2 = new Player("Eliav");
let player3 = new Player("Daniel");
let player4 = new Player("Nitzan");


console.log(player1)