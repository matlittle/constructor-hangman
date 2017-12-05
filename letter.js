function LetterConstructor(letter) {
    this.value = letter.toUpperCase();
    this.guessed = false;
}

module.exports = LetterConstructor;
