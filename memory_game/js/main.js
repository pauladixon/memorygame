


let cards = [
{
	rank: "Queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "Queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{	
	rank: "King",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];


let cardsInPlay = [];
let cardId;

let checkForMatch = function(){
		if (cardsInPlay[0] === cardsInPlay [1]){
			alert("You found a match!");
		}
		else {
			alert("Sorry, try  again.");
		}
}

let flipCard = function(){
	let cardId = this.getAttribute('data-id');
	console.log("Used flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}

let createBoard = function(){
	for (let i=0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();
