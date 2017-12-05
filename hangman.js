const Prompt = require('prompt');

const WordConstruct = require('./javascript/word');
const RandomWord = require('./javascript/random');

var score = {
    wins: 0,
    losses: 0
}


RandomWord(wordChosen);

function wordChosen(w) {
    var word = new WordConstruct(w);
    
    console.log(word.letters);
    console.log(word.displayWord)
    
}

