/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        const str = this.phrase.toLowerCase();
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
        const keyboardButtons = document.getElementsByClassName('key');
        const thePhrase = document.getElementsByClassName('letter');

        for (let i = 0; i < keyboardButtons.length; i++) {
            keyboardButtons[i].addEventListener('click', (e) => {
                for (let i = 0; i < thePhrase.length; i++) {
                    if (e.target.innerText === thePhrase[i].innerText) {
                       this.showMatchedLetter(e.target.innerText, thePhrase);
                    }
                }
            });
        }
    }

    showMatchedLetter(guess, thePhrase){

        for (let i = 0; i < thePhrase.length; i++) {
            if (guess === thePhrase[i].innerText) {
                thePhrase[i].classList.remove('hide');
                thePhrase[i].classList.add('show');
            }
        }
    }

}

// const checkValue = new Phrase();
// checkValue.checkLetter();