/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons:
 * 
 * Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
 * 
 * Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() 
 * method on the Game object. Event delegation can also be used in order to avoid having to add an event listener to each 
 * individual keyboard button. Clicking the space between and around the onscreen keyboard buttons should not result in the 
 * handleInteraction() method being called.
 */


const overlay = document.getElementById('overlay');
const startGameButton = document.getElementById('btn__reset');
const keyboardButtons = document.getElementsByClassName('key');
const thePhrase = document.getElementsByClassName('letter');
const hearts = document.querySelectorAll('#scoreboard img');
const winLoseMessage = document.getElementById('game-over-message');
const phraseContainer = document.querySelector('#phrase ul');


startGameButton.addEventListener('click', () => {
    phraseContainer.innerHTML = '';

    for (let i = 0; i < hearts.length; i++) {
        hearts[i].src = 'images/liveHeart.png'
    }

    for (let i = 0; i < keyboardButtons.length; i++) {
      keyboardButtons[i].disabled = false;
      keyboardButtons[i].className = 'key';
    }

    const newGame = new Game();
    newGame.startGame();

    for (let i = 0; i < keyboardButtons.length; i++) {

        keyboardButtons[i].addEventListener('click', () => {
            newGame.handleInteraction();
        });
    }
});







