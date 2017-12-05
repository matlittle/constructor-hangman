const Letter = require('./letter');

function WordConstructor(word) {
    this.currentWord = word.toUpperCase();
    this.letters = [];
    this.displayWord =  "";

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
            this.displayWord += this.letters[i].value;
        } else {
            this.displayWord += "_";
        }
    }
}

WordConstructor.prototype.checkGuess = function(guess) {
    var found = false;
    this.letters.forEach( letter => {
        if (letter.value === guess) {
            letter.guessed = true;
            found = true;
        }
    });

    return found;
}

module.exports = WordConstructor;

