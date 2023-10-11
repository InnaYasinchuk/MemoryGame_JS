'use strict';

const cardNumbers = 12;

const delayTime = 1000;

let isCardFlipped = false;

let flippedCard1;
let flippedCard2;

let allCards = document.querySelectorAll('.memory-card')

function initializeBoard(cardsArray) {
		cardsArray.forEach(function(card) {
				let randomCard = Math.floor(Math.random() * cardNumbers);
				card.style.order = randomCard;
				card.addEventListener("click", cardClickHandler);
		});
}

initializeBoard(allCards);

function cardClickHandler(evt){
	if (flippedCard1 &&  flippedCard2){
		return;		
	}

	const card = evt.target.closest('.memory-card');

if (card === flippedCard1) {
		return;
}

card.classList.add("flip");

if (!isCardFlipped) {
			isCardFlipped = true;
			flippedCard1 = card;
		return;
} 
flippedCard2 = card; 
matchFlippedCards(flippedCard1.dataset.fruits, flippedCard2.dataset.fruits);
};


function resetCard(){
  isCardFlipped = false;
  flippedCard1 = null;
  flippedCard2 = null
}

function setInitialState(){
		setTimeout(function (){
		flippedCard1.classList.remove("flip");
		flippedCard2.classList.remove("flip");
		resetCard()
	}, delayTime)
}

function matchFlippedCards(nameCard1, nameCard2){
  if(nameCard1 === nameCard2){
    blockCard();
  } else {
    setInitialState();
  }
}


function blockCard (){
  flippedCard1.removeEventListener("click", cardClickHandler);
  flippedCard2.removeEventListener("click", cardClickHandler);
  resetCard()
}


