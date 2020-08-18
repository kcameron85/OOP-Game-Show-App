/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

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

    checkLetter(){

    }

    showMatchedLetter(){

    }

}

const gamePhrase = new Phrase('Three word Phrase');
gamePhrase.addPhraseToDisplay();
