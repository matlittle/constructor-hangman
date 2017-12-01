
var prompt = require('prompt');
var request = require('request');

getRandomWord();

function getRandomWord() {
    const endURL = "https://wordsapiv1.p.mashape.com/words/";
    const randChar = String.fromCharCode(Math.floor(Math.random() * 27) + 97);
    const randLen = Math.floor(Math.random() * 6) + 4;

    const params = `?letterPattern=^${randChar}.{${randLen}}$&frequencyMin=3&limit=200`;
    const reqURL = `${endURL}${params}`;

    const headers = {
        "X-Mashape-Key": "q4bESNa4dTmshLAQx5GNA4i2csGGp1AhjyUjsnMucLl8HYfsRp",
        "Accept": "application/json"
    }

    const options = {
        url: reqURL,
        headers: headers
    }

    request.get(options, handleWordReturn);
}


function handleWordReturn(err, res, body) {
    if(err) throw err;

    const words = JSON.parse(body).results.data;
    const randNum = Math.floor(Math.random() * words.length);
    const randWord = words[randNum];

    if(randWord === undefined) {
        getRandomWord();
        return;
    }

    console.log("words: ", words);
    console.log("randNum: ", randNum);
    console.log("randWord: ", randWord);

}


