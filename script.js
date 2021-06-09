/*const fetch = require('node-fetch');*/
/*const {getBibleVerse} = require('./sefaria.js');*/
import {getBibleVerse} from './sefaria.js';
const getQuote = async () => {
    let inspiringQuote = "";
    let bibleQuote = "";
    let asciiArt = "";
    const response = await fetch("https://zenquotes.io/api/quotes");
    console.log(response);
    if (response.ok) {
        const jsonResponse = await response.json();
         inspiringQuote  = jsonResponse[0].q;
    }
    
    bibleQuote = await getBibleVerse();

    const plusQuote = bibleQuote.split(" ").join("+");

    const asciiResponse = await fetch(`https://artii.herokuapp.com/make?text=${plusQuote}`);
    if (asciiResponse.ok) {
        const jsonAscii = await asciiResponse.text();
        asciiArt = jsonAscii;
    }

    return [`${inspiringQuote} ${bibleQuote}`, asciiArt];
}

const makeQuote = async () => {
    const messageDiv = document.getElementById('messageDiv');
    const p = document.createElement('p');
    const text = await getQuote();
    p.innerHTML = text[0];
    messageDiv.appendChild(p);
    const pre = document.createElement("pre");
    const asciiArt = text[1];
    pre.innerHTML = asciiArt;
    messageDiv.appendChild(pre);
}
console.log('Hello, there!');
makeQuote();