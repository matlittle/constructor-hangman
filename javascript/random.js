const Request = require('request');

function RandomWord(callback) {
    const options = getCallParams();

    Request.get(options, function(err, res, body) {
        if(err) throw err;
        
        const words = JSON.parse(body).results.data;
        const randNum = Math.floor(Math.random() * words.length);
        const randWord = words[randNum];
    
        if(randWord === undefined) {
            RandomWord(callback);
        } else {
            callback(randWord);
        }
    });
}

function getCallParams() {
    const endURL = "https://wordsapiv1.p.mashape.com/words/";
    const randChar = String.fromCharCode(Math.floor(Math.random() * 27) + 97);
    const randLen = Math.floor(Math.random() * 6) + 4;

    const params = `?letterPattern=^${randChar}.{${randLen}}$&frequencyMin=3&limit=200`;
    const reqURL = `${endURL}${params}`;

    const headers = {
        "X-Mashape-Key": "q4bESNa4dTmshLAQx5GNA4i2csGGp1AhjyUjsnMucLl8HYfsRp",
        "Accept": "application/json"
    };

    return {
        url: reqURL,
        headers: headers
    };
}

module.exports = RandomWord;
