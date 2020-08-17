/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const newGame = new Game();
const startGameButton = document.getElementById('btn__reset');
const keyboardButtons = document.getElementsByClassName('key');

startGameButton.addEventListener('click', () => {
    newGame.startGame();
});

for (i = 0; i < keyboardButtons.length; i++) {
    keyboardButtons[i].addEventListener('click', () => {
        newGame.handleInteraction();
    });
}