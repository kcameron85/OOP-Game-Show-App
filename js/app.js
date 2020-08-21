/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const newGame = new Game();
const gamePhrase = new Phrase('Awesome Sauce');
const startGameButton = document.getElementById('btn__reset');

startGameButton.addEventListener('click', () => {
    newGame.startGame();
    gamePhrase.addPhraseToDisplay();
});

