/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
/**
 * The class should include a constructor that receives a phrase parameter and initializes the following properties:
 * phrase: this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, but * converted to all lower case.
 */

    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * This adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li 
     * element for each letter. See the example_phrase_html.txt file for an example of what the rendered HTML for a phrase 
     * should look like when the game starts, including any id or class attributes needed. When the player correctly guesses a 
     * letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). Make sure the 
     * phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.
     */

    addPhraseToDisplay() {
        const str = this.phrase;
        const strToArray = str.split("");
        const phraseUl = document.querySelector('#phrase ul');
        
        for(let i = 0; i < strToArray.length; i++) {
            if (strToArray[i] !== " ") {
                const phraseLi = document.createElement('li');
                phraseUl.appendChild(phraseLi);
                phraseLi.innerHTML = `${strToArray[i]}`;
                phraseLi.classList = `hide letter ${strToArray[i]}`;
            } else {
                const phraseLi = document.createElement('li');
                phraseUl.appendChild(phraseLi);
                phraseLi.innerHTML = ` `;
                phraseLi.classList = `space`;
            }
        }

    }


    /**
     * checks to see if the letter selected by the player matches a letter in the phrase.
     */
    checkLetter() {
        if (this.phrase.includes(event.target.innerHTML)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of 
     * the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's 
     * hide CSS class with the show CSS class.
     */
    showMatchedLetter(){
        for (let i = 0; i < thePhrase.length; i++) {
            if (thePhrase[i].classList.contains(event.target.innerHTML)) {
                thePhrase[i].classList.remove('hide');
                thePhrase[i].classList.add('show');
            } 
        }
    }

}