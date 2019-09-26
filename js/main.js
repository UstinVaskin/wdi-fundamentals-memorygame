

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay= []; 


function checkForMatch(){

	if (cardsInPlay[0]=== cardsInPlay[1]){
		alert ("You found a match!");
	} else {
		alert ("Sorry, try again.");
	}
} 

function flipCard (cardId){				//Parameter 
	if (cardsInPlay.lenght === 2) {
		checkForMatch();
	}
}

cardsInPlay.push(cards[0]);
console.log("User flipped " + cards[0]); 
console.log("User flipped " + cards[2]); 
