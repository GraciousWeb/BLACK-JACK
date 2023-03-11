/** @format */
let cards = []
let sum = 0;
let message = "";
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let player = {
  name: "Gracious",
  chips: 125
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = `${player.name}: $${player.chips}`

function startGame() {
let firstCard = getRandomCard();
let secondCard = getRandomCard();
cards = [firstCard, secondCard];
sum = firstCard + secondCard;
  renderGame();
}
function getRandomCard() {
 let randomNumber = Math.floor(Math.random() * 13) + 1
 if (randomNumber === 1){
  return 11
 }
 else if (randomNumber > 10){
  return 10
 }
 else {
  return randomNumber
 }
}

function renderGame() {
  cardsEl.textContent = `Cards: `;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You have BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;

  }
  messageEl.textContent = message;
}
function newCard() {
  if (hasBlackJack === false && isAlive === true){
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}
}