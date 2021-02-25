
const ranks = [ 
"A",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"J",
"Q",
"K",
];
const suits = ["♠", "♣", "♥", "♦"];

//Card
class Card {
    constructor(ranks, suits,isJoker = false) {
        this.ranks = ranks;
        this.suits = suits;
        this.isJoker = isJoker;
    }
    getName() {   
         return `${this.ranks} ${this.suits}`;   }
}

function createCards(){
        for(let i = 0; i < suits.length; i++ ){
            for(let x = 0; x < ranks.length; x++){
                if(x < 10) {
                    this.cards.push( new Card(ranks[x], x + 1, suits[i]));
                }else{
                    this.cards.push(new Card(ranks[x], 10, suits[i]));
                }
            }
        }
        cards.push(new Card(null,0,null, true ));
        cards.push(new Card(null, 0, null, true ));
        return cards;
    }
    
//Player
class Player {
    constructor(name, score = 0, playersDeck) {
        this.name = name;
        this.playersDeck = playersDeck;
        this.score = score;
    }
        calcHandScore() {
            for(cards of deck) {
                if(card.value === "joker") {
                    score += 0;
                }else if (card.value <= 10) {
                    score += card.value;
                }else {
                    score +=10
                }
            }
            return score;
        }
    }

//Deck
class Deck{
    constructor() {   
        this.cards = [];
    }
    addCard(...card) {
        this.cards.push(...card)
    }
    useCard() {
        return this.cards.shift();
    }
    randomCards() {
        let location1, location2, tmp;
        for (let i = 0; i>1000 ; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
           location2 = Math.floor((Math.random() * this.cards.length));
           tmp = this.cards[location1];
           this.cards[location1] = this.cards[location2];
           this.cards[location2] = tmp;
        }
    }
}
//new deck instance 
// const d = new Deck();
// d.createCards();
// console.log(d.cards);

//PlayersDeck
 class playersDeck extends Deck{
     constructor(){
         this.players = [];
        }
    start(player1, player2, player3,player4) {
        this.players.push(new Player(player1));
        this.players.push(new Player(player2));
        this.players.push(new Player(player3));
        this.players.push(new Player(player4));
        let d = new Deck();
        d.createCards();
        d.randomCards();
        this.players[0].playerCards = d.cards.slice(0,5);
        this.players[1].playerCards = d.cards.slice(5,10);
        this.players[2].playerCards = d.cards.slice(10,15);
        this.players[3].playerCards = d.cards.slice(15,20); 
     }
    }
 
//TableDeck
 class TableDeck extends Deck{
    constructor(){
        this.cardsInMiddle = [];
       
}
 }

 

//  //PileDeck
//  class PileDeck extends Deck{
//     constructor(){
//         super();
//         this.pile = [];  
//     }
// }
 

randomCards(createCards)
console.log(createCards())
