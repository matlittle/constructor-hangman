const Prompt = require('prompt');
const Colors = require('colors');

const WordConstruct = require('./javascript/word');
const RandomWord = require('./javascript/random');

var game = {
    score: {
        wins: 0,
        losses: 0
    },
    round: 1, 
    guesses: 6,
    word: {}
}

startGame();


function startGame() {
    console.log( '\nWelcome to Hangman!\n'.yellow.bold);

    RandomWord(wordChosen);
}

function newRound() {
    game.round++;
    game.guesses = 6;

    console.log("");

    RandomWord(wordChosen);
}

function wordChosen(w) {
    game.word = new WordConstruct(w);

    promptForGuess();
}

function promptForGuess() {
    console.log(`${game.word.displayWord}\n`);

    Prompt.message = '';
    Prompt.delimiter = ':'.blue;

    Prompt.start();
    Prompt.get([{
        name: "guess",
        description: 'Guess a letter'.blue,
        type: 'string',
        pattern: /[a-zA-Z]/,
        message: 'Guess must be only one letter',
        required: true
    }], function(err, result) {
        if (err) console.log(err);

        handleGuess(result.guess);
    });
}

function handleGuess(guess) {
    guess = guess.toUpperCase();

    if ( game.word.previousGuess(guess) ) {
        alreadyGuessed();
    }

    var found = game.word.checkGuess(guess);

    if(found) {
        console.log(`\nGood Guess!\n`.green.bold);
        game.word.updateDisplayWord();
    } else {
        console.log(`\nNot Found!\n`.red.bold)
        game.guesses--;

        if (game.guesses === 0) {
            gameLost();
            return;
        }
    }

    if( game.word.checkWin() ) {
        gameWon();
    } else {
        promptForGuess();
    }
}

function alreadyGuessed() {
    console.log("Letter previously guessed.\n".yellow);
    promptForGuess();
}

function gameWon() {
    game.score.wins++;
    console.log("You won!\n".green.bold);
    promptForNewRound();
}

function gameLost() {
    game.score.losses++;
    console.log("You lost!\n".green.bold);
    promptForNewRound();
}

function promptForNewRound() {
    Prompt.start();
    Prompt.get([{
        name: "again",
        description: 'Would you like to play again? (Y/N)'.blue,
        type: 'string',
        pattern: /[nyNY]/,
        message: 'Please use only Y or N',
        required: true
    }], function(err, result) {
        if (err) console.log(err);

        if (result.again.toUpperCase() === "Y" ) {
            newRound();
        }
    });
}


