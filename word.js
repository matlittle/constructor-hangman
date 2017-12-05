const Letter = require('./letter');

function WordConstructor(word) {
    this.currentWord = word.toUpperCase();
    this.letters = this.buildLettersObj;
    this.displayWord = this.updateDisplayWord;
}

WordConstructor.prototype.buildLettersObj = function() {
    var lObjs = [];
    for(var i = 0; i < this.currentWord.length; i++) {
        lObjs.push( new Letter(this.currentWord[i]) )
    }
}

WordConstructor.prototype.updateDisplayWord = function() {
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].guessed) {
            this.displayWord[i] = this.letters[i].value;
        } else {
            this.displayWord[i] = "_"
        }
    }
}

module.exports = WordConstructor;

