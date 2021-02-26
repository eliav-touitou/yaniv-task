
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
         return `${this.ranks} ${this.suits}`; 
          }
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
    createCards(){
         for(let i = 0; i < suits.length; i++ ){
             for(let x = 0; x < ranks.length; x++){
                 if(x < 10) {
                     this.cards.push( new Card(ranks[x], x + 1, suits[i]));
                 }else{
                     this.cards.push(new Card(ranks[x], 10, suits[i]));
                 }
             }
         }
         this.cards.push(new Card(null,0,null, true ));
         this.cards.push(new Card(null, 0, null, true ));
     }

    randomCards() {
        for (let i = 0; i>this.cards.length ; i++) {
           let random = Math.floor((Math.random() * i));
           let tmp = this.cards[location1];
           this.cards[i] = this.cards[random];
           this.cards[random] = tmp;
        }
    }
    addCard(...card) {
        this.cards.push(...card)
    }
    useCard() {
        return this.cards.shift();
    }
    
}
//a new Deck
const d = new Deck();
d.createCards()
console.log(d)

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
        // let d = new Deck();
        // d.createCards();
        // d.randomCards();
        this.players[0].playerCards = d.slice(0,5);
        this.players[1].playerCards = d.slice(5,10);
        this.players[2].playerCards = d.slice(10,15);
        this.players[3].playerCards = d.slice(15,20); 
     }
    }
 
//TableDeck
 class TableDeck extends Deck{
    constructor(){
       super();  
}
takeFromPile (pileDeck, cardLocation ) {
let set = pileDeck.usePile();
let setLast = Math.abs(set.length -1 - cardLocation);
if(set.length > 1) {
    this.addCard(set[cardLocation]);
    pileDeck.addPile(set[setLast]);
}
}
 }

 //PileDeck
 class PileDeck extends Deck{
    constructor(){
        super();
        this.pile = [];
    }
    addPile(set) {
        this.pile.unshift(set)
    }
    usePile() {
        return this.pile.shift();
    }
}
 


