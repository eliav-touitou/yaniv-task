
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

class Card {
    constructor(ranks, suits,isJoker = false) {
        this.ranks = ranks;
      
        this.suits = suits;
        this.isJoker = isJoker;
    }
}

class Player {
    constructor(name, score, playersDeck) {
        this.name = name;
        this.playersDeck = playersDeck;
        this.score = score;
    }
        calcHandScore() {
            let score = 0;
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

let deck = new Array() ;
let cards
function createCards(){
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
 
console.log(createCards())
//      //DOWN
class Deck{
    constructor() {
        shuffle(){
        }
    }
}
// //DOWN 1 UP
//  class playersDeck extends Deck{
//      constructor(){
//          super();
         
//      }

//  }
// //UP
//  class TableDeck extends Deck{

//     contructor(){
//         super();
        
//     }
//  }
// //UP
//  class PileDeck extends Deck{
//     contructor(){
//         super();
        
//     }

//  }

class Controller {
    initDeck(deck){
        for(suit of suits){
            for(rank of ranks){
                deck.insertCards(new Card(null,rank,suit));
                if (deck.length === 52){
                    deck.insertCards(new Card(true))
                    deck.insertCards(new Card(true))
                }
            }
        }
    }
}
const deck = new Deck();


function randomCard(){ return deck[Math.floor(Math.random() * deck.length)]};
console.log(randomCard());



