var cards = ["Queen", "Queen", "King", "King"];

var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match");
  } else {
    console.log("sorry try again");
  }
};

var flipCard = function(cardId) {
  console.log("User Flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  
};
flipCard(0);
flipCard(2);
checkForMatch();