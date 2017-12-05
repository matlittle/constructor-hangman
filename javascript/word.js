const Letter = require('./letter');

function WordConstructor(word) {
    this.currentWord = word.toUpperCase();
    this.letters = [];
    this.displayWord =  "";
    this.guessedLetters = [];

    this.buildLettersObj();
    this.updateDisplayWord();
}

WordConstructor.prototype.buildLettersObj = function() {
    for(var i = 0; i < this.currentWord.length; i++) {
        this.letters.push( new Letter(this.currentWord[i]) )
    }
}

WordConstructor.prototype.updateDisplayWord = function() {
    this.displayWord = "";
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].guessed) {
            this.displayWord += `${this.letters[i].value} `;
        } else {
            this.displayWord += "_ ";
        }
    }
}

WordConstructor.prototype.checkGuess = function(guess) {
    this.guessedLetters.push(guess);
    var found = false;
    this.letters.forEach( letter => {
        if (letter.value === guess) {
            letter.guessed = true;
            found = true;
        }
    });

    return found;
}

WordConstructor.prototype.previousGuess = function(guess) {
    if ( this.guessedLetters.indexOf(guess) < 0 ) {
        return false;
    }
    return true;
}

WordConstructor.prototype.checkWin = function() {
    if ( this.displayWord.indexOf('_') < 0 ) {
        return true;
    } else {
        return false;
    }
}

module.exports = WordConstructor;
