/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   /**
    * The class should include a constructor that initializes the following properties:
    * 
    * missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made 
    * at the start of the game.
    * 
    * phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no
    * numbers, punctuation or other special characters.
    * 
    * activePhrase: This is the Phrase object that’s currently in play. The initial value is null. Within the startGame()
    * method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
    */

    constructor() {
      this.missed = 0; //tracks missed guesses. initial value = 0
      this.phrases =
          [
              new Phrase ('Head over Heals'),
              new Phrase ('Playing Possum'),
              new Phrase ('Break the Ice'),
              new Phrase ('Go for Broke'),
              new Phrase ('Wild Goose Chase')
          ]; //an array of 5 phrase objects.
      this.activePhrase = null; //holds the active game phrase. Initial value = null.
    }

    /**
     * STARTGAME() METHOD:
     * 
     * Hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen 
     * phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object. Also handles resetting the game board after a loss or a win.
     */

    startGame() {  

      /**
       * hides the start screen overlay.
       */
      overlay.style.display = 'none';

      /**
       * Calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase. 
       */
      this.activePhrase = this.getRandomPhrase();

      /**
       * Adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object
       */
      this.activePhrase.addPhraseToDisplay();
      

    }

    /**
     * GETRANDOMPHRASE() METHOD:
     * 
     * This method randomly retrieves one of the phrases stored in the phrases array and returns it.
     */

    getRandomPhrase() {
       /**
       * Uses randomly generated number to select of the five phrases in the object array and returns it.
       */
      const randomNumber = Math.floor(Math.random() * Math.floor(this.phrases.length));
      const phraseArray = this.phrases[randomNumber];
      
      return phraseArray;

    }

    /**
     * HANDLEINTERACTION() METHOD:
     * 
     * This method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. This method should:
     * 
     * Disable the selected letter’s onscreen keyboard button.
     * 
     * If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
     * 
     * If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
     */

    handleInteraction() {

      /**
       * Checking to see if the button clicked by the player matches a letter in the phrase, and then directing the game based 
       * on a correct or incorrect guess.
       */
      /** 
       * If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and 
       * call the removeLife() method.
       * 
       * If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the 
       * showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also 
       * call the gameOver() method.
       */ 

      if (this.activePhrase.checkLetter()) {

        
        event.target.classList.add('chosen');
        this.activePhrase.showMatchedLetter();

        /* 
        * Disables the selected letter’s onscreen keyboard button.
        */ 
       event.target.disabled = true;

        
        if( this.checkForWin() ) {
          this.gameOver();
        }

      } else if (! this.activePhrase.checkLetter()) {

        event.target.classList.add('wrong');
        this.removeLife();

        /* 
        * Disables the selected letter’s onscreen keyboard button.
        */ 
        event.target.disabled = true;

      } 

    }

    /**
     * REMOVELIFE() METHOD:
     * 
     * This method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image.
     * (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out 
     * of lives), then end the game by calling the gameOver() method.
     */

    removeLife() {

      //increments the missed letter counter
      this.missed += 1;

      //removes a heart(life) if player selects wrong letter
        if (this.missed !== 0 && hearts[hearts.length - this.missed].src !== undefined ) {
          hearts[hearts.length - this.missed].src = 'images/lostHeart.png';
        }

      //end the game if all lives have been used.
      if (this.missed === 5) {
        this.gameOver();
      }

    }

    /**
     * CHECKFORWIN() METHOD:
     * 
     * This method checks to see if the player has revealed all of the letters in the active phrase.
     */

    checkForWin() {
      let classCount = 0;

      for( let i = 0; i < thePhrase.length; i++) {
        if(thePhrase[i].classList.contains('show')) {
          classCount++;
          if(classCount === thePhrase.length) {
            return true;
          }
        }
      }
    }

    /**
     * GAMEOVER() METHOD:
     * 
     * This method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 
     * element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS 
     * class.
     */

    gameOver() {

      if(this.missed === 5) {
        overlay.style.display = 'flex';
        winLoseMessage.innerHTML = 'You lose! Please Play Again.'
        overlay.className = 'lose';
      } else {
        overlay.style.display = 'flex';
        winLoseMessage.innerHTML = 'You Win! Great Job!'
        overlay.className = 'win';
      }

    }

    /**
     * This method resets the game properties and variables that are required for the game to function properly when playing additional times. Essentually, it resets your hearts(lives), removes the old phrase from the board in preperation for the new one, removes the disable property from previously selected keyboard keys, and resets the keyboard keys class list to just "key", removing the "chosen" and "wrong" classes.
     */

    resetGame() {
      //resets the number of missed to zero
      this.missed = 0;

      phraseContainer.innerHTML = '';

      for (let i = 0; i < hearts.length; i++) {
          hearts[i].src = 'images/liveHeart.png'
      }
  
      for (let i = 0; i < keyboardButtons.length; i++) {
        keyboardButtons[i].disabled = false;
        keyboardButtons[i].className = 'key';
      }

    }

 }

