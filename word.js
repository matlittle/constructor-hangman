const Letter = require('./letter');

function WordCon(word) {
    this.currentWord = word.toUpperCase();
    this.letters = this.buildLettersObj;
    this.displayWord = this.buildDisplayWord;
}

WordCon.prototype.buildLettersObj = function() {
    var lObjs = [];
    for(var i = 0; i < this.currentWord.length; i++) {
        
    }
}

WordCon.prototype.buildDisplayWord = function() {

}

