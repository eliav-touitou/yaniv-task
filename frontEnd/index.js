
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
    let deck = new Array() ;
    let cards
        for(let i = 0; i < suits.length; i++ ){
            for(let x = 0; x < ranks.length; x++){
                if(x < 10) {
                    cards= new Card(ranks[x], x + 1, suits[i]);
                    deck.push(cards);
                }else{
                    cards=new Card(ranks[x], 10, suits[i]);
                    deck.push(cards);
                }
            }
        }
        deck.push(new Card(null,0,null, true ));
        deck.push(new Card(null, 0, null, true ));
        return deck;
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


let player1 = new Player("Shira");
let player2 = new Player("Eliav");
let player3 = new Player("Daniel");
let player4 = new Player("Nitzan");



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
}

//PlayersDeck
 class playersDeck extends Deck{
     constructor(){
         super();
         this.hand = []; 
     }
    }
 
//TableDeck
 class TableDeck extends Deck{
    constructor(){
        super();
    }

randomCards() {
    let array = this.cards;
    for (let i = array.length ; i>0 ; i--) {
        let j = Math.floor(Math.random() * (i +1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
}
 }

 //PileDeck
 class PileDeck extends Deck{
    constructor(){
        super();
        this.pile = [];  
    }
}
 
//Controller
class Controller { 
    }

console.log(createCards())





